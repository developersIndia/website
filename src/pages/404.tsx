import Image from "next/image";
import Link from "next/link";

import { Box, Button, Container, HStack, Text } from "@chakra-ui/react";

function NotFound() {
  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      my="10"
    >
      <Box>
        <Image src="/404.svg" width={500} height={350} alt="404" />
      </Box>
      <Text fontSize="3xl" fontWeight="semibold" color="gray.500" my="4">
        Page not found!
      </Text>
      <HStack spacing={2}>
        <Text size="md">Go back to</Text>
        <Button size="sm" variant="solid" colorScheme="blue">
          <Link href="/">Home</Link>
        </Button>
      </HStack>
    </Container>
  );
}

export default NotFound;
