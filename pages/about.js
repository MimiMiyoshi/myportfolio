import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Gloock } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
});

export default function About() {
  const { t } = useTranslation("common");

  const headingFontSize = useBreakpointValue({
    base: "40px",
    sm: "50px",
    md: "60px",
    lg: "70px",
  });

  const textFontSize = useBreakpointValue({
    base: "16px",
    sm: "18px",
    md: "18px",
    lg: "20px",
  });

  const subHeadingFontSize = useBreakpointValue({
    base: "20px",
    sm: "24px",
    md: "28px",
    lg: "32px",
  });

  return (
    <Box bg="pink.50" minH="calc(100vh - 73px)" py={{ base: 10, md: 20 }}>
      <Container maxW="container.xl">
        <VStack spacing={{ base: 10, md: 20 }} align="stretch">
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 10, md: 20 }}
            alignItems="flex-start"
          >
            <Box>
              <Heading
                color="pink.400"
                mb={{ base: 5, md: 10 }}
                fontSize={headingFontSize}
                lineHeight="1"
              >
                Who
                <br />
                Am I?
              </Heading>
              <Text
                fontSize="16px"
                lineHeight="1.8"
                color="gray.700"
                px={{ base: 4, md: 0 }}
                whiteSpace="pre-wrap"
                fontFamily="sans-serif"
              >
                {t("about.description") || "Loading..."}
              </Text>
            </Box>
            <Box px={{ base: 4, md: 0 }}>
              <Image
                src="/profile-image.jpeg"
                alt="Mimi Miyoshi"
                borderRadius="lg"
                w="60%"
                h="auto"
                objectFit="cover"
                boxShadow="lg"
              />
            </Box>
          </SimpleGrid>

          <VStack spacing={{ base: 4, md: 8 }} align="stretch">
            <Heading
              color="pink.400"
              fontSize={headingFontSize}
              lineHeight="1"
              px={{ base: 4, md: 0 }}
            >
              What I Do
            </Heading>

            <Box px={{ base: 0, md: 0 }}>
              <Heading
                color="pink.400"
                fontSize={textFontSize}
                className={gloock.className}
                mb={{ base: 2, md: 4 }}
                fontFamily="Helvetica"
                fontWeight="bold"
              >
                {t("about.whatIdo")}
              </Heading>
              <VStack spacing={2} align="stretch">
                {t("about.whatIdoList", { returnObjects: true }).map(
                  (skill, index) => (
                    <Text key={index} fontSize="16px" fontFamily="sans-serif">
                      • {skill}
                    </Text>
                  )
                )}
              </VStack>
            </Box>

            <Box px={{ base: 4, md: 0 }}>
              <Heading
                color="pink.400"
                fontSize={textFontSize}
                mb={{ base: 2, md: 4 }}
                fontFamily="Helvetica"
                fontWeight="bold"
              >
                Framework and Back-End Skills
              </Heading>
              <VStack spacing={2} align="stretch">
                {t("about.whatIdoList2", { returnObjects: true }).map(
                  (skill, index) => (
                    <Text key={index} fontSize="16px" fontFamily="sans-serif">
                      • {skill}
                    </Text>
                  )
                )}
              </VStack>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
