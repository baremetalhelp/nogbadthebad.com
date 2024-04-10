import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Code,
  Container,
  Heading,
  Link,
  Stack,
  Text,
  LinkOverlay,
} from "@chakra-ui/react";
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
          See Neil Jones's amazing site{" "}
          <Link href="http://nogginthenog.com" isExternal>
            http://nogginthenog.com
            <ExternalLinkIcon mx="2px" />
          </Link>{" "}
          for more details about the Northlands than you can handle. This site
          is the source of truth for all things Noggin.
        </Text>
        <Text>
          <Link href="https://en.wikipedia.org/wiki/Noggin_the_Nog" isExternal>
            But in brief, Noggin the Nog
            <ExternalLinkIcon mx="2px" />
          </Link>{" "}
          is a series broadcast on the{" "}
          <Link href="https://en.wikipedia.org/wiki/BBC_Television" isExternal>
            BBC
            <ExternalLinkIcon mx="2px" />
          </Link>
          . Written by{" "}
          <Link href="https://en.wikipedia.org/wiki/Oliver_Postgate" isExternal>
            Oliver Postgate
            <ExternalLinkIcon mx="2px" />
          </Link>{" "}
          and illustrated by{" "}
          <Link href="https://en.wikipedia.org/wiki/Peter_Firmin" isExternal>
            Peter Firmin
            <ExternalLinkIcon mx="2px" />
          </Link>
          , the series ran from 1959 to 1965. Nogbad The Bad is a really mean
          character in the series.
        </Text>
        <Text>
          It's a "cult classic" according Wikipedia, which means many thousands
          of 60-year-olds just discovered they're in a cult. But we're relieved
          it's a good one.
        </Text>
        <Text>
          You can also find more details about all the characters in Noggin The
          Nog at{" "}
          <Link href="http://www.smallfilms.co.uk/noggin/" isExternal>
            The Smallfilms Treasury
            <ExternalLinkIcon mx="2px" />
          </Link>
          .
        </Text>
        <Heading>About me</Heading>
        <Text>
          I have been a fan of Noggin The Nog as long as I can remember. That's
          by no means an exaggeration because 1959 was a banner for the show and
          for me.
        </Text>
        <Text>
          I mostly do computers, and mostly Amazon Web Services these days. Let
          me know if you need a hand with anything. You can contact me on{" "}
          <Link
            href="https://www.linkedin.com/in/stephenharrison"
            target="_blank"
          >
            LinkedIn
            <ExternalLinkIcon mx="2px" />
          </Link>
          .
        </Text>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About</title>;
