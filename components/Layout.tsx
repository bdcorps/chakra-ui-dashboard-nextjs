import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import React, { FunctionComponent } from "react";
import DrawerHome from "./Drawer";
import PageHeader from "./PageHeader";

interface QuoteProps {
  title: string;
  author: string;
}

const Quote: FunctionComponent<QuoteProps> = ({
  title,
  author,
}: QuoteProps) => {
  return (
    <Box p={2} color="gray.600">
      <Text textAlign="center" fontSize={["xs", "md"]}>
        &quot;{title}&quot;
      </Text>
      <Link textAlign="end" fontSize={["xs", "md"]} href={`https://${author}`}>
        - {author}
      </Link>
    </Box>
  );
};

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  return (
    <Container h="100vh" maxW="container.lg">
      <Box>
        <Center w="full" minH="100vh">
          <Stack direction={["column", "row"]} pt={6} align="center">
            <VStack spacing={4} flex={3}>
              <Heading>Log in to Launchman</Heading>
              <Text maxW={300} textAlign="center">
                Join companies like Zapier, VisaList, Canva that are getting
                millions of users using Programmatic SEO
              </Text>
              <Button
                colorScheme="brand"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Sign in with Google
              </Button>
              <Text fontSize="xs" color="gray.500">
                2172 pages already created
              </Text>
            </VStack>

            <SimpleGrid minChildWidth={[200, 300]} spacing={2} flex="2" pt={6}>
              <Quote
                title="Editorial content will continue to work best for high-volume keywords.
        It’s worth the effort. Programmatic SEO is an efficient approach for
        long-tail keywords."
                author="trends.vc"
              />
              <Quote
                title="Programmatic SEO accounts for a big part of our traffic and revenue. I think it’s an acquisition channel few startups are taking advantage of, but that can bring incredible ROIs."
                author="failory.com"
              />
              <Quote
                title="Who said you can’t program your way to the top of the SERP 😉"
                author="unzip.dev"
              />
            </SimpleGrid>
          </Stack>
        </Center>
      </Box>
    </Container>
  );
};

interface LayoutProps {
  children: React.ReactNode;
  toolbar?: React.ReactNode;
  title?: string;
  showDrawer?: boolean;
}

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  toolbar,
  title = "Dashboard",
  showDrawer = true,
}: LayoutProps) => {
  const loading = false;
  const hasUser = {};

  return (
    <>
      <NextSeo
        title="Dashboard | Launchman"
        description="Dashboard for Launchman"
        additionalLinkTags={[
          {
            rel: "shortcut icon",
            type: "image/png",
            href: "/logo1.svg",
          },
        ]}
      ></NextSeo>

      <>
        {loading ? (
          "Loading..."
        ) : (
          <>
            {!hasUser ? (
              <Login />
            ) : (
              <>
                {showDrawer ? (
                  <DrawerHome>
                    <VStack
                      w="full"
                      h="100vh"
                      p={4}
                      overflowY="scroll"
                      spacing={4}
                      align="flex-start"
                    >
                      <PageHeader />
                      {children}
                    </VStack>
                  </DrawerHome>
                ) : (
                  <Box w="full">
                    <PageHeader />
                    {children}
                  </Box>
                )}
              </>
            )}
          </>
        )}
      </>
    </>
  );
};

export default Layout;
