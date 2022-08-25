import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  BsCurrencyDollar,
  BsFillLightningChargeFill,
  BsGraphUp,
} from "react-icons/bs";
import { FaDiscord, FaGithub, FaReddit } from "react-icons/fa";

function IndexPage() {
  return (
    <>
      {/* TODO: Add a linear gradient colour to the background. See the Figam template for reference. */}
      <Container
        marginY={{ base: 10, md: 32 }}
        paddingX={{ base: 8, md: 60 }}
        maxWidth="full"
      >
        <VStack spacing={6}>
          <Heading
            size={{ base: "xl", md: "2xl" }}
            fontWeight="extrabold"
            textAlign="center"
          >
            India&apos;s Largest Network of Software & Tech Professionals
          </Heading>

          <Text textAlign="center" paddingX={{ base: 10, md: 44 }}>
            We&apos;re India&apos;s biggest &amp; ever growing community of
            developers. Join us &amp; hang aroud with on Discord and/or on
            Reddit!
          </Text>

          <Stack direction="row" spacing={4}>
            {/* TODO: Fix the colorschemes of the button as per their official hex code. */}
            <Button leftIcon={<FaDiscord />} variant="solid" colorScheme="blue">
              {/* TODO: Fix the link to open in a new tab. */}
              <Link href="https://discord.gg/G4XDD7MpfE" isExternal>
                Discord
              </Link>
            </Button>

            <Button
              leftIcon={<FaReddit />}
              variant="solid"
              colorScheme="orange"
            >
              <Link href="https://www.reddit.com/r/developersIndia" isExternal>
                Reddit
              </Link>
            </Button>

            <Button
              leftIcon={<FaGithub />}
              variant="solid"
              colorScheme="blackAlpha"
            >
              <Link href="https://github.com/developersIndia" isExternal>
                GitHub
              </Link>
            </Button>
          </Stack>
        </VStack>
      </Container>

      <Container
        maxWidth="full"
        marginY={{ base: 10, md: 32 }}
        paddingX={{ base: 10, md: 60 }}
      >
        <Heading size="lg" marginBottom={4}>
          Our Mission
        </Heading>

        <Text marginBottom={12}>
          At our core, we value a lot of things. Our main motive is to become
          India&apos;s largest community where people collaborate and exchange
          knowledge.
        </Text>

        <Stack spacing={12}>
          <Box>
            <Flex align="baseline">
              <BsFillLightningChargeFill />
              <Heading marginBottom={4} marginLeft={5} size="md">
                Knowledge Transfer
              </Heading>
            </Flex>
            <Text marginLeft={{ md: 9 }}>
              Be it Ruby on Rails or Python, with developers working on
              different stacks coming together its always a win-win for the
              greater community!
            </Text>
          </Box>

          <Box>
            <Flex align="baseline">
              <BsCurrencyDollar />
              <Heading marginBottom={4} marginLeft={5} size="md">
                Potential Job Opportunities
              </Heading>
            </Flex>
            <Text marginLeft={{ md: 9 }}>
              Our community members come from a variety of backgrounds! Some
              work in the big name MNCs, a few in the well-known FAANG companies
              & some more in fast-growing startups! Hence, in our community,
              you&apos;ll find ample opportunities to network & find job
              prospects.
            </Text>
          </Box>

          <Box>
            <Flex align="baseline">
              <BsGraphUp />
              <Heading marginBottom={4} marginLeft={5} size="md">
                Growth Prospects
              </Heading>
            </Flex>
            <Text marginLeft={{ md: 9 }}>
              We host coding live streams, talks from experienced industry
              experts & such. So, by being part of the community expect to gain
              some knowledge on a variety of technologies.
            </Text>
          </Box>
        </Stack>
      </Container>

      {/* TODO: Add the community stats section over here. */}
      {/* <Container */}
      {/*   maxWidth="full" */}
      {/*   marginY={{ base: 10, md: 32 }} */}
      {/*   paddingX={{ base: 10, md: 60 }} */}
      {/* > */}
      {/*   <Heading size="lg" marginBottom={4}> */}
      {/*     We&apos;re Growing FAST! */}
      {/*   </Heading> */}
      {/*   <Grid> */}
      {/*     <GridItem>58K+</GridItem> */}
      {/*   </Grid> */}
      {/* </Container> */}

      <Container
        maxWidth="full"
        marginY={{ base: 10, md: 32 }}
        paddingX={{ base: 10, md: 60 }}
      >
        <Heading size="lg" marginBottom={4} textAlign="center">
          Faces of the Community
        </Heading>
        <Text textAlign="center">
          These are the amazing people who&apos;re maintaining the community!
        </Text>
        <Center marginY={8}>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 8, md: 20 }}
          >
            {/* TODO: Add more information about the individual admins & moderators. */}
            <Avatar
              name="Bhupesh Varshney"
              size="xl"
              src="https://avatars.githubusercontent.com/u/34342551?v=4"
            />
            <Avatar
              name="Somraj Saha"
              size="xl"
              src="https://avatars.githubusercontent.com/u/31373860?v=4"
            />
            <Avatar
              name="Yash Sharan"
              size="xl"
              src="https://avatars.githubusercontent.com/u/52700320?v=4"
            />
            <Avatar
              name="Bhupesh Pradhan"
              size="xl"
              src="https://avatars.githubusercontent.com/u/76522149?v=4"
            />
          </Stack>
        </Center>
      </Container>

      <Container
        maxWidth="full"
        marginY={{ base: 10, md: 32 }}
        paddingX={{ base: 10, md: 60 }}
      >
        <Heading size="lg" textAlign="center">
          &gt;Ready to be Part of the Community?
        </Heading>
        <Stack marginTop={6} spacing={6} justify="center" direction="row">
          <Button leftIcon={<FaReddit />} variant="solid" colorScheme="orange">
            <Link href="https://www.reddit.com/r/developersIndia">Reddit</Link>
          </Button>
          <Button leftIcon={<FaDiscord />} variant="solid" colorScheme="blue">
            <Link href="https://discord.gg/G4XDD7MpfE" isExternal>
              Discord
            </Link>
          </Button>
          <Button
            leftIcon={<FaGithub />}
            variant="solid"
            colorScheme="blackAlpha"
          >
            <Link href="https://github.com/developersIndia" isExternal>
              GitHub
            </Link>
          </Button>
        </Stack>
      </Container>

      {/* TODO: Customise the divider for the footer section. */}
      <Divider size="2xl" colorScheme="red" />
      <Container
        maxWidth="full"
        marginY={{ base: 10, md: 16 }}
        paddingX={{ base: 10, md: 60 }}
        // bgColor="yellow"
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          textAlign="center"
        >
          <small>
            &copy; 2022-{new Date().getFullYear()} DevelopersIndia Community
          </small>
          <small>Made in India with ❤️</small>
        </Stack>
      </Container>
    </>
  );
}

export default IndexPage;
