import Image from "next/image";
import Link from "next/link";

import { Box, Button, Container, HStack, Text } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";

function ServerErrorPage() {
  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginY="10"
    >
      <Box>
        <Image src="/500.svg" width={500} height={350} alt="404" />
      </Box>
      <Text fontSize="3xl" fontWeight="semibold" color="gray.500" marginBottom="6">
        Server Error!
      </Text>
      <Button leftIcon={<FaHome />} variant="solid" colorScheme="blue">
        <Link href="/">Back to Home</Link>
      </Button>
    </Container>
  );
}

export default ServerErrorPage;
