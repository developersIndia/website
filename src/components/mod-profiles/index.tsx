import { moderators } from "../../utils/constant";
import ProfileCards from "./cards";
import { Center, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

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
      {/* should be replaced with the "Image" component from the "Next.js". */}
      <Center>
        <Grid templateColumns={{ md: "repeat(3, 1fr)" }} gap={16}>
          {moderators.map((moderator) => (
            <GridItem key={moderator.name}>
              <ProfileCards
                name={moderator.name}
                imgSrc={moderator.img}
                role={moderator.role}
                tagline={moderator.tagline}
              />
            </GridItem>
          ))}
        </Grid>
      </Center>
    </>
  );
}

export default ModProfiles;
