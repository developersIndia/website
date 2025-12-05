import SocialButtons from "../social-buttons";
import { Box, Heading, Text } from "@chakra-ui/react";
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
        software developers & tech professionals!
      </Text>

      <Box display="flex" justifyContent="center" alignItems="center">
        <SocialButtons />
      </Box>
    </>
  );
}

export default Header;
