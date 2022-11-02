import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

import { LinkType } from "types";
import Breadcrumbs from "./Breadcrumbs";
import { titleCase } from "/utils";

interface PageHeaderProps {}

type PageHeaderType = LinkType & {
  description: string;
};

const PageHeader: FunctionComponent<PageHeaderProps> = () => {
  const links: PageHeaderType[] = [
    { label: "Home", url: "/", description: "Manage your site" },
    {
      label: "Data Source",
      url: "/sites/(.*)/data",
      description: "Manage your site",
    },
    {
      label: "Page Builder",
      url: "/sites/(.*)/builder",
      description: "Create a templated page",
    },
    { label: "Settings", url: "/settings", description: "Manage your site" },
    {
      label: "Profile",
      url: "/settings/profile",
      description: "Manage your site",
    },
  ];

  // should be Home > Settings > Profile
  const url = "http://localhost:3000/settings/profile";
  const router = useRouter();

  const pathTokens: string[] = router.asPath.split("/").slice(1); // skip the first /
  const isIndexPath: boolean = router.asPath === "/";

  // const breadcrumbsTokens: LinkType[] = [
  //   { label: "Home", url: "/" },
  //   { label: "Settings", url: "/settings" },
  //   { label: "Profile", url: "/settings/profile" },
  // ];
  // let breadcrumbsTokens: LinkType[] = pathTokens
  //   .map((pathToken: string) => {
  //     const breadcrumbToken: LinkType | null =
  //       links.find((link: LinkType) => {
  //         const regex = new RegExp(link.url);
  //         const m = router.asPath.match(regex);

  //         const linkTokens = link.url.split("/");

  //         return linkTokens[linkTokens.length - 1] === pathToken;
  //       }) || null;

  //     return breadcrumbToken;
  //   })
  //   .filter((el: LinkType | null) => {
  //     return el != null;
  //   }) as LinkType[];

  let breadcrumbsTokens: LinkType[] = pathTokens.map(
    (pathToken: string, i: number) => {
      const url: string = "/" + pathTokens.slice(0, i + 1).join("/");
      const label: string = titleCase(pathToken);

      return { label, url };
    }
  );

  const currentPageHeader: PageHeaderType | null = {
    ...breadcrumbsTokens[breadcrumbsTokens.length - 1],
    description: "Manage your site",
  };

  const regex = new RegExp(links[2].url);
  const m = router.asPath.match(regex);

  return (
    <VStack w="full" spacing={2} align="flex-start">
      {/* <LinkBox>
        {breadcrumbsTokens && breadcrumbsTokens.length > 1 && !isIndexPath && (
          <HStack w="full" spacing={1}>
            <ArrowBackIcon w={4} />

            <Button
              color="gray.600"
              variant="unstyled"
              fontSize="sm"
              onClick={() => router.back()}
            >
              Back
            </Button>
          </HStack>
        )}
      </LinkBox> */}
      {currentPageHeader && (
        <>
          {breadcrumbsTokens && !isIndexPath && (
            <Breadcrumbs items={breadcrumbsTokens} />
          )}
          <Box>
            <Heading as="h1" fontSize="3xl">
              {currentPageHeader.label}
            </Heading>
            <Text color="gray.600">{currentPageHeader.description}</Text>
          </Box>
        </>
      )}
    </VStack>
  );
};

export default PageHeader;
