import {
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const IndexPage: React.FC<PageProps> = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <Nav />
      <Container maxW={"6xl"} as="main" py={20}>
        <SimpleGrid columns={{sm: 1, md: 2}} spacing={10} alignItems="center">
          <Text fontSize={"4xl"}>
            Nogbad the bad is the archetypal wicked uncle.
          </Text>
          <StaticImage src="../images/nogbad.jpg" layout={"fixed"} height={200} alt="Nogbad" />
          <StaticImage src="../images/northlands.jpg" alt="Northlands" />
          <Text fontSize={"4xl"}>
            He is obsessed with an ambition to regain the crown of the
            Northlands.
          </Text>
          <Text fontSize={"4xl"}>
            In his view it was wrongly given to his worthless nephew, Noggin.
          </Text>
          <StaticImage src="../images/noggin.jpg" layout={"fixed"}  alt="Noggin" />
          <StaticImage src="../images/badcast.jpg" layout={"fixed"} alt="Nogbad's castle" />
          <Text fontSize={"4xl"}>
            His life is spent in his castle devising ingeniously evil schemes to
            steal the crown, or force Noggin to give it up.
          </Text>
        </SimpleGrid>
      </Container>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
