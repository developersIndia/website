import Head from "next/head";

import FooterSection from "../components/footer";
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import "@fontsource/inter";
import { FaCalendarAlt, FaDownload } from "react-icons/fa";

function EventsCalendarPage() {
  const icalUrl =
    "https://calendar.google.com/calendar/ical/9f1337e4154910eb1bdb3bfac32b88f69546468b1281a6db58f50a909df5049f%40group.calendar.google.com/public/basic.ics";

  return (
    <>
      <Head>
        <title>Events Calendar | The developersIndia Community</title>
        <meta
          name="description"
          content="Stay up-to-date with developersIndia community events, talks, AMAs, and networking sessions. View our calendar and subscribe to never miss an event."
        />
        <meta
          property="og:title"
          content="Events Calendar | The developersIndia Community"
        />
        <meta
          property="og:description"
          content="Stay up-to-date with developersIndia community events, talks, AMAs, and networking sessions. View our calendar and subscribe to never miss an event."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Events Calendar | The developersIndia Community"
        />
        <meta
          name="twitter:description"
          content="Stay up-to-date with developersIndia community events, talks, AMAs, and networking sessions. View our calendar and subscribe to never miss an event."
        />
      </Head>
      <Container
        maxWidth={{ base: "full", md: "container.xl" }}
        marginTop={{ base: 12, md: 28 }}
        marginBottom={{ base: 8, md: 12 }}
        paddingX={{ base: 4, md: 8 }}
      >
        {/* Header */}
        <VStack spacing={6} marginBottom={12}>
          <Heading
            size={{ base: "xl", md: "2xl" }}
            textAlign="center"
            fontFamily="inter"
            color="#101828"
          >
            Events Calendar
          </Heading>

          <Text
            fontSize="lg"
            textAlign="center"
            fontFamily="inter"
            color="#667085"
            lineHeight="tall"
            maxW="4xl"
          >
            Stay up-to-date with our community events, talks, AMAs, workshops,
            and networking sessions. Never miss an opportunity to connect and
            learn with fellow developers!
          </Text>
        </VStack>

        {/* iCal Download Button */}
        <VStack spacing={4} marginBottom={8}>
          <Button
            leftIcon={<FaDownload />}
            size={{ base: "md", md: "lg" }}
            variant="solid"
            colorScheme="blue"
            borderRadius={90}
            boxShadow="lg"
            width={{ base: "100%", md: "auto" }}
            maxWidth={{ base: "300px", md: "none" }}
            onClick={() => window.open(icalUrl, "_blank")}
          >
            Subscribe to Calendar (iCal)
          </Button>
          <Text
            fontSize="sm"
            fontFamily="inter"
            color="#667085"
            textAlign="center"
            maxW="md"
          >
            Import our events calendar into your preferred calendar app (Google
            Calendar, Outlook, Apple Calendar, etc.)
          </Text>
        </VStack>

        <Divider marginY={12} />

        {/* Google Calendar Embed */}
        <Box marginBottom={12}>
          <Box
            as="iframe"
            src="https://calendar.google.com/calendar/embed?src=9f1337e4154910eb1bdb3bfac32b88f69546468b1281a6db58f50a909df5049f%40group.calendar.google.com&ctz=Asia%2FKolkata"
            width="100%"
            height={{ base: "500px", md: "600px" }}
            frameBorder="0"
            scrolling="no"
            borderRadius="md"
            border="1px solid"
            borderColor="gray.200"
            overflow="hidden"
            boxShadow="lg"
          />
        </Box>

        {/* Additional Information
        <Box marginBottom={12}>
          <VStack spacing={4}>
            <Heading
              size="lg"
              fontFamily="inter"
              color="#101828"
              textAlign="center"
            >
              How to Stay Updated
            </Heading>
            <Text
              fontSize="md"
              fontFamily="inter"
              color="#667085"
              lineHeight="tall"
              textAlign="center"
              maxW="3xl"
            >
              • Follow our{" "}
              <Box as="a" color="blue.500" href="https://reddit.com/r/developersIndia" target="_blank" rel="noopener noreferrer" textDecoration="underline">
                Reddit community
              </Box>{" "}
              for event announcements
            </Text>
            <Text
              fontSize="md"
              fontFamily="inter"
              color="#667085"
              lineHeight="tall"
              textAlign="center"
              maxW="3xl"
            >
              • Join our{" "}
              <Box as="a" color="blue.500" href="https://discord.gg/MKZNR6j" target="_blank" rel="noopener noreferrer" textDecoration="underline">
                Discord server
              </Box>{" "}
              for real-time updates and discussions
            </Text>
            <Text
              fontSize="md"
              fontFamily="inter"
              color="#667085"
              lineHeight="tall"
              textAlign="center"
              maxW="3xl"
            >
              • Subscribe to our calendar using the iCal link above to get notifications on your device
            </Text>
          </VStack>
        </Box> */}

        <Divider marginY={20} />
        <FooterSection />
      </Container>
    </>
  );
}

export default EventsCalendarPage;
