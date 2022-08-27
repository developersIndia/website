import SocialButtons from "../social-buttons";
import { Center, Heading } from "@chakra-ui/react";

function CtaSection() {
  return (
    <>
      <Heading size="lg" textAlign="center" marginY={6}>
        &gt;Ready to be Part of the Community?
      </Heading>
      <Center>
        <SocialButtons />
      </Center>
    </>
  );
}

export default CtaSection;
