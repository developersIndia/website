import { Avatar, Stack, Text } from "@chakra-ui/react";

type ProfileCardProps = {
  name: string;
  imgSrc: string;
  role: string;
  tagline: string;
  // socialProfiles?: object;
};

function ProfileCard({ name, imgSrc, role, tagline }: ProfileCardProps) {
  return (
    <>
      <Stack align="center">
        <Avatar name={name} src={imgSrc} size="xl" />

        <Text fontFamily="inter" fontWeight="medium" fontSize="lg">
          {name}
        </Text>

        <Text color="#6941C6">{role}</Text>

        <Text
          textAlign="center"
          color="#667085"
          fontFamily="inter"
          fontSize={{ base: "md", md: "sm" }}
          paddingX={10}
        >
          {tagline}
        </Text>
        {/* TODO: Add the social icons */}
      </Stack>
    </>
  );
}

export default ProfileCard;
