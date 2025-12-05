import { NextApiRequest, NextApiResponse } from "next";

interface RedditPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  author: string;
  comments: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const rssUrl = "https://www.reddit.com/r/developersIndia/hot.rss";
    const response = await fetch(rssUrl, {
      headers: {
        "User-Agent": "developersIndia-website/1.0",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const rssText = await response.text();
    const posts = parseRedditRSS(rssText);

    // Cache the response for 5 minutes
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate");

    return res.status(200).json({ posts: posts.slice(0, 10) });
  } catch (error) {
    console.error("Failed to fetch Reddit RSS:", error);
    return res.status(500).json({
      message: "Failed to fetch posts",
      posts: [],
    });
  }
}

function parseRedditRSS(rssText: string): RedditPost[] {
  const posts: RedditPost[] = [];

  try {
    // Extract items from RSS feed
    const itemRegex = /<entry>(.*?)<\/entry>/gs;
    const items = rssText.match(itemRegex) || [];

    items.forEach((item) => {
      const title = extractTag(item, "title");
      const link = extractAttribute(item, "link", "href");
      const updated = extractTag(item, "updated");
      const content = extractTag(item, "content");
      const author = extractTag(item, "name");

      if (title && link) {
        posts.push({
          title: decodeHTML(title),
          link,
          pubDate: updated || new Date().toISOString(),
          description: decodeHTML(content || ""),
          author: author || "Unknown",
          comments: 0, // Reddit RSS doesn't provide comment count directly
        });
      }
    });
  } catch (error) {
    console.error("Error parsing RSS:", error);
  }

  return posts;
}

function extractTag(text: string, tagName: string): string {
  const regex = new RegExp(`<${tagName}[^>]*?>(.*?)<\/${tagName}>`, "s");
  const match = text.match(regex);
  return match ? match[1].trim() : "";
}

function extractAttribute(
  text: string,
  tagName: string,
  attribute: string
): string {
  const regex = new RegExp(`<${tagName}[^>]*?${attribute}="([^"]*?)"`, "s");
  const match = text.match(regex);
  return match ? match[1].trim() : "";
}

function decodeHTML(html: string): string {
  const entities: { [key: string]: string } = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
    "&nbsp;": " ",
  };

  return html.replace(/&[#\w]+;/g, (entity) => entities[entity] || entity);
}
