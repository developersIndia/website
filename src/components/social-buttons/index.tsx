import { Button, Link, Stack } from "@chakra-ui/react";
import { FaBook, FaDiscord, FaReddit } from "react-icons/fa";

function SocialButtons() {
  return (
    <Stack direction="row" spacing={4}>
      <Button
        leftIcon={<FaReddit />}
        size={{ base: "md", md: "lg" }}
        variant="solid"
        bgColor="gray.300"
        color="#FF4500"
        borderRadius={90}
        boxShadow="lg"
      >
        <Link href="https://www.reddit.com/r/developersIndia" isExternal>
          Reddit Forum
        </Link>
      </Button>

      <Button
        leftIcon={<FaBook />}
        size={{ base: "md", md: "lg" }}
        variant="solid"
        bgColor="gray.300"
        color="#737480"
        borderRadius={90}
        boxShadow="lg"
      >
        <Link href="https://wiki.developersindia.in/" isExternal>
          Community Guides & FAQs
        </Link>
      </Button>

      <Button
        leftIcon={<FaDiscord />}
        size={{ base: "md", md: "lg" }}
        variant="solid"
        bgColor="gray.300"
        color="#5865F2"
        borderRadius={90}
        boxShadow="lg"
      >
        <Link href="https://discord.gg/G4XDD7MpfE" isExternal>
          Discord
        </Link>
      </Button>
    </Stack>
  );
}

export default SocialButtons;
