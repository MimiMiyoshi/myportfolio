import React from "react";
import {
  Box,
  Container,
  HStack,
  Link as ChakraLink,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  useBreakpointValue,
  Spacer,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const { t } = useTranslation("common");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const router = useRouter();
  const { locale } = router;

  // 言語切り替え用
  const languages = [
    { code: "en", label: "EN" },
    { code: "ja", label: "JP" },
    { code: "fr", label: "FR" },
  ];
  // 現在の言語以外を表示
  const otherLanguages = languages.filter((lang) => lang.code !== locale);

  const MENU_ITEMS = [
    { key: "home", href: "/" },
    { key: "about", href: "/about" },
    { key: "works", href: "/works" },
    { key: "contact", href: "/contact" },
  ];

  const MenuItems = () => (
    <>
      <NextLink href="/" passHref legacyBehavior>
        <ChakraLink>Home</ChakraLink>
      </NextLink>
      <NextLink href="/about" passHref legacyBehavior>
        <ChakraLink>About</ChakraLink>
      </NextLink>
      <NextLink href="/works" passHref legacyBehavior>
        <ChakraLink>Works</ChakraLink>
      </NextLink>
      <NextLink href="/contact" passHref legacyBehavior>
        <ChakraLink>Contact</ChakraLink>
      </NextLink>
    </>
  );

  const LanguageSwitcher = () => (
    <HStack spacing={2}>
      {otherLanguages.map((lang, idx) => (
        <React.Fragment key={lang.code}>
          <Link href={router.asPath} locale={lang.code}>
            {lang.label}
          </Link>
          {/* 最後の要素でなければ区切りを表示 */}
          {idx < otherLanguages.length - 1 && (
            <Box as="span" color="gray.400" fontWeight="bold" px={1}>
              |
            </Box>
          )}
        </React.Fragment>
      ))}
    </HStack>
  );

  return (
    <Box as="header" py={4} borderBottom="1px" borderColor="gray.100">
      <Container maxW="container.xl">
        {isMobile ? (
          // モバイル用ハンバーガーメニュー
          <Box textAlign="right">
            <IconButton
              icon={<HamburgerIcon />}
              onClick={onOpen}
              variant="ghost"
            />
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody>
                  <VStack spacing={8} pt={10}>
                    <MenuItems />
                    <LanguageSwitcher />
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        ) : (
          // デスクトップ用メニュー
          <HStack spacing={8} justify="flex-end">
            <MenuItems />
            <Spacer />
            <LanguageSwitcher />
          </HStack>
        )}
      </Container>
    </Box>
  );
}
