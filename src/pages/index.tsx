import Header from "../components/header";
import MissionSection from "../components/mission";
import {
  Avatar,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaDiscord, FaGithub, FaReddit } from "react-icons/fa";

function IndexPage() {
  return (
    <>
      <Container
        maxWidth={{ base: "full", md: "container.lg" }}
        marginY={{ base: 12, md: 32 }}
      >
        <Stack spacing={12}>
          <Header />

          <MissionSection />
        </Stack>
      </Container>

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
