import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import * as React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { HeadFC, PageProps } from "gatsby";

const CreditsPage: React.FC<PageProps> = () => {
  return (
    <>
      <Nav />
      <Container as={Stack} maxW={"6xl"} spacing={3} py={20}>
        <Heading>Image Credits</Heading>
        <Text>
          <Link href="http://www.smallfilms.co.uk/noggin/noggin.htm" isExternal>
            Noggin the Nog
            <ExternalLinkIcon mx="2px" />
          </Link>
          .
        </Text>
        <Text>
          <Link href="http://www.smallfilms.co.uk/noggin/nogbad.htm" isExternal>
            Nogbad the Bad
            <ExternalLinkIcon mx="2px" />
          </Link>
          .
        </Text>
        <Text>
          <Link
            href="https://solowargamer.wordpress.com/hordes-of-the-things/noggin-the-nog/"
            isExternal
          >
            The Northlands
            <ExternalLinkIcon mx="2px" />
          </Link>
          .
        </Text>
        <Text>
          <Link
            href="http://www.smallfilms.co.uk/noggin/badcast.htm"
            isExternal
          >
            Nogbad's Castle
            <ExternalLinkIcon mx="2px" />
          </Link>
          .
        </Text>
      </Container>
      <Footer />
    </>
  );
};

export default CreditsPage;

export const Head: HeadFC = () => <title>Credits</title>;
