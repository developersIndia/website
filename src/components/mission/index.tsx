import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import {
  BsCurrencyDollar,
  BsFillLightningChargeFill,
  BsGraphUp,
} from "react-icons/bs";

function MissionSection() {
  return (
    <>
      <Heading
        as="h2"
        color="#101828"
        textAlign="center"
        size="xl"
        marginBottom={4}
      >
        Our Mission
      </Heading>

      <Text
        marginBottom={12}
        paddingX={{ md: 32 }}
        textAlign="center"
        fontSize={{ base: 18, md: 22 }}
        color="#667085"
      >
        At our core, we value a lot of things. Our main motive is to become
        India&apos;s largest community where people collaborate and exchange
        knowledge.
      </Text>

      <Stack spacing={12} paddingX={{ base: 2, md: 36 }}>
        <Box>
          <Flex align="baseline" justify="center">
            <BsFillLightningChargeFill />
            <Heading
              fontWeight={{ base: "bold", md: "hairline" }}
              marginBottom={4}
              marginLeft={2}
              size="md"
              color="#101828"
            >
              Knowledge Transfer
            </Heading>
          </Flex>

          <Text
            paddingX={{ base: 6, md: 28 }}
            marginLeft={{ md: 9 }}
            textAlign="center"
            color="#667085"
          >
            Be it Ruby on Rails or Python, with developers working on different
            stacks coming together its always a win-win for the greater
            community!
          </Text>
        </Box>

        <Box>
          <Flex justify="center" align="baseline">
            <BsCurrencyDollar />
            <Heading
              marginBottom={4}
              marginLeft={2}
              fontWeight={{ base: "bold", md: "hairline" }}
              size="md"
              color="#101828"
            >
              Potential Job Opportunities
            </Heading>
          </Flex>

          <Text
            paddingX={{ base: 6, md: 28 }}
            marginLeft={{ md: 9 }}
            textAlign="center"
            color="#667085"
          >
            Our community members come from a variety of backgrounds! Some work
            in the big name MNCs, a few in the well-known FAANG companies & some
            more in fast-growing startups! Hence, in our community, you&apos;ll
            find ample opportunities to network & find job prospects.
          </Text>
        </Box>

        <Box>
          <Flex justify="center" align="baseline">
            <BsGraphUp />
            <Heading
              fontWeight={{ base: "bold", md: "hairline" }}
              marginBottom={4}
              marginLeft={2}
              size="md"
              color="#101828"
            >
              Growth Prospects
            </Heading>
          </Flex>

          <Text
            paddingX={{ base: 6, md: 28 }}
            marginLeft={{ md: 9 }}
            textAlign="center"
            color="#667085"
          >
            We host coding live streams, talks from experienced industry experts
            & such. So, by being part of the community expect to gain some
            knowledge on a variety of technologies.
          </Text>
        </Box>
      </Stack>
    </>
  );
}

export default MissionSection;
