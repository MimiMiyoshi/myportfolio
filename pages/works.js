import React from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  Image,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Gloock } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
}); 

export default function Works() {
  const { t } = useTranslation("common");
  const headingFontSize = useBreakpointValue({
    base: "40px",
    sm: "50px",
    md: "60px",
    lg: "70px",
  });

  return (
    <Box
      bgGradient="linear(to-b, blue.200, pink.200)"
      minH="calc(100vh - 73px)"
      py={20}
    >
      <Container maxW="container.xl">
        <VStack spacing={16}>
          <VStack spacing={4}>
            <Heading
              color="pink.400"
              className={gloock.className}
              fontSize={headingFontSize}
              textAlign="center"
            >
              {t("works.title")}
            </Heading>
            <Text
              color="white"
              fontSize="lg"
              textAlign="center"
              maxW="container.md"
            >
              {t("works.subtitle")}
            </Text>
          </VStack>

          {/* 上段の2列グリッド */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} w="100%">
            {/* サービス1 */}
            <VStack spacing={4} color="white">
              <Box
                position="relative"
                w="90%"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-8px) scale(1.02)",
                }}
              >
                <Link
                  href="https://mimimiyoshi.github.io/kadai00_cheese/"
                  target="_blank"
                  display="block"
                >
                  <Image
                    src="/CheeseAcademy.png"
                    alt="Cheese Academy Website"
                    borderRadius="lg"
                    w="100%"
                    h="auto"
                    objectFit="cover"
                    transition="all 0.3s ease"
                    boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
                    _hover={{
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                      filter: "brightness(1.1) contrast(1.1)",
                    }}
                  />
                </Link>
              </Box>
              <VStack spacing={2} align="start" w="90%" pl={0}>
                <Heading fontFamily="Helvetica" size="md">Website</Heading>
                <Text>Skills: html, css</Text>
              </VStack>
            </VStack>

            {/* サービス2 */}
            <VStack spacing={4} color="white">
              <Box
                position="relative"
                w="90%"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-8px) scale(1.02)",
                }}
              >
                <Link
                  href="https://mimimiyoshi.github.io/slot_machine_rich/"
                  target="_blank"
                  display="block"
                >
                  <Image
                    src="/SlotMachine.png"
                    alt="Slot Machine Application"
                    borderRadius="lg"
                    w="100%"
                    h="auto"
                    objectFit="cover"
                    fontFamily="Helvetica"
                    transition="all 0.3s ease"
                    boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
                    _hover={{
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                      filter: "brightness(1.1) contrast(1.1)",
                    }}
                  />
                </Link>
              </Box>
              <VStack spacing={2} align="start" w="90%" pl={0}>
                <Heading size="md" fontFamily="Helvetica">Application</Heading>
                <Text>Skills: html, css, JavaScript</Text>
              </VStack>
            </VStack>
          </SimpleGrid>

          {/* 下段の1列 */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} w="100%">
            {/* サービス3 */}
            <VStack spacing={4} color="white">
              <Box
                position="relative"
                w="90%"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-8px) scale(1.02)",
                }}
              >
                <Link href="#" target="_blank" display="block">
                  <Image
                    src="/PsychologicalTest.png"
                    alt="Psychological Test Website"
                    borderRadius="lg"
                    w="100%"
                    h="auto"
                    objectFit="cover"
                    transition="all 0.3s ease"
                    boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
                    _hover={{
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                      filter: "brightness(1.1) contrast(1.1)",
                    }}
                  />
                </Link>
              </Box>
              <VStack spacing={2} align="start" w="90%" pl={0}>
                <Heading size="md" fontFamily="Helvetica">Website</Heading>
                <Text>Skills: html, css, php</Text>
              </VStack>
            </VStack>

             {/* サービス４ */}
             <VStack spacing={4} color="white">
              <Box
                position="relative"
                w="90%"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-8px) scale(1.02)",
                }}
              >
                <Link
                  href="https://atuy-amour.sakura.ne.jp/php02devoir/login.php"
                  target="_blank"
                  display="block"
                >
                  <Image
                    src="/FrenchStudyApp.png"
                    alt="French Study Application"
                    borderRadius="lg"
                    w="100%"
                    h="auto"
                    objectFit="cover"
                    transition="all 0.3s ease"
                    boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
                    _hover={{
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                      filter: "brightness(1.1) contrast(1.1)",
                    }}
                  />
                </Link>
              </Box>
              <VStack spacing={2} align="start" w="90%" pl={0}>
                <Heading size="md" fontFamily="Helvetica">Application</Heading>
                <Text>Skills: html, css, laravel,JavaScript</Text>
              </VStack>
            </VStack>
            
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

// ✅ サーバーサイドでのみ実行される翻訳ロード関数
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

