"use client";

import * as React from "react";

import {
  Box,
  chakra,
  Container,
  Link,
  HStack,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.200", "gray.700")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>
          A tiny placeholder site made with ❤️ by{" "}
          <Link
            href="https://www.linkedin.com/in/stephenharrison"
            target="_blank"
          >
            Stephen Harrison
          </Link>
        </Text>
        <HStack spacing={6}>
          <SocialButton label={"LinkedIn"} href={"#"}>
            <Link
              href="https://www.linkedin.com/in/stephenharrison"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </SocialButton>
          <SocialButton label={"Github"} href={"#"}>
            <Link
              href="https://github.com/baremetalhelp/nogbadthebad.com"
              target="_blank"
            >
              <FaGithub />
            </Link>
          </SocialButton>
        </HStack>
      </Container>
    </Box>
  );
}
