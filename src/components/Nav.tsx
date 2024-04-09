"use client";

import * as React from "react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "gatsby";

interface Props {
  children: React.ReactNode;
}

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        bg={useColorModeValue("gray.200", "gray.700")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container as={Stack} maxW={"6xl"} px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Box>
              <ChakraLink as={Link} to="/">
                <Text as={"b"} fontSize={"2xl"}>
                  Nogbad The Bad
                </Text>
              </ChakraLink>
            </Box>
            <Flex
              as={HStack}
              spacing={10}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <ChakraLink as={Link} to={"/"}>
                <Text as={"b"}>Home</Text>
              </ChakraLink>
              <ChakraLink as={Link} to={"/about"}>
                <Text as={"b"}>About</Text>
              </ChakraLink>
              <ChakraLink as={Link} to={"/credits"}>
                <Text as={"b"}>Credits</Text>
              </ChakraLink>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
