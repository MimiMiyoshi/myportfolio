import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Gloock } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";

const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
});

// Chakra UIのテーマをカスタマイズ
const theme = extendTheme({
  fonts: {
    heading: gloock.style.fontFamily, // h1-h6のデフォルトフォント
    body: "Helvetica, sans-serif", // 本文のデフォルトフォント
  },
  styles: {
    global: {
      // グローバルスタイル
      body: {
        fontFamily: "Helvetica, sans-serif",
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Box as="main">
        <Header {...pageProps} />
        <Component {...pageProps} />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

// appWithTranslationでアプリをラップ
export default appWithTranslation(MyApp);
