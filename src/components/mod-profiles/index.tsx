import { moderators } from "../../utils/constant";
import { Avatar, Center, Heading, Stack, Text } from "@chakra-ui/react";

function ModProfiles() {
  return (
    <>
      <Text
        textAlign="center"
        color="#138808"
        fontWeight="semibold"
        fontFamily="inter"
        fontSize="md"
        marginY={4}
      >
        Our Team
      </Text>

      <Heading
        fontFamily="inter"
        fontWeight="bold"
        color="#101828"
        textAlign="center"
        marginBottom={9}
        size="2xl"
      >
        Faces Behind DevsIndia
      </Heading>

      <Text
        fontFamily="inter"
        fontSize="lg"
        textAlign="center"
        color="#667085"
        marginBottom={20}
        paddingX={{ base: 10 }}
      >
        These are the people whose efforts led the community to where it is
        right now!
      </Text>

      {/* TODO: The "Avatar" component from Chakra-UI isn't optimised. So it */}
      {/* should be replaced with the "Image" component from the "Next.js". See */}
      {/* the following info section for more reference. */}
      {/* INFO: The "Image" component cannot be styled properly with Chakra-UI right now. */}
      {/* Hence, the next best course of action right now is to either wait for a future */}
      {/* Next.js release. Or use the "Image" component from the "future" package. */}
      {/* For more information, check the following references. */}
      {/* 1. https://nextjs.org/docs/api-reference/next/future/image */}
      {/* 2. https://github.com/vercel/next.js/discussions/22861 */}
      {/* INFO: This will be the refactored version of the code below it */}
      <Center>
        <Stack direction={{ base: "column", md: "row" }}>
          {moderators.map((moderator) => (
            // TODO: Replace the horizontal stack with a "Grid" component instead.
            <Stack key={moderator.name} align="center">
              <Avatar name={moderator.name} src={moderator.img} size="xl" />

              <Text fontFamily="inter" fontWeight="medium" fontSize="lg">
                {moderator.name}
              </Text>

              <Text color={"#6941C6"}>{moderator.designation}</Text>

              <Text
                color="#667085"
                fontFamily="inter"
                fontSize="sm"
                paddingX={6}
                paddingBottom={2}
                textAlign="center"
              >
                {moderator.tagline}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Center>
    </>
  );
}

export default ModProfiles;
