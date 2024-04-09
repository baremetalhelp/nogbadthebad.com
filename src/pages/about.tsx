import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Container, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <>
      <Nav />
      <Container as={Stack} maxW={"6xl"} spacing={3} py={20}>
        <Heading>About Noggin the Nog</Heading>
        <Text>
          <Link href="https://en.wikipedia.org/wiki/Noggin_the_Nog" isExternal>
            Noggin the Nog
            <ExternalLinkIcon mx="2px" />
          </Link>{" "}
          is a series broadcast on the{" "}
          <Link href="https://en.wikipedia.org/wiki/BBC_Television" isExternal>
            BBC
            <ExternalLinkIcon mx="2px" />
          </Link>{" "}
          from 1959–1965.
        </Text>
        <Text>
          It was written by{" "}
          <Link href="https://en.wikipedia.org/wiki/Oliver_Postgate" isExternal>
            Oliver Postgate
            <ExternalLinkIcon mx="2px" />
          </Link>{" "}
          and illustrated by{" "}
          <Link href="https://en.wikipedia.org/wiki/Peter_Firmin" isExternal>
            Peter Firmin
            <ExternalLinkIcon mx="2px" />
          </Link>
          .
        </Text>
        <Text>
          There are lots{" "}
          <Link
            href="https://en.wikipedia.org/wiki/Noggin_the_Nog#Books"
            isExternal
          >
            books
            <ExternalLinkIcon mx="2px" />
          </Link>{" "}
          too.
        </Text>
        <Text>
          It's a "cult classic" according Wikipedia, which means many thousands
          of 60-year-olds just discovered they're in a cult. But relieved we're
          in a good one.
        </Text>
        <Text>
          You can find more details about all characters from{" "}
          <Link href="http://www.smallfilms.co.uk/noggin/" isExternal>
            The Smallfilms Treasury
            <ExternalLinkIcon mx="2px" />
          </Link>
          .
        </Text>
        <Text>
          There is a touching tribute to Oliver Postgate at{" "}
          <Link href="http://nogginthenog.com" isExternal>
            http://nogginthenog.com
            <ExternalLinkIcon mx="2px" />
          </Link>
          . Fair warning: You'll have a "must have something in my eye" moment
          when you read this.
        </Text>
        <Heading>About me</Heading>
        <Text>
          I do computers, mostly Amazon Web Services these days. I also know
          things like how to make super-fast websites with zero-cost hosting
          from scratch like this one.
        </Text>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About</title>;
