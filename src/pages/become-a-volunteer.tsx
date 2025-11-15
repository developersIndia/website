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
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import "@fontsource/inter";
import { BsCheckCircle } from "react-icons/bs";

function BecomeVolunteerPage() {
  return (
    <>
      <Head>
        <title>Become a Volunteer | The developersIndia Community</title>
        <meta
          name="description"
          content="Join the developersIndia volunteer team and help build India's largest tech community. Learn about volunteer opportunities, benefits, and how to apply to make a difference in the developer ecosystem."
        />
        <meta
          property="og:title"
          content="Become a Volunteer | The developersIndia Community"
        />
        <meta
          property="og:description"
          content="Join the developersIndia volunteer team and help build India's largest tech community. Learn about volunteer opportunities, benefits, and how to apply to make a difference in the developer ecosystem."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Become a Volunteer | The developersIndia Community"
        />
        <meta
          name="twitter:description"
          content="Join the developersIndia volunteer team and help build India's largest tech community. Learn about volunteer opportunities, benefits, and how to apply to make a difference in the developer ecosystem."
        />
      </Head>
      <Container
        maxWidth={{ base: "full", md: "container.lg" }}
        marginTop={{ base: 12, md: 28 }}
        marginBottom={{ base: 8, md: 12 }}
        paddingX={{ base: 4, md: 8 }}
      >
        {/* Header */}
        <Heading
          size={{ base: "xl", md: "2xl" }}
          textAlign="center"
          marginBottom={8}
          fontFamily="inter"
        >
          Become a volunteer 🤝
        </Heading>

        {/* Why become a volunteer section */}
        <Box marginBottom={12}>
          <Heading
            size="xl"
            marginBottom={6}
            fontFamily="inter"
            color="#101828"
          >
            Why become a volunteer?
          </Heading>

          <Text
            fontSize="lg"
            marginBottom={6}
            fontFamily="inter"
            color="#667085"
            lineHeight="tall"
          >
            developersIndia is already India's largest tech forum and has a
            massive reach to the tech audience, almost 10,000 people daily. The
            possibilities to do good and build with the community are endless.
            For instance, take a look at these stats.
          </Text>

          {/* Stats Section */}
          <Box marginY={8} padding={6} bg="gray.50" borderRadius="lg">
            <Text
              fontSize="md"
              fontWeight="semibold"
              textAlign="center"
              marginBottom={4}
              color="#101828"
              fontFamily="inter"
            >
              Stats as of Jan 01, 2025
            </Text>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              <Stat textAlign="center">
                <StatNumber color="#101828" fontFamily="inter">
                  10K+
                </StatNumber>
                <StatLabel color="#667085" fontFamily="inter">
                  Daily Active Users
                </StatLabel>
              </Stat>
              <Stat textAlign="center">
                <StatNumber color="#101828" fontFamily="inter">
                  100K+
                </StatNumber>
                <StatLabel color="#667085" fontFamily="inter">
                  Community Members
                </StatLabel>
              </Stat>
              <Stat textAlign="center">
                <StatNumber color="#101828" fontFamily="inter">
                  #1
                </StatNumber>
                <StatLabel color="#667085" fontFamily="inter">
                  Tech Community in India
                </StatLabel>
              </Stat>
            </SimpleGrid>
          </Box>

          <Text
            fontSize="lg"
            marginBottom={6}
            fontFamily="inter"
            color="#667085"
            lineHeight="tall"
          >
            Building and managing a community is no easy task, it's already a
            full-time job. For the people who join us as volunteers, we
            recommend that they should have a self-motivated factor to do so
            (you help yourself, then you help others).
          </Text>

          <Text
            fontSize="lg"
            fontWeight="semibold"
            marginBottom={4}
            fontFamily="inter"
            color="#101828"
          >
            Here are some things that you may get from volunteering with us:
          </Text>

          <List spacing={3} marginBottom={8}>
            <ListItem display="flex" alignItems="flex-start">
              <Box color="green.500" marginRight={3} marginTop={1}>
                <BsCheckCircle />
              </Box>
              <Text fontFamily="inter" color="#667085">
                Learn how to manage & build a community behind the scenes.
              </Text>
            </ListItem>
            <ListItem display="flex" alignItems="flex-start">
              <Box color="green.500" marginRight={3} marginTop={1}>
                <BsCheckCircle />
              </Box>
              <Text fontFamily="inter" color="#667085">
                Connect & Network with like-minded individuals. Don't be a lone
                wolf in tech.
              </Text>
            </ListItem>
            <ListItem display="flex" alignItems="flex-start">
              <Box color="green.500" marginRight={3} marginTop={1}>
                <BsCheckCircle />
              </Box>
              <Text fontFamily="inter" color="#667085">
                You own what you do & suggest. Say, if you start organizing
                events for the community, you can be creative with how you
                conduct them.
              </Text>
            </ListItem>
          </List>
        </Box>

        <Divider marginY={12} />

        {/* What does a volunteer do section */}
        <Box marginBottom={12}>
          <Heading
            size="xl"
            marginBottom={6}
            fontFamily="inter"
            color="#101828"
          >
            What does a volunteer do?
          </Heading>

          <List spacing={3} marginBottom={6}>
            <ListItem display="flex" alignItems="flex-start">
              <Text fontFamily="inter" color="#667085">
                • We have outlined some{" "}
                <ChakraLink
                  href="/community-volunteer-tasks/"
                  isExternal
                  color="blue.500"
                  textDecoration="underline"
                >
                  basic tasks & responsibilities
                </ChakraLink>{" "}
                that you might have to do once you join the community team.
                Please go through them before applying.
              </Text>
            </ListItem>
            <ListItem display="flex" alignItems="flex-start">
              <Text fontFamily="inter" color="#667085">
                • Working as a volunteer we expect you to follow decorum,
                <ChakraLink
                  href="/volunteer-guidelines"
                  isExternal
                  color="blue.500"
                  textDecoration="underline"
                >
                  {" "}
                  please read the following guidelines.
                </ChakraLink>
              </Text>
            </ListItem>
            <ListItem display="flex" alignItems="flex-start">
              <Text fontFamily="inter" color="#667085">
                • We maintain a{" "}
                <ChakraLink
                  href="https://github.com/orgs/developersIndia/projects/5/views/1"
                  isExternal
                  color="blue.500"
                  textDecoration="underline"
                >
                  board of initiatives
                </ChakraLink>{" "}
                that anyone from the volunteer team would like to take up.
              </Text>
            </ListItem>
          </List>
        </Box>

        <Divider marginY={12} />

        {/* Selection Process section */}
        <Box marginBottom={12}>
          <Heading
            size="xl"
            marginBottom={6}
            fontFamily="inter"
            color="#101828"
          >
            Selection Process
          </Heading>

          <List spacing={3} marginBottom={6}>
            <ListItem display="flex" alignItems="flex-start">
              <Text fontFamily="inter" color="#667085">
                • We will contact you via email if we think you are a fit to
                join the team. (Please check your spam inbox).
              </Text>
            </ListItem>
            <ListItem display="flex" alignItems="flex-start">
              <Text fontFamily="inter" color="#667085">
                • A mandatory call (e-meet) will be scheduled with community
                admins so that we get to know each other a bit better. This is
                just a casual chit-chat that helps us understand you better and
                vice-versa.
              </Text>
            </ListItem>
            <ListItem display="flex" alignItems="flex-start">
              <Text fontFamily="inter" color="#667085">
                • During the call, we address any open questions and
                expectations from you as a volunteer.
              </Text>
            </ListItem>
          </List>
        </Box>

        <Divider marginY={12} />

        {/* How to apply section */}
        <Box marginBottom={12}>
          <Heading
            size="xl"
            marginBottom={6}
            fontFamily="inter"
            color="#101828"
          >
            How to apply?
          </Heading>

          {/* Google Form Embed */}
          <Box
            as="iframe"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeOs58fg2VSeEqEmgiKtm6526-1RovZ3IlRIqHnIo_DSsZJLQ/viewform?embedded=true"
            width="100%"
            height={{ base: "500px", md: "600px" }}
            frameBorder="0"
            marginTop={4}
            borderRadius="md"
            border="1px solid"
            borderColor="gray.200"
            overflow="hidden"
          />
        </Box>

        <Divider marginY={20} />
        <FooterSection />
      </Container>
    </>
  );
}

export default BecomeVolunteerPage;
