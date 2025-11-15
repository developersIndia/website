import {
  AspectRatio,
  Badge,
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Link,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
} from "react-icons/fa";

interface RedditPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  author: string;
  comments: number;
  imageUrl?: string;
  thumbnail?: string;
}

function RedditCarousel() {
  const [posts, setPosts] = useState<RedditPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchRedditPosts();
  }, []);

  const fetchRedditPosts = async () => {
    try {
      const response = await fetch("/api/reddit-feed");
      const data = await response.json();
      setPosts(data.posts || []);
    } catch (error) {
      console.error("Failed to fetch Reddit posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const nextPost = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const prevPost = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  if (loading) {
    return (
      <Box>
        <Skeleton height="200px" borderRadius="lg" />
        <HStack justify="center" mt={4}>
          <Skeleton height="40px" width="40px" borderRadius="full" />
          <Skeleton height="40px" width="40px" borderRadius="full" />
        </HStack>
      </Box>
    );
  }

  if (posts.length === 0) {
    return (
      <Text textAlign="center" color="gray.500">
        No posts available at the moment.
      </Text>
    );
  }

  const currentPost = posts[currentIndex];

  return (
    <VStack spacing={6} width="100%" paddingX={{ base: 4, md: 0 }}>
      <Heading
        fontFamily="inter"
        fontWeight="bold"
        size={{ base: "lg", md: "xl" }}
        textAlign="center"
        color="#101828"
        paddingX={{ base: 4, md: 0 }}
      >
        Trending discussions on the forum
      </Heading>

      <Box
        position="relative"
        w="full"
        maxW="800px"
        bg="white"
        borderRadius="lg"
        boxShadow="lg"
        p={{ base: 4, md: 6 }}
        border="1px solid"
        borderColor="gray.200"
        marginX={{ base: 4, md: 0 }}
      >
        <VStack spacing={4} align="stretch">
          <Badge
            colorScheme="orange"
            fontSize="sm"
            w="fit-content"
            px={2}
            py={1}
            borderRadius="md"
          >
            Hot Post #{currentIndex + 1}
          </Badge>

          {currentPost.imageUrl && (
            <AspectRatio ratio={16 / 9} maxH="200px">
              <Image
                src={currentPost.imageUrl}
                alt={currentPost.title}
                borderRadius="md"
                objectFit="cover"
                fallback={
                  <Box
                    bg="gray.100"
                    w="100%"
                    h="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="md"
                  >
                    <Text color="gray.500" fontSize="sm">
                      Image unavailable
                    </Text>
                  </Box>
                }
              />
            </AspectRatio>
          )}

          <Heading
            size={{ base: "sm", md: "md" }}
            fontFamily="inter"
            color="#101828"
            lineHeight="1.4"
            noOfLines={2}
          >
            {currentPost.title}
          </Heading>

          <Text
            color="#667085"
            fontSize={{ base: "xs", md: "sm" }}
            fontFamily="inter"
            noOfLines={3}
            dangerouslySetInnerHTML={{
              __html:
                currentPost.description.replace(/<[^>]*>/g, "").slice(0, 200) +
                "...",
            }}
          />

          <HStack
            justify="space-between"
            align="center"
            flexWrap={{ base: "wrap", md: "nowrap" }}
            gap={2}
          >
            <VStack align="start" spacing={1}>
              <Text fontSize="xs" color="gray.600">
                by {currentPost.author}
              </Text>
              <Text fontSize="xs" color="gray.500">
                {new Date(currentPost.pubDate).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </Text>
            </VStack>

            <Link
              href={currentPost.link}
              isExternal
              color="blue.500"
              fontWeight="medium"
              fontSize={{ base: "xs", md: "sm" }}
              display="flex"
              alignItems="center"
              gap={2}
              _hover={{ color: "blue.600" }}
              flexShrink={0}
            >
              Read More <FaExternalLinkAlt size={12} />
            </Link>
          </HStack>
        </VStack>

        <Flex justify="space-between" align="center" mt={6}>
          <IconButton
            aria-label="Previous post"
            icon={<FaChevronLeft />}
            onClick={prevPost}
            isDisabled={posts.length <= 1}
            colorScheme="blue"
            variant="ghost"
            size="sm"
          />

          <HStack spacing={2}>
            {posts.slice(0, 5).map((_, index) => (
              <Box
                key={index}
                w={2}
                h={2}
                borderRadius="full"
                bg={index === currentIndex ? "blue.500" : "gray.300"}
                cursor="pointer"
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </HStack>

          <IconButton
            aria-label="Next post"
            icon={<FaChevronRight />}
            onClick={nextPost}
            isDisabled={posts.length <= 1}
            colorScheme="blue"
            variant="ghost"
            size="sm"
          />
        </Flex>
      </Box>
    </VStack>
  );
}

export default RedditCarousel;
