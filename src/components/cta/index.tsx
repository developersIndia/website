import SocialButtons from "../social-buttons";
import { Center, Heading, Text } from "@chakra-ui/react";

function CtaSection() {
  return (
    <>
      <Heading
        fontFamily="inter"
        fontWeight="bold"
        size="lg"
        textAlign="center"
        marginY={6}
      >
        &gt;Ready to be Part of the Community?
      </Heading>
      <Text
        fontFamily="inter"
        paddingX={{ base: 12 }}
        paddingBottom={10}
        textAlign="center"
        color="#667085"
      >
        Join us in our attempt to make the community a better place.
      </Text>
      <Center>
        <SocialButtons />
      </Center>
    </>
  );
}

export default CtaSection;
