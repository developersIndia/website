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

function AmaGuidelinesPage() {
  return (
    <>
      <Head>
        <title>AMA Guidelines & Process | The developersIndia Community</title>
        <meta
          name="description"
          content="Complete guidelines and process for hosting Ask Me Anything (AMA) sessions with the developersIndia community. Learn about requirements, duration, and best practices."
        />
        <meta
          property="og:title"
          content="AMA Guidelines & Process | The developersIndia Community"
        />
        <meta
          property="og:description"
          content="Complete guidelines and process for hosting Ask Me Anything (AMA) sessions with the developersIndia community. Learn about requirements, duration, and best practices."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="AMA Guidelines & Process | The developersIndia Community"
        />
        <meta
          name="twitter:description"
          content="Complete guidelines and process for hosting Ask Me Anything (AMA) sessions with the developersIndia community. Learn about requirements, duration, and best practices."
        />
      </Head>
      <Container
        maxWidth={{ base: "full", md: "container.lg" }}
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
            AMA Guidelines
          </Heading>
        </VStack>

        <Divider marginY={12} />

        {/* AMA Process */}
        <Box marginBottom={12}>
          <Heading
            size="xl"
            marginBottom={6}
            fontFamily="inter"
            color="#101828"
          >
            AMA Process
          </Heading>

          <Text
            fontSize="lg"
            marginBottom={6}
            fontFamily="inter"
            color="#667085"
            lineHeight="tall"
          >
            A brief overview of how the AMA process looks like:
          </Text>

          <List spacing={3}>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • A representative from the community volunteer team reaches out
                to you.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • We confirm your identity and reach out with a confirmation and
                some follow-up questions.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • We confirm your availability for the session. AMA sessions are
                usually organized during weekends.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • We publicly announce the AMA on our socials, including the
                Subreddit, at-least a week before the AMA.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • You post from your Reddit Account as soon as the agreed
                day/time arrives for the AMA. We mark this post as an official
                AMA post and pin it (for at least 1 week).
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • The community team remains online with you to resolve any of
                your queries or problems during the session.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • You start answering questions for a previously agreed interval
                time (E.g., 5 hours).
              </Text>
            </ListItem>
          </List>
        </Box>

        <Divider marginY={12} />

        {/* Guidelines */}
        <Box marginBottom={12}>
          <Heading
            size="xl"
            marginBottom={6}
            fontFamily="inter"
            color="#101828"
          >
            Guidelines
          </Heading>

          {/* For Host */}
          <Box marginBottom={8}>
            <Heading
              size="lg"
              marginBottom={6}
              fontFamily="inter"
              color="#101828"
            >
              For Host
            </Heading>

            {/* Before AMA */}
            <Box marginBottom={6}>
              <Heading
                size="md"
                marginBottom={4}
                fontFamily="inter"
                color="#101828"
              >
                Before AMA
              </Heading>

              {/* Availability */}
              <Box marginBottom={4}>
                <Heading
                  size="sm"
                  marginBottom={2}
                  fontFamily="inter"
                  color="#101828"
                >
                  Availability
                </Heading>
                <List spacing={2}>
                  <ListItem>
                    <Text fontFamily="inter" color="#667085">
                      • The volunteer team will provide you with suggestions for
                      some good dates to host the session, although you have the
                      final call on which date you will be available.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text fontFamily="inter" color="#667085">
                      • Weekends are preferred due to everyone's availability.
                    </Text>
                  </ListItem>
                </List>
              </Box>

              {/* Session Duration */}
              <Box marginBottom={4}>
                <Heading
                  size="sm"
                  marginBottom={2}
                  fontFamily="inter"
                  color="#101828"
                >
                  Session Duration
                </Heading>
                <List spacing={2}>
                  <ListItem>
                    <Text fontFamily="inter" color="#667085">
                      • All AMA sessions usually last 4–5 hours on average, you
                      are free to take on questions as long as you like.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text fontFamily="inter" color="#667085">
                      • Some sessions have been extended by 24 hours as well, at
                      the guest's request.
                    </Text>
                  </ListItem>
                </List>
              </Box>

              {/* Headshot/Profile Pic */}
              <Box marginBottom={4}>
                <Heading
                  size="sm"
                  marginBottom={2}
                  fontFamily="inter"
                  color="#101828"
                >
                  Headshot/Profile Pic
                </Heading>
                <List spacing={2}>
                  <ListItem>
                    <Text fontFamily="inter" color="#667085">
                      • The volunteer team will request a profile picture or
                      headshot, which will be used in our event announcement
                      posters.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text fontFamily="inter" color="#667085">
                      • We will share the announcement post with you before
                      making it public to take on any suggestions you have.
                    </Text>
                  </ListItem>
                </List>
              </Box>

              {/* Bio */}
              <Box marginBottom={4}>
                <Heading
                  size="sm"
                  marginBottom={2}
                  fontFamily="inter"
                  color="#101828"
                >
                  Bio
                </Heading>
                <List spacing={2}>
                  <ListItem>
                    <Text fontFamily="inter" color="#667085">
                      • The volunteer team will request a short bio about
                      yourself, this is used to introduce the guest to the
                      community. It's only used on our 
                      <ChakraLink
                        href="https://www.reddit.com/r/developersIndia/comments/15avbhs/join_hackerranks_cto_harishankaran_k_an_ama_on/"
                        isExternal
                        color="blue.500"
                        textDecoration="underline"
                      >
                        {" "}
                        Reddit announcements.
                      </ChakraLink>
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text fontFamily="inter" color="#667085">
                      • Based on your bio, the AMA conversation topics are
                      decided. Topics are things that you would like to talk
                      about. So feel free to share them with the team
                      separately.
                    </Text>
                  </ListItem>
                </List>
              </Box>

              {/* Event Promotion */}
              <Box marginBottom={4}>
                <Heading
                  size="sm"
                  marginBottom={2}
                  fontFamily="inter"
                  color="#101828"
                >
                  Event Promotion
                </Heading>
                <List spacing={2}>
                  <ListItem>
                    <Text fontFamily="inter" color="#667085">
                      • Once the details have been decided and agreed upon, we
                      will announce the AMA session at least 1 week before the
                      date of the AMA. The event is also published on our public
                      <ChakraLink
                        href="/events-calendar"
                        isExternal
                        color="blue.500"
                        textDecoration="underline"
                      >
                        {" "}
                        events calendar
                      </ChakraLink>
                     .
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text fontFamily="inter" color="#667085">
                      • Once the volunteer team announces the event, We request
                      hosts to announce the AMA session on their socials so that
                      it reaches out to your audience as well. Feel free to tag
                      us (or quote our announcement posts) on{" "}
                      <ChakraLink
                        href="https://www.linkedin.com/company/developersindia/"
                        isExternal
                        color="blue.500"
                        textDecoration="underline"
                      >
                        LinkedIn
                      </ChakraLink>{" "}
                      or{" "}
                      <ChakraLink
                        href="https://x.com/devsinindia"
                        isExternal
                        color="blue.500"
                        textDecoration="underline"
                      >
                        X
                      </ChakraLink>{" "}
                      while doing so.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text fontFamily="inter" color="#667085">
                      • If you work in an organization, we will mention (& tag)
                      those organizations when we announce the AMA. It's not
                      expected, but we request you let the social media (or
                      marketing) team at your workplace know about this. Again,
                      this is optional and good to have. If you have any
                      problems or concerns with tagging your workplace, please
                      let us know beforehand.
                    </Text>
                  </ListItem>
                </List>
              </Box>

              {/* Identity proof for AMA */}
              <Box marginBottom={4}>
                <Heading
                  size="sm"
                  marginBottom={2}
                  fontFamily="inter"
                  color="#101828"
                >
                  Identity proof for AMA
                </Heading>
                <List spacing={2}>
                  <ListItem>
                    <Text fontFamily="inter" color="#667085">
                      • For proof of identity, we request guests to create a
                      post from their official LinkedIn or X account. Here's an
                      <ChakraLink
                        href="https://www.linkedin.com/posts/kailashnadh_rdevelopersindia-on-reddit-i-am-kailash-activity-7060833217544654848-FBAo/"
                        isExternal
                        color="blue.500"
                        textDecoration="underline"
                      >
                        {" "}
                        example of a verification post on LinkedIn by Dr. Kailash
                      </ChakraLink>
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text fontFamily="inter" color="#667085">
                      • The link to this verification post can then be pasted
                      into the {" "}
                      <ChakraLink
                        href="https://www.reddit.com/r/developersIndia/comments/19b5g1r/i_am_navaneeth_ceo_at_tooljet_25k_stars_500/"
                        isExternal
                        color="blue.500"
                        textDecoration="underline"
                      >
                         AMA post body
                      </ChakraLink>{" "}
                    </Text>
                  </ListItem>
                </List>
              </Box>
            </Box>

            {/* During the AMA */}
            <Box marginBottom={6}>
              <Heading
                size="md"
                marginBottom={4}
                fontFamily="inter"
                color="#101828"
              >
                During the AMA
              </Heading>

              <List spacing={3}>
                <ListItem>
                  <Text fontFamily="inter" color="#667085">
                    • You don't need to answer any questions via DM. Hosts are
                    recommended to close their DMs to keep trolls & unwanted
                    chat requests away. You can do this by visiting the URL{" "}
                    <ChakraLink
                      href="https://new.reddit.com/settings/messaging"
                      isExternal
                      color="blue.500"
                      textDecoration="underline"
                    >
                      https://new.reddit.com/settings/messaging
                    </ChakraLink>{" "}
                    on Reddit web.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontFamily="inter" color="#667085">
                    • You don't have to reveal any personal details like phone,
                    address, email, etc.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontFamily="inter" color="#667085">
                    • Reach out to moderators if someone is trying to create a
                    ruckus in threads, spreading hate, or is being rude.
                    However, the volunteer team will already be actively taking
                    care of this.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontFamily="inter" color="#667085">
                    • We recommend hosts, that they address the question in
                    batches, a lot of questions may start popping up one after
                    another which may overwhelm you. Please take frequent breaks
                    during the AMA.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontFamily="inter" color="#667085">
                    • Avoid using GenAI tools while answering questions, this
                    should be a no-brainer that members are looking for your
                    perspective & opinions, we don't care if your answers have
                    some typos, just be human.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontFamily="inter" color="#667085">
                    • During the session, if you think some questions are
                    getting repeated, feel free to ignore them. Optionally, you
                    can create a summarized answer which we can pin to the
                    thread.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontFamily="inter" color="#667085">
                    • The AMA duration is based on your availability, it can go
                    anything from 2 to 3 hours to 24 hours as well.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontFamily="inter" color="#667085">
                    • During the AMA, someone from the volunteer team will
                    constantly be in touch with you to clarify any questions or
                    resolve any issues.
                  </Text>
                </ListItem>
              </List>
            </Box>

            {/* After AMA */}
            <Box marginBottom={6}>
              <Heading
                size="md"
                marginBottom={4}
                fontFamily="inter"
                color="#101828"
              >
                After AMA
              </Heading>

              <List spacing={3}>
                <ListItem>
                  <Text fontFamily="inter" color="#667085">
                    • After the AMA has ended, we will lock the post so that no
                    one can ask any more questions. It's also an indicator for
                    everyone else that the Host is no longer available to answer
                    any further questions.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontFamily="inter" color="#667085">
                    • After the AMA, has ended, We recommend hosts edit the
                    original post and say their goodbyes to the community. Feel
                    free to include any external web links at the bottom of the
                    AMA post.
                  </Text>
                </ListItem>
              </List>
            </Box>
          </Box>

          {/* For Everyone else */}
          <Box marginBottom={8}>
            <Heading
              size="lg"
              marginBottom={4}
              fontFamily="inter"
              color="#101828"
            >
              For Everyone else
            </Heading>

            <List spacing={3}>
              <ListItem>
                <Text fontFamily="inter" color="#667085">
                  • Make sure to follow the{" "}
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
                  • Be polite and professional while asking questions from the
                  host.
                </Text>
              </ListItem>
              <ListItem>
                <Text fontFamily="inter" color="#667085">
                  • Any failure to adhere to the community code of conduct &
                  rules can lead to a permanent ban.
                </Text>
              </ListItem>
            </List>
          </Box>
        </Box>

        <Divider marginY={12} />

        {/* Where can I find past AMAs? */}
        <Box marginBottom={12}>
          <Heading
            size="xl"
            marginBottom={6}
            fontFamily="inter"
            color="#101828"
          >
            Where can I find past AMAs?
          </Heading>

          <List spacing={3}>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • You can also filter the subreddit with{" "}
                <ChakraLink
                  href="https://www.reddit.com/r/developersIndia/?f=flair_name%3A%22AMA%22"
                  isExternal
                  color="blue.500"
                  textDecoration="underline"
                >
                  AMA post flair
                </ChakraLink>
                .
              </Text>
            </ListItem>
          </List>
        </Box>

        <Divider marginY={20} />
        <FooterSection />
      </Container>
    </>
  );
}

export default AmaGuidelinesPage;
