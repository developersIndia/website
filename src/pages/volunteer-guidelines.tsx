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

function VolunteerGuidelinesPage() {
  return (
    <>
      <Head>
        <title>Volunteer Guidelines | The developersIndia Community</title>
        <meta
          name="description"
          content="Guidelines and code of conduct for developersIndia community volunteers. Learn about responsibilities, collaboration style, and best practices for volunteering."
        />
        <meta
          property="og:title"
          content="Volunteer Guidelines | The developersIndia Community"
        />
        <meta
          property="og:description"
          content="Guidelines and code of conduct for developersIndia community volunteers. Learn about responsibilities, collaboration style, and best practices for volunteering."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Volunteer Guidelines | The developersIndia Community"
        />
        <meta
          name="twitter:description"
          content="Guidelines and code of conduct for developersIndia community volunteers. Learn about responsibilities, collaboration style, and best practices for volunteering."
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
            Volunteer Guidelines
          </Heading>
        </VStack>

        <Divider marginY={12} />

        {/* Responsibilities */}
        <Box marginBottom={12}>
          <Heading
            size="xl"
            marginBottom={6}
            fontFamily="inter"
            color="#101828"
          >
            Responsibilities
          </Heading>

          <Text
            fontSize="lg"
            marginBottom={6}
            fontFamily="inter"
            color="#667085"
            lineHeight="tall"
          >
            Your responsibilities while volunteering at developersIndia will
            depend on what you work with. In any case, below are some general
            things that everyone must (try) to follow.
          </Text>

          <List spacing={3}>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • As an active community volunteer, you must ensure that the
                community members follow the rules enforced inside each channel.
                Your responsibility involves checking that no one violates the{" "}
                <ChakraLink
                  href="/code-of-conduct"
                  color="blue.500"
                  textDecoration="underline"
                >
                  developersIndia Code of Conduct
                </ChakraLink>
                .
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Participate in community team meetings, and provide feedback
                on how & what the community can do to improve the experience.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Participate & encourage folks inside the community to
                participate in community events or software projects.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Engage with community updates across our socials.
              </Text>
            </ListItem>
          </List>
        </Box>

        <Divider marginY={12} />

        {/* Volunteer Code of Conduct */}
        <Box marginBottom={12}>
          <Heading
            size="xl"
            marginBottom={6}
            fontFamily="inter"
            color="#101828"
          >
            Volunteer Code of Conduct
          </Heading>

          <Text
            fontSize="lg"
            marginBottom={6}
            fontFamily="inter"
            color="#667085"
            lineHeight="tall"
          >
            If you happen to volunteer with the subreddit, make sure to follow{" "}
            <ChakraLink
              href="https://redditinc.com/policies/moderator-code-of-conduct"
              isExternal
              color="blue.500"
              textDecoration="underline"
            >
              Reddit's Moderator Code of Conduct
            </ChakraLink>
          </Text>

          <Text
            fontSize="lg"
            marginBottom={6}
            fontFamily="inter"
            color="#667085"
            lineHeight="tall"
          >
            Below is a set of guidelines that are expected to be followed by
            each community volunteer.
          </Text>

          {/* Be curious and have a growth mindset */}
          <Box marginBottom={8}>
            <Heading
              size="lg"
              marginBottom={4}
              fontFamily="inter"
              color="#101828"
            >
              Be curious and have a growth mindset
            </Heading>

            <List spacing={3}>
              <ListItem>
                <Text fontFamily="inter" color="#667085">
                  • You seek new and different perspectives to expand your
                  views.
                </Text>
              </ListItem>
              <ListItem>
                <Text fontFamily="inter" color="#667085">
                  • You view feedback as an opportunity to learn.
                </Text>
              </ListItem>
              <ListItem>
                <Text fontFamily="inter" color="#667085">
                  • You make decisions deliberately with clarity of purpose.
                </Text>
              </ListItem>
              <ListItem>
                <Text fontFamily="inter" color="#667085">
                  • You are open to candid feedback from fellow community
                  members without getting defensive
                </Text>
              </ListItem>
            </List>
          </Box>

          {/* Use your judgement efficiently */}
          <Box marginBottom={8}>
            <Heading
              size="lg"
              marginBottom={4}
              fontFamily="inter"
              color="#101828"
            >
              Use your judgement efficiently
            </Heading>

            <List spacing={3}>
              <ListItem>
                <Text fontFamily="inter" color="#667085">
                  • You make decisions using your judgment with the community's
                  best interest in mind.
                </Text>
              </ListItem>
              <ListItem>
                <Text fontFamily="inter" color="#667085">
                  • When faced with ambiguity, instead of not making a decision,
                  you make a provisional, common-sense decision and then.
                </Text>
              </ListItem>
              <ListItem>
                <Text fontFamily="inter" color="#667085">
                  • Communicate your decision to other members in the team.
                </Text>
              </ListItem>
              <ListItem>
                <Text fontFamily="inter" color="#667085">
                  • Seek information from others that can disprove your decision
                  (in case of an incorrect decision).
                </Text>
              </ListItem>
            </List>
          </Box>

          {/* Don't be a jerk */}
          <Box marginBottom={8}>
            <Heading
              size="lg"
              marginBottom={4}
              fontFamily="inter"
              color="#101828"
            >
              Don't be a jerk
            </Heading>

            <List spacing={3}>
              <ListItem>
                <Text fontFamily="inter" color="#667085">
                  • You don't interrupt others or ignore their opinions.
                </Text>
              </ListItem>
              <ListItem>
                <Text fontFamily="inter" color="#667085">
                  • You don't bully, humiliate, or oppress individuals inside
                  the community.
                </Text>
              </ListItem>
              <ListItem>
                <Text fontFamily="inter" color="#667085">
                  • You don't use intimidation as a tactic – physical, vocal, or
                  any other kind.
                </Text>
              </ListItem>
              <ListItem>
                <Text fontFamily="inter" color="#667085">
                  • You don't attack people personally while giving feedback.
                </Text>
              </ListItem>
              <ListItem>
                <Text fontFamily="inter" color="#667085">
                  • You treat people with respect regardless of their
                  disagreements or differences with you.
                </Text>
              </ListItem>
            </List>
          </Box>
        </Box>

        <Divider marginY={12} />

        {/* Collaboration & Work Style */}
        <Box marginBottom={12}>
          <Heading
            size="xl"
            marginBottom={6}
            fontFamily="inter"
            color="#101828"
          >
            Collaboration & Work Style
          </Heading>

          <Text
            fontSize="lg"
            marginBottom={6}
            fontFamily="inter"
            color="#667085"
            lineHeight="tall"
          >
            This section highlights how the volunteers & admins can work
            together in harmony and build trust among each other. We highly
            recommend reading this.
          </Text>

          <List spacing={3} marginBottom={8}>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • In case of any disputes among volunteers or between volunteers
                & admins, Community admins make the final decision.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • We don't want (or expect) you to work 24×7. Being a moderator
                & community builder is a thankless job. So if you choose to be
                one, know the consequences in & out. Nevertheless, we (community
                admins) greatly appreciate your work ❤️ and will try the best of
                our efforts to make the journey smooth.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • To build a mutual understanding & trust with each other, we
                recommend talking with each other over an audio call (either on
                google meet, discord VC, etc.) once a week or a month (whatever
                the consensus is). Building trust over a huge distance over
                "text" chat doesn't work and has never worked. To fix this, we
                need to be able to talk with you to understand why you want to
                be a community moderator & what motivates you to stick with the
                community.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • We expect you to take ownership of the things you suggest.
                Instead of pinging other members, you should be able to execute
                the decisions.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • You are always free to provide feedback to other members on
                how they work but make sure that no one gets hurt in this
                process, i.e., instead of criticizing people, give them a
                possible solution or a way to improve. In case of disputes, try
                to avoid arguing over the internet. Always know there is a real
                person on the other side of the screen. (Note: this can be
                prevented if everyone trusts each other).
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • You are free to leave the team at any point in time. Ping an
                admin, and we will relieve you of your duties. As soon as you
                leave, you are not entitled to talk on behalf of the community
                team.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • You can take extended breaks as needed (please try to prevent
                burnout 🙏). Just let the team know you will not be available
                for some time.
              </Text>
            </ListItem>
          </List>

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
            If you disagree with any point in this list, we recommend you to NOT
            join the team. However, if you have any follow-up questions on some
            items, feel free to ping the admin team or a team representative or
            email us at{" "}
            <Text as="span" color="blue.500">
              contact.developersindia@gmail.com
            </Text>
            .
          </Text>
        </Box>

        <Divider marginY={20} />
        <FooterSection />
      </Container>
    </>
  );
}

export default VolunteerGuidelinesPage;
