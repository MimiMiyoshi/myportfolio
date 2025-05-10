import { Box, Container, HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <Box as="nav" bg="white" py={4} borderBottom="1px" borderColor="gray.200">
      <Container maxW="container.xl">
        <HStack spacing={8} justify="center">
          {NAV_ITEMS.map((item) => (
            <NextLink key={item.label} href={item.href} legacyBehavior>
              <Link
                fontSize="lg"
                fontWeight="medium"
                color="gray.700"
                _hover={{ color: "pink.400" }}
              >
                {item.label}
              </Link>
            </NextLink>
          ))}
        </HStack>
      </Container>
    </Box>
  );
}
