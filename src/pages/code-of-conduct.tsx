import Head from "next/head";
import Link from "next/link";

import FooterSection from "../components/footer";
import {
  Box,
  Button,
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
import { FaHome } from "react-icons/fa";

function CodeOfConductPage() {
  return (
    <>
      <Head>
        <title>Code of Conduct | The developersIndia Community</title>
        <meta
          name="description"
          content="Community guidelines and code of conduct for the developersIndia community. Learn about our rules, prohibitions, and how we maintain a welcoming environment for all developers."
        />
        <meta
          property="og:title"
          content="Code of Conduct | The developersIndia Community"
        />
        <meta
          property="og:description"
          content="Community guidelines and code of conduct for the developersIndia community. Learn about our rules, prohibitions, and how we maintain a welcoming environment for all developers."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Code of Conduct | The developersIndia Community"
        />
        <meta
          name="twitter:description"
          content="Community guidelines and code of conduct for the developersIndia community. Learn about our rules, prohibitions, and how we maintain a welcoming environment for all developers."
        />
      </Head>
      <Container
        maxWidth={{ base: "full", md: "container.lg" }}
        marginTop={{ base: 12, md: 28 }}
        marginBottom={{ base: 8, md: 12 }}
        paddingX={{ base: 4, md: 8 }}
      >
        {/* Header */}
        <VStack spacing={6} marginBottom={12} align="center">
          <Heading
            size={{ base: "xl", md: "2xl" }}
            textAlign="center"
            fontFamily="inter"
            color="#101828"
          >
            Code of Conduct
          </Heading>

          <Text
            fontSize="lg"
            textAlign="center"
            fontFamily="inter"
            color="#667085"
            lineHeight="tall"
            maxW="4xl"
          >
            In order to keep the developersIndia community warm, welcoming, and
            safe, we ask that all participants read and adhere to the following
            code of conduct.
          </Text>
        </VStack>

        {/* Rules Section */}
        <Box marginBottom={12}>
          <Heading
            size="xl"
            marginBottom={6}
            fontFamily="inter"
            color="#101828"
          >
            Rules
          </Heading>

          <List spacing={3}>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Be kind and courteous to your fellow members.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Criticize ideas, not people.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Discuss publicly and refrain from direct messaging people
                unless it is specifically requested.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Don't be offensive
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • Ask questions; don't ask to ask. There's no need to write, "Is
                there anyone that can help me with X?" ask about X.
              </Text>
            </ListItem>
          </List>
        </Box>

        <Divider marginY={12} />

        {/* Prohibitions Section */}
        <Box marginBottom={12}>
          <Heading
            size="xl"
            marginBottom={6}
            fontFamily="inter"
            color="#101828"
          >
            Prohibitions
          </Heading>

          <List spacing={3}>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • No violence or threats of violence of any kind.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • No sexist, racist, homophobic, transphobic, or other
                prejudiced or discriminatory language or actions; this includes
                jokes.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • No sexual harassment, including unwelcome sexual advances or
                offensive remarks about a person's sex.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • No cursing or swearing at other people (but feel free to use
                curses and swears about the #$%@ code, IDE, language, hardware,
                or physics).
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • No NSFW material. It includes nudity, gore, or any other
                potentially disturbing imagery.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • No revealing another's private information against their
                wishes (doxing).
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • No stalking or intimidation, online or otherwise.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • No spamming, trolling, flaming, or other disruptions of the
                peace.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                • No advocating or threatening of any of the above behaviours.
              </Text>
            </ListItem>
          </List>
        </Box>

        <Divider marginY={12} />

        {/* Where this Code of Conduct upholds */}
        <Box marginBottom={12}>
          <Heading
            size="xl"
            marginBottom={6}
            fontFamily="inter"
            color="#101828"
          >
            Where this Code of Conduct upholds
          </Heading>

          <Text fontFamily="inter" color="#667085" lineHeight="tall">
            This code of conduct pertains to our online community platforms
            (GitHub: @developersIndia, Reddit: r/developersIndia and Discord
            Server).
          </Text>
        </Box>

        <Divider marginY={12} />

        {/* Consequences Section */}
        <Box marginBottom={12}>
          <Heading
            size="xl"
            marginBottom={6}
            fontFamily="inter"
            color="#101828"
          >
            Consequences for violations
          </Heading>

          <VStack spacing={4} align="stretch">
            <Text fontFamily="inter" color="#667085" lineHeight="tall">
              If a participant engages in behaviour violating this code of
              conduct, the core members of this community may take any action
              they deem appropriate. Actions may range from a simple warning to
              the most drastic: expulsion from the community, exclusion from any
              interaction, and loss of all rights in the community.
            </Text>

            <Text fontFamily="inter" color="#667085" lineHeight="tall">
              You can reach out to the developersIndia community team by
              e-mailing{" "}
              <Text as="span" color="blue.500">
                contact.developersindia@gmail.com
              </Text>
            </Text>
          </VStack>
        </Box>

        <Divider marginY={12} />

        {/* Additions and feedback */}
        <Box marginBottom={12}>
          <Heading
            size="xl"
            marginBottom={6}
            fontFamily="inter"
            color="#101828"
          >
            Additions, amendments, and feedback
          </Heading>

          <Text fontFamily="inter" color="#667085" lineHeight="tall">
            It is foreseeable that this code of conduct will need additions and
            will be improved upon. Online culture changes and new views and
            sensitivities emerge, which need to be considered. To add or modify
            our Code of Conduct, please fork and send a pull request or open an
            issue with your proposed changes. Our community will happily review
            it for inclusion.
          </Text>
        </Box>

        <Divider marginY={12} />

        {/* Attribution Section */}
        <Box marginBottom={12}>
          <Heading
            size="xl"
            marginBottom={6}
            fontFamily="inter"
            color="#101828"
          >
            Attribution
          </Heading>

          <Text
            fontFamily="inter"
            color="#667085"
            lineHeight="tall"
            marginBottom={4}
          >
            Portions of this Code of Conduct were inspired by the following:
          </Text>

          <List spacing={2}>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                •{" "}
                <ChakraLink
                  href="https://github.com/ossu/code-of-conduct"
                  isExternal
                  color="blue.500"
                  textDecoration="underline"
                >
                  The OSSU Code of Conduct
                </ChakraLink>
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="inter" color="#667085">
                •{" "}
                <ChakraLink
                  href="https://github.com/opensourcedesign/opensourcedesign.github.io/blob/master/code-of-conduct.md"
                  isExternal
                  color="blue.500"
                  textDecoration="underline"
                >
                  opensourcedesign.net's COC
                </ChakraLink>
              </Text>
            </ListItem>
          </List>
        </Box>

        {/* Back to Home Button
      <VStack spacing={6} marginY={12}>
        <Link href="/" passHref>
          <Button
            leftIcon={<FaHome />}
            colorScheme="blue"
            size="lg"
            fontFamily="inter"
            fontWeight="semibold"
          >
            Back to Home
          </Button>
        </Link>
      </VStack> */}

        <Divider marginY={20} />
        <FooterSection />
      </Container>
    </>
  );
}

export default CodeOfConductPage;
