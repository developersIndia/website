import { Button, Link, Stack } from "@chakra-ui/react";
import { FaDiscord, FaGithub, FaReddit } from "react-icons/fa";

function SocialButtons() {
  return (
    <Stack direction="row" spacing={4}>
      {/* TODO: Fix the colorschemes of the button as per their official colour hex code. */}
      <Button
        leftIcon={<FaDiscord />}
        size={{ base: "md", md: "lg" }}
        variant="solid"
        colorScheme="blue"
      >
        <Link href="https://discord.gg/G4XDD7MpfE" isExternal>
          Discord
        </Link>
      </Button>

      <Button
        leftIcon={<FaReddit />}
        size={{ base: "md", md: "lg" }}
        variant="solid"
        colorScheme="orange"
      >
        <Link href="https://www.reddit.com/r/developersIndia" isExternal>
          Reddit
        </Link>
      </Button>

      <Button
        leftIcon={<FaGithub />}
        size={{ base: "md", md: "lg" }}
        variant="solid"
        colorScheme="blackAlpha"
      >
        <Link href="https://github.com/developersIndia" isExternal>
          GitHub
        </Link>
      </Button>
    </Stack>
  );
}

export default SocialButtons;
