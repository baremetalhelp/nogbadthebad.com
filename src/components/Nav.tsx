"use client";

import * as React from "react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Link as ChakraLink,
  Container,
  Flex,
  HStack,
  Stack,
  useColorMode,
  LinkOverlay,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

interface Props {
  children: React.ReactNode;
}

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={useColorModeValue("gray.200", "gray.700")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container as={Stack} maxW={"6xl"} px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
              <Box
                width="50px"
                height="50px"
                borderRadius="full"
                overflow="hidden"
                boxShadow="md"
              >
                <StaticImage src="../images/nogbad.jpg" alt="Nogbad" />
              </Box>
            <Flex
              as={HStack}
              spacing={10}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <ChakraLink as={Link} to={"/"}>
                <Button variant={"ghost"}>Home</Button>
              </ChakraLink>
              <ChakraLink as={Link} to={"/about"}>
                <Button variant={"ghost"}>About</Button>
              </ChakraLink>
              {/* <ChakraLink as={Link} to={"/credits"}>
                <Button variant={"ghost"}>Credits</Button>
              </ChakraLink> */}
              <Button onClick={toggleColorMode} variant={"ghost"}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
