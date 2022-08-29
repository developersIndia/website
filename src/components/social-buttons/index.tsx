import { Button, Link, Stack } from "@chakra-ui/react";
import { FaDiscord, FaGithub, FaReddit } from "react-icons/fa";

function SocialButtons() {
  return (
    <Stack direction="row" spacing={4}>
      <Button
        leftIcon={<FaDiscord />}
        size={{ base: "md", md: "lg" }}
        variant="solid"
        color="#5865F2"
        borderRadius={90}
        boxShadow="md"
      >
        <Link href="https://discord.gg/G4XDD7MpfE" isExternal>
          Discord
        </Link>
      </Button>

      <Button
        leftIcon={<FaReddit />}
        size={{ base: "md", md: "lg" }}
        variant="solid"
        color="#FF4500"
        borderRadius={90}
        boxShadow="md"
      >
        <Link href="https://www.reddit.com/r/developersIndia" isExternal>
          Reddit
        </Link>
      </Button>

      <Button
        leftIcon={<FaGithub />}
        size={{ base: "md", md: "lg" }}
        variant="solid"
        color="#181717"
        borderRadius={90}
        boxShadow="md"
      >
        <Link href="https://github.com/developersIndia" isExternal>
          GitHub
        </Link>
      </Button>
    </Stack>
  );
}

export default SocialButtons;
