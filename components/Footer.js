import { Box, Container, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <Box as="footer" bg="white" py={8}>
      <Container maxW="container.xl">
        <VStack spacing={4}>
          <HStack spacing={4} justify="center">
            <Link href="#" isExternal>
              <Box as={FaFacebook} size="30px" color="black" />
            </Link>
            <Link href="#" isExternal>
              <Box as={FaTwitter} size="30px" color="black" />
            </Link>
            <Link href="#" isExternal>
              <Box as={FaInstagram} size="30px" color="black" />
            </Link>
          </HStack>
          <Text fontSize="sm" color="gray.500">
            © 2025 Atuy.biz. All rights reserved.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
