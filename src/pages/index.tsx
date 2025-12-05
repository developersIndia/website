import Head from "next/head";
import Link from "next/link";

import CtaSection from "../components/cta";
import FooterSection from "../components/footer";
import Header from "../components/header";
import MissionSection from "../components/mission";
import ModProfiles from "../components/mod-profiles";
import RedditCarousel from "../components/reddit-carousel";
import { Button, Center, Container, Divider } from "@chakra-ui/react";
import { FaHandsHelping } from "react-icons/fa";

function IndexPage() {
  return (
    <>
      <Head>
        <title>
          The developersIndia Community | India's Largest Tech Community
        </title>
        <meta
          name="description"
          content="Join India's largest and most active developer community with 1M+ members. Connect, learn, and grow with fellow developers. Find jobs, share knowledge, and participate in events."
        />
        <meta name="author" content="developersIndia Community" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://developersindia.in/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://developersindia.in/" />
        <meta
          property="og:title"
          content="The developersIndia Community | India's Largest Tech Community"
        />
        <meta
          property="og:description"
          content="Join India's largest and most active developer community with 1M+ members. Connect, learn, and grow with fellow developers. Find jobs, share knowledge, and participate in events."
        />
        <meta
          property="og:image"
          content="https://developersindia.in/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="developersIndia Community - India's Largest Tech Community"
        />
        <meta property="og:site_name" content="developersIndia" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://developersindia.in/" />
        <meta
          name="twitter:title"
          content="The developersIndia Community | India's Largest Tech Community"
        />
        <meta
          name="twitter:description"
          content="Join India's largest and most active developer community with over 1M members. Connect, learn, and grow with fellow developers."
        />
        <meta
          name="twitter:image"
          content="https://developersindia.in/og-image.png"
        />
        <meta
          name="twitter:image:alt"
          content="developersIndia Community - India's Largest Tech Community"
        />
        <meta name="twitter:creator" content="@developersIndia" />
        <meta name="twitter:site" content="@developersIndia" />

        {/* Additional SEO tags */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.country" content="India" />
        <meta name="language" content="English" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "developersIndia",
              url: "https://developersindia.in/",
              logo: "https://developersindia.in/favicon.svg",
              description:
                "India's largest and most active developer community with over 1M members. Connect, learn, and grow with fellow developers.",
              sameAs: [
                "https://reddit.com/r/developersIndia",
                "https://discord.gg/MKZNR6j",
                "https://github.com/developersIndia",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "contact.developersindia@gmail.com",
                contactType: "customer support",
              },
            }),
          }}
        />
      </Head>

      <Container
        maxWidth={{ base: "full", md: "container.lg" }}
        marginTop={{ base: 12, md: 28 }}
        marginBottom={{ base: 8, md: 12 }}
        paddingX={{ base: 4, md: 8 }}
      >
        <Header />
        <Divider marginY={20} />
        <RedditCarousel />
        <Divider marginY={20} />

        {/* Volunteer CTA */}
        <Center marginY={12} paddingX={{ base: 4, md: 0 }}>
          <Link href="/become-a-volunteer" passHref>
            <Button
              leftIcon={<FaHandsHelping />}
              colorScheme="green"
              size={{ base: "md", md: "lg" }}
              variant="solid"
              bgColor="gray.300"
              color="#000000ff"
              _hover={{ bgColor: "gray.400" }}
              borderRadius={90}
              boxShadow="lg"
              width={{ base: "100%", md: "auto" }}
              maxWidth={{ base: "280px", md: "none" }}
            >
              Become a Volunteer
            </Button>
          </Link>
        </Center>

        {/* <MissionSection /> */}
        {/* <Divider marginY={20} /> */}
        {/* <ModProfiles /> */}
        {/* <Divider marginY={20} /> */}
        {/* <CtaSection /> */}
        <FooterSection />
      </Container>
    </>
  );
}

export default IndexPage;
