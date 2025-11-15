import { Button, Link, Stack } from "@chakra-ui/react";
import { FaBook, FaDiscord, FaReddit } from "react-icons/fa";

function SocialButtons() {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing={{ base: 3, md: 4 }}
      align="center"
      justify="center"
      width="100%"
    >
      <Button
        leftIcon={<FaReddit />}
        size={{ base: "sm", md: "lg" }}
        variant="solid"
        bgColor="gray.300"
        color="#FF4500"
        borderRadius={90}
        boxShadow="lg"
        width={{ base: "100%", md: "auto" }}
        maxWidth={{ base: "280px", md: "none" }}
        minWidth={{ md: "200px" }}
      >
        <Link href="https://www.reddit.com/r/developersIndia" isExternal>
          Reddit Forum
        </Link>
      </Button>

      <Button
        leftIcon={<FaBook />}
        size={{ base: "sm", md: "lg" }}
        variant="solid"
        bgColor="gray.300"
        color="#737480"
        borderRadius={90}
        boxShadow="lg"
        width={{ base: "100%", md: "auto" }}
        maxWidth={{ base: "280px", md: "none" }}
        minWidth={{ md: "220px" }}
      >
        <Link href="https://wiki.developersindia.in/" isExternal>
          Community Guides & FAQs
        </Link>
      </Button>

      <Button
        leftIcon={<FaDiscord />}
        size={{ base: "sm", md: "lg" }}
        variant="solid"
        bgColor="gray.300"
        color="#5865F2"
        borderRadius={90}
        boxShadow="lg"
        width={{ base: "100%", md: "auto" }}
        maxWidth={{ base: "280px", md: "none" }}
        minWidth={{ md: "140px" }}
      >
        <Link
          href="https://discord.com/servers/developersindia-669880381649977354"
          isExternal
        >
          Discord
        </Link>
      </Button>
    </Stack>
  );
}

export default SocialButtons;
