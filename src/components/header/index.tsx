import SocialButtons from "../social-buttons";
import { Center, Heading, Text } from "@chakra-ui/react";
import "@fontsource/inter";

function Header() {
  return (
    <>
      <Heading
        size={{ base: "xl", md: "2xl" }}
        textAlign="center"
        marginBottom={8}
        fontFamily="inter"
      >
        India&apos;s Largest Network of Software & Technical Professionals
      </Heading>

      <Text
        textAlign="center"
        marginBottom={8}
        paddingX={{ md: 32 }}
        fontFamily="inter"
      >
        We&apos;re India&apos;s biggest & ever-fastest growing community of
        software developers & tech professionals! Join us & hang around with us
        on Discord, Reddit and/or on GitHub.
      </Text>

      <Center>
        <SocialButtons />
      </Center>
    </>
  );
}

export default Header;
