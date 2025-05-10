import React from "react";
import { Box, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Gloock } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

// スタイルをコンポーネントの先頭に追加
const gradientAnimation = {
  "@keyframes gradient": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
};

const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
});

const MotionBox = motion(Box);

export default function Home() {
  const { t } = useTranslation("common");

  // 画面サイズに応じてフォントサイズを変更
  const titleFontSize = useBreakpointValue({
    base: "40px", // モバイル
    sm: "50px", // タブレット（小）
    md: "60px", // タブレット（大）
    lg: "80px", // デスクトップ
  });

  const subtitleFontSize = useBreakpointValue({
    base: "16px",
    sm: "18px",
    md: "20px",
    lg: "25px",
  });

  return (
    <Box fontFamily="Helvetica">
      {/* Hero Section */}
      <MotionBox
        bgGradient="linear(to-r, pink.200, purple.200, blue.200)"
        bgSize="200% 200%"
        animation="gradient 15s ease infinite"
        sx={gradientAnimation}
        minH="calc(100vh - 73px)" // ヘッダーの高さ（py:4 = 32px + border:1px）を引いた値
        display="flex"
        alignItems="center"
        justifyContent="center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        px={4} // 左右のパディングを追加
      >
        <Box textAlign="center">
          <Heading
            as="h1"
            color="white"
            fontWeight="bold"
            fontSize={titleFontSize}
            lineHeight="1.2"
            className={gloock.className}
          >
            Hi, I'm
            <br />
            Mimi
            <br />
            Miyoshi
          </Heading>
          <Text
            color="white"
            mt={4}
            fontSize={subtitleFontSize}
            fontWeight="normal"
          >
            A programmer based in Sapporo, Japan
          </Text>
        </Box>
      </MotionBox>
    </Box>
  );
}

export async function getStaticProps({ locale = "en" }) {
  try {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  } catch (error) {
    console.error("Translation error:", error);
    return {
      props: {
        ...(await serverSideTranslations("en", ["common"])), // フォールバック
      },
    };
  }
}
