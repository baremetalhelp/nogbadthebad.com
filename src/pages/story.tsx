import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import * as React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { HeadFC, PageProps } from "gatsby";

const StoryPage: React.FC<PageProps> = () => {
  return (
    <>
      <Nav />
      <Container as={Stack} maxW={"6xl"} spacing={3} py={20}>
        <Heading>The Story</Heading>
      </Container>
      <Footer />
    </>
  );
};

export default StoryPage;

export const Head: HeadFC = () => <title>Story</title>;
