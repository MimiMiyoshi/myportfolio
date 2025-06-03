import React, { useState } from "react";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Input,
  Textarea,
  HStack,
  Link,
  FormControl,
  FormLabel,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";
import { Gloock } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
});

// EmailJSの初期化
emailjs.init("915NoTHVtEb41Vt_1"); // ここにYOUR_PUBLIC_KEYを入力

// スタイルをコンポーネントの先頭に追加
const gradientAnimation = {
  "@keyframes gradient": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
};

export default function Contact() {
  const { t } = useTranslation("common");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 画面サイズに応じてフォントサイズを変更
  const titleFontSize = useBreakpointValue({
    base: "40px", // モバイル
    sm: "50px", // タブレット（小）
    md: "60px", // タブレット（大）
    lg: "80px", // デスクトップ
  });

  const headingFontSize = useBreakpointValue({
    base: "40px",
    sm: "50px",
    md: "60px",
    lg: "70px",
  });

  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send("service_x4bse5x", "template_h7icfba", {
        name: formData.name, // 送信者の名前
        email: formData.email, // 送信者のメールアドレス
        message: formData.comment, // メッセージ内容
      });

      toast({
        title: t("contact.form.success"),
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setFormData({ name: "", email: "", comment: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: t("contact.form.error"),
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box>
      {/* ヘッダーセクション - グラデーション背景 */}
      <Box
        bgGradient="linear(to-r, pink.300, purple.300, pink.200, pink.300)"
        py={20}
        sx={{
          backgroundSize: "200% 200%",
          animation: "gradient 15s ease infinite",
          ...gradientAnimation,
        }}
      >
        <Container maxW="container.xl">
          <VStack spacing={4} align="start">
            <Heading
              as="h1"
              color="white"
              fontWeight="bold"
              fontSize={titleFontSize}
              letterSpacing="0.05em"
              className={gloock.className}
            >
              {t("header.grow")}
            </Heading>
            <Text color="white" fontSize="2xl">
              {t("header.improve")}
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* コンタクトセクション - 白背景 */}
      <Box bg="white" minH="calc(100vh - 73px - 300px)" py={8}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="stretch">
            <VStack spacing={0} align="stretch">
              <Heading
                color="pink.400"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontFamily="Helvetica, sans-serif"
              >
                {t("contact.title")}
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} fontWeight="normal">
                {t("contact.subtitle")}
              </Text>
            </VStack>

            {/* フォーム */}
            <Box as="form" spacing={6} onSubmit={handleSubmit}>
              <VStack spacing={6} align="stretch">
                <FormControl>
                  <FormLabel color="gray.700">
                    {t("contact.form.name")}
                  </FormLabel>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    bg="white"
                    border="2px solid"
                    borderColor="pink.300"
                    height="50px"
                    _placeholder={{ color: "gray.400" }}
                    _focus={{
                      borderColor: "pink.400",
                      boxShadow: "none",
                    }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel color="gray.700">
                    {t("contact.form.email")}
                  </FormLabel>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    bg="white"
                    border="2px solid"
                    borderColor="pink.300"
                    height="50px"
                    _placeholder={{ color: "gray.400" }}
                    _focus={{
                      borderColor: "pink.400",
                      boxShadow: "none",
                    }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel color="gray.700">
                    {t("contact.form.comment")}
                  </FormLabel>
                  <Textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    bg="white"
                    border="2px solid"
                    borderColor="pink.300"
                    height="200px"
                    _placeholder={{ color: "gray.400" }}
                    _focus={{
                      borderColor: "pink.400",
                      boxShadow: "none",
                    }}
                  />
                </FormControl>

                {/* 送信ボタン */}
                <Box display="flex" justifyContent="center">
                  <Button
                    type="submit"
                    colorScheme="pink"
                    size="lg"
                    width="50%"
                    height="50px"
                    fontSize="lg"
                    isLoading={isSubmitting}
                    loadingText={t("contact.form.sending")}
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "lg",
                    }}
                    _active={{
                      transform: "translateY(0)",
                    }}
                    transition="all 0.2s"
                  >
                    {t("contact.form.submit")}
                  </Button>
                </Box>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>
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
