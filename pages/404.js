import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Custom404() {
  return (
    <Box textAlign="center" py={20}>
      <Heading as="h1" size="2xl" mb={4}>
        404
      </Heading>
      <Text fontSize="xl" mb={8}>
        Page Not Found
      </Text>
      <Link href="/" passHref>
        <Button colorScheme="teal">Return to Home</Button>
      </Link>
    </Box>
  );
}
