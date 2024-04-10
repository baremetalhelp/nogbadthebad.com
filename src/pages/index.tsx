import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const IndexPage: React.FC<PageProps> = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <Nav />
      <Container maxW={"6xl"} as="main" py={10}>
        <Stack spacing={10}>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5}>
            <Card>
              <CardHeader>
                <Heading size="lg">In the Lands of the North...</Heading>
              </CardHeader>
              <CardBody>
                <Stack spacing={10}>
                  <Text>
                    ...where the black rocks stand guard against the cold sea,
                    in the dark night that is very long, the men of the
                    Northlands sit by their great log fires and they tell a
                    tale...
                  </Text>
                  <Box display="flex" justifyContent="center">
                    <StaticImage src="../images/people.jpg" alt="The People" />
                  </Box>
                </Stack>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Heading size="lg">Who is Nogbad The Bad?</Heading>
              </CardHeader>
              <CardBody>
                <Stack spacing={10}>
                  <Text>
                    Nogbad the Bad is the archetypal wicked uncle. Just not a
                    very nice person generally.
                  </Text>
                  <Box display="flex" justifyContent="center">
                    <StaticImage src="../images/nogbad.jpg" alt="Nogbad" />
                  </Box>
                </Stack>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Heading size="lg">What does Nogbad want?</Heading>
              </CardHeader>
              <CardBody>
                <Stack spacing={10}>
                  <Text>
                    He is obsessed with ambition to regain the crown of the
                    Northlands.
                  </Text>
                  <Box display="flex" justifyContent="center">
                    <StaticImage
                      src="../images/northlands.jpg"
                      alt="Northlands"
                    />
                  </Box>
                </Stack>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Heading size="lg">Why does he want the crown?</Heading>
              </CardHeader>
              <CardBody>
                <Stack spacing={10}>
                  <Text>
                    In his view The Northlands was wrongly given to his
                    worthless nephew, Noggin.
                  </Text>
                  <Box display="flex" justifyContent="center">
                    <StaticImage src="../images/noggin.jpg" alt="Noggin" />
                  </Box>
                </Stack>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Heading size="lg">What's Nogbad's plan?</Heading>
              </CardHeader>
              <CardBody>
                <Stack spacing={10}>
                  <Stack spacing={2}>
                    <Text>
                      His life is spent in his castle devising ingeniously evil
                      schemes to steal the crown, or force Noggin to give it up.
                    </Text>
                  </Stack>
                  <Box display="flex" justifyContent="center">
                    <StaticImage
                      src="../images/badcast.jpg"
                      alt="Nogbad's castle"
                    />
                  </Box>
                </Stack>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <Heading size="lg">Does it work?</Heading>
              </CardHeader>
              <CardBody>
                <Stack spacing={10}>
                  <Stack spacing={2}>
                    <Text>
                      No. He never succeeds and we never get tired of watching
                      him fail.
                    </Text>
                    <Text>
                      Sometimes he dies. But comes back the next episode only to
                      try again.
                    </Text>
                  </Stack>
                  <Box display="flex" justifyContent="center">
                    <StaticImage
                      src="../images/nogbad2.gif"
                      alt="Nogbad"
                    />
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
