import Head from "next/head";

import FooterSection from "../components/footer";
import {
  Box,
  Link as ChakraLink,
  Container,
  Divider,
  Heading,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import "@fontsource/inter";

function CommunityVolunteerTasksPage() {
  return (
    <>
      <Head>
        <title>Community Volunteer Tasks | The developersIndia Community</title>
        <meta
          name="description"
          content="Discover the various tasks and responsibilities of developersIndia community volunteers across events, design, moderation, wiki management, and social media."
        />
        <meta
          property="og:title"
          content="Community Volunteer Tasks | The developersIndia Community"
        />
        <meta
          property="og:description"
          content="Discover the various tasks and responsibilities of developersIndia community volunteers across events, design, moderation, wiki management, and social media."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Community Volunteer Tasks | The developersIndia Community"
        />
        <meta
          name="twitter:description"
          content="Discover the various tasks and responsibilities of developersIndia community volunteers across events, design, moderation, wiki management, and social media."
        />
      </Head>
      <Container
        maxWidth={{ base: "full", md: "container.lg" }}
        marginTop={{ base: 12, md: 28 }}
        marginBottom={{ base: 8, md: 12 }}
      >
        {/* Header */}
        <VStack spacing={6} marginBottom={12}>
          <Heading
            size={{ base: "xl", md: "2xl" }}
            textAlign="center"
            fontFamily="inter"
            color="#101828"
          >
            Community Volunteer Tasks
          </Heading>

          <Text
            fontSize="lg"
            textAlign="center"
            fontFamily="inter"
            color="#667085"
            lineHeight="tall"
            maxW="4xl"
          >
            If you are reading this, then you might be interested to know how
            the developersIndia community team works, or maybe you want to
            become one.
          </Text>

          <Text
            fontSize="lg"
            textAlign="center"
            fontFamily="inter"
            color="#667085"
            lineHeight="tall"
            maxW="4xl"
          >
            This document lists down all the possible tasks across different
            categories a member will eventually perform once they join the team.
            The list is not exhaustive.
          </Text>

          <Text
            fontSize="lg"
            textAlign="center"
            fontFamily="inter"
            color="#667085"
            lineHeight="tall"
            maxW="4xl"
          >
            We maintain an{" "}
            <ChakraLink
              href="https://github.com/orgs/developersIndia/projects/5/views/1"
              isExternal
              color="blue.500"
              textDecoration="underline"
            >
              ideas & initiatives list
            </ChakraLink>
            , this board contains items that have been requested (or suggested)
            by the community members multiple times.
          </Text>
        </VStack>

        <Divider marginY={12} />

        {/* Managing Events */}
        <Box marginBottom={12}>
          <Heading
            size="xl"
            marginBottom={6}
            fontFamily="inter"
            color="#101828"
          >
            Managing Events
          </Heading>

          <List spacing={3}>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Take the lead on organizing events, and talks in the
                community.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Reach out to any potential folks who would like to organize
                events with the community like AMAs, Code Live-Streams, etc.
              </Text>
            </ListItem>
          </List>
        </Box>

        <Divider marginY={12} />

        {/* Design UI/UX */}
        <Box marginBottom={12}>
          <Heading
            size="xl"
            marginBottom={6}
            fontFamily="inter"
            color="#101828"
          >
            Design UI/UX
          </Heading>

          <List spacing={3}>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Help the team with improving their design sense.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Make any posters for upcoming events.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Help with fixing developersIndia community assets.
              </Text>
            </ListItem>
          </List>
        </Box>

        <Divider marginY={12} />

        {/* Moderating Discord */}
        <Box marginBottom={12}>
          <Heading
            size="xl"
            marginBottom={6}
            fontFamily="inter"
            color="#101828"
          >
            Moderating Discord
          </Heading>

          <List spacing={3}>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Enforce server rules by reminding users to use correct channel
                to discuss something.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Ban/Kick users who are not following rules even after multiple
                level of warnings.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Take any feedback and discuss in with the other community team
                members.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Be a part of in-server activities like Events, Q/A etc.
              </Text>
            </ListItem>
          </List>
        </Box>

        <Divider marginY={12} />

        {/* Managing the Subreddit */}
        <Box marginBottom={12}>
          <Heading
            size="xl"
            marginBottom={6}
            fontFamily="inter"
            color="#101828"
          >
            Managing the Subreddit 🛡️
          </Heading>

          <List spacing={3}>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Be alert of new items in the mod queue, and make decisions
                whether to remove or approve a post from the queue.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Answer any mod-mails. Users sometimes reach out via Reddit mod
                mail to ask queries.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Take action against any user reports.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Take charge of answering on behalf of the developersIndia mod team
                if someone mentions/tags you in a comment/post.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Improve/Create new Subreddit wikis, by collaborating with
                other volunteers.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Actively take feedback from members and take actions to
                improve, if possible.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Optionally be a part of Subreddit activities to drive
                engagement by participating in weekly discussions, competitions,
                AMAs, etc.
              </Text>
            </ListItem>
          </List>
        </Box>

        <Divider marginY={12} />

        {/* Managing the Wiki */}
        <Box marginBottom={12}>
          <Heading
            size="xl"
            marginBottom={6}
            fontFamily="inter"
            color="#101828"
          >
            Managing the Wiki
          </Heading>

          <Text
            fontSize="lg"
            marginBottom={4}
            fontFamily="inter"
            color="#667085"
            lineHeight="tall"
          >
            We have a{" "}
            <ChakraLink
              href="https://wiki.developersindia.in/"
              isExternal
              color="blue.500"
              textDecoration="underline"
            >
              community-driven and open-source wiki
            </ChakraLink>
            .
          </Text>

          <List spacing={3}>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Help with reviewing any wiki proposals that come up, take the
                lead, and help the author with refining the wiki.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Reach out to any potential folks in the community who can
                contribute to the community in terms of their knowledge/wisdom
                by writing a wiki for the community.
              </Text>
            </ListItem>
          </List>
        </Box>

        <Divider marginY={12} />

        {/* Social Media */}
        <Box marginBottom={12}>
          <Heading
            size="xl"
            marginBottom={6}
            fontFamily="inter"
            color="#101828"
          >
            Social Media
          </Heading>

          <List spacing={3}>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Draft out announcement posts across our social channels.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Work with the design team to build out assets for posts.
              </Text>
            </ListItem>
          </List>
        </Box>

        <Divider marginY={12} />

        {/* Closing Note */}
        <Box marginBottom={12}>
          <Text
            fontSize="lg"
            fontFamily="inter"
            color="#667085"
            lineHeight="tall"
            fontStyle="italic"
            textAlign="center"
            padding={6}
            bg="gray.50"
            borderRadius="lg"
          >
            We value your time, understand you might not be able to do all these
            things. Heck, no-one can, We just want you to give your best and
            hopefully together, we will be able to build & grow the community
            1-step at a time.
          </Text>
        </Box>

        <Divider marginY={20} />
        <FooterSection />
      </Container>
    </>
  );
}

export default CommunityVolunteerTasksPage;
