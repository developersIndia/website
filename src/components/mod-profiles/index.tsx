import {
  Avatar,
  Center,
  Heading,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

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

      {/* TODO: Refactor each of the moderator profile in to an individual component. */}
      <Center>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 16, md: 32 }}
        >
          {/* TODO: The "Avatar" component from Chakra-UI isn't optimised. So it */}
          {/* should be replaced with the "Image" component from the "Next.js". See */}
          {/* the following info section for more reference. */}
          {/* INFO: The "Image" component cannot be styled properly with Chakra-UI right now. */}
          {/* Hence, the next best course of action right now is to either wait for a future */}
          {/* Next.js release. Or use the "Image" component from the "future" package. */}
          {/* For more information, check the following references. */}
          {/* 1. https://nextjs.org/docs/api-reference/next/future/image */}
          {/* 2. https://github.com/vercel/next.js/discussions/22861 */}
          <Stack align="center">
            <Avatar
              name="Bhupesh Varshney"
              size="xl"
              src="https://avatars.githubusercontent.com/u/34342551?v=4"
            />

            <Text fontFamily="inter" fontWeight="medium" fontSize="lg">
              Bhupesh Varshney
            </Text>

            <Text color="#6941C6">Community Admin</Text>

            <Text
              color="#667085"
              fontFamily="inter"
              fontSize="sm"
              paddingX={6}
              paddingBottom={2}
              textAlign="center"
            >
              Experienced Software Developer building FOSS projects for the
              community.
            </Text>

            <Stack direction="row" spacing={4}>
              <Link href="https://twitter.com/bhupeshimself" isExternal>
                <IconButton
                  aria-label="Twitter"
                  variant="ghost"
                  bgColor="blue.50"
                  icon={<FaTwitter size={18} />}
                  isRound
                  _hover={{ bgColor: "blue.100" }}
                />
              </Link>

              <Link href="https://www.linkedin.com/in/bhupesh-v" isExternal>
                <IconButton
                  aria-label="Twitter"
                  variant="ghost"
                  bgColor="blue.50"
                  icon={<FaLinkedin size={18} />}
                  isRound
                  _hover={{ bgColor: "blue.100" }}
                />
              </Link>

              <Link href="https://github.com/Bhupesh-V" isExternal>
                <IconButton
                  aria-label="Twitter"
                  variant="ghost"
                  bgColor="blue.50"
                  icon={<FaGithub size={18} />}
                  isRound
                  _hover={{ bgColor: "blue.100" }}
                />
              </Link>
            </Stack>
          </Stack>
          <Stack align="center">
            <Avatar
              name="Sidhart Gehlot"
              size="xl"
              src="https://avatars.githubusercontent.com/u/54112684?v=4"
            />

            <Text fontFamily="inter" fontWeight="medium" fontSize="lg">
              Sidhart Gehlot
            </Text>

            <Text color="#6941C6">Community Admin</Text>

            <Text
              color="#667085"
              fontFamily="inter"
              fontSize="sm"
              paddingX={6}
              paddingBottom={2}
              textAlign="center"
            >
              Self-employed entrepreneur with experience maintaining multiple
              communities across various platforms.
            </Text>

            <Stack direction="row" spacing={4}>
              <Link href="https://twitter.com/sidharthgehlot" isExternal>
                <IconButton
                  aria-label="Twitter"
                  variant="ghost"
                  bgColor="blue.50"
                  icon={<FaTwitter size={18} />}
                  isRound
                  _hover={{ bgColor: "blue.100" }}
                />
              </Link>

              <Link href="https://github.com/sidharthgehlot" isExternal>
                <IconButton
                  aria-label="GitHub"
                  variant="ghost"
                  bgColor="blue.50"
                  icon={<FaGithub size={18} />}
                  isRound
                  _hover={{ bgColor: "blue.100" }}
                />
              </Link>
            </Stack>
          </Stack>
          <Stack align="center">
            <Avatar
              name="Somraj Saha"
              size="xl"
              src="https://avatars.githubusercontent.com/u/31373860?v=4"
            />

            <Text fontFamily="inter" fontWeight="medium" fontSize="lg">
              Somraj Saha
            </Text>

            <Text color="#6941C6">GitHub Moderator</Text>

            <Text
              color="#667085"
              fontFamily="inter"
              fontSize="sm"
              paddingX={6}
              paddingBottom={2}
              textAlign="center"
              // bgColor="yellow"
            >
              Software Engineer with knack for contributing to FOSS projects.
            </Text>

            <Stack direction="row" spacing={4}>
              <Link href="https://twitter.com/Jarmosan" isExternal>
                <IconButton
                  aria-label="Twitter"
                  variant="ghost"
                  bgColor="blue.50"
                  icon={<FaTwitter size={18} />}
                  isRound
                  _hover={{ bgColor: "blue.100" }}
                />
              </Link>

              <Link href="https://www.linkedin.com/in/jarmos" isExternal>
                <IconButton
                  aria-label="LinkedIn"
                  variant="ghost"
                  bgColor="blue.50"
                  icon={<FaLinkedin size={18} />}
                  isRound
                  _hover={{ bgColor: "blue.100" }}
                />
              </Link>

              <Link href="https://github.com/Jarmos-san" isExternal>
                <IconButton
                  aria-label="GitHub"
                  variant="ghost"
                  bgColor="blue.50"
                  icon={<FaGithub size={18} />}
                  isRound
                  _hover={{ bgColor: "blue.100" }}
                />
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Center>
      {/* TODO: Add the rest of the moderator team member information. */}
    </>
  );
}

export default ModProfiles;
