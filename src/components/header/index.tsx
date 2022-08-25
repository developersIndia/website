import SocialButtons from "../social-buttons";
import { Center, Heading, Stack, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Stack direction="column" spacing={6}>
      <Heading
        size={{ base: "xl", md: "2xl" }}
        fontWeight="extrabold"
        textAlign="center"
      >
        India&apos;s Largest Network of Software & Technical Professionals
      </Heading>

      {/* <Text paddingX={60}> */}
      {/* </Text> */}

      <Text textAlign="center" paddingX={{ md: 32 }}>
        We&apos;re India&apos;s biggest & ever-fastest growing community of
        software developers & tech professionals! Join us & hang around with us
        on Discord, Reddit and/or on GitHub.
      </Text>

      <Center paddingBottom={12}>
        <SocialButtons />
      </Center>
    </Stack>
  );
}

export default Header;
