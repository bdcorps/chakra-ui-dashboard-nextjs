import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";

import { LinkType } from "types";
import Breadcrumbs from "./Breadcrumbs";

interface PageHeaderProps {}

type PageHeaderType = LinkType & {
  description: string;
};

const links: PageHeaderType[] = [
  { label: "Home", url: "/", description: "Manage your site" },
  { label: "All Sites", url: "/sites", description: "View all your sites" },
  { label: "Settings", url: "/settings", description: "Manage your site" },
  { label: "SEO", url: "/settings/seo", description: "Configure SEO" },
  {
    label: "General",
    url: "/settings/general",
    description: "Manage your site",
  },
];

const PageHeader: FunctionComponent<PageHeaderProps> = () => {
  // should be Home > Settings > Profile
  // const url = "http://localhost:3000/settings/profile";
  const router = useRouter();

  // console.log("router.basePaasPathth", router);

  const [breadcrumbs, setBreadcrumbs] = useState<LinkType[]>([]);
  const [pageHeader, setPageHeader] = useState<PageHeaderType>();

  useEffect(() => {
    if (router.isReady) {
      console.log("setting path as ", router.asPath);

      const pathTokens: string[] = router.asPath.split("/").slice(1); // skip the first /

      let curPageHeader: PageHeaderType = {
        url: "",
        label: "",
        description: "",
      };

      const breadcrumbsTokens: LinkType[] = pathTokens.map(
        (pathToken: string, i: number) => {
          const url: string = "/" + pathTokens.slice(0, i + 1).join("/");
          const breadcrumbToken: PageHeaderType | undefined = links.find(
            (link: LinkType) => {
              return link.url === url;
            }
          );

          if (i === pathTokens.length - 1) {
            curPageHeader = {
              label: breadcrumbToken?.label || "",
              url,
              description: breadcrumbToken?.description || "",
            };
          }

          return { label: breadcrumbToken?.label || "", url };
        }
      );

      setBreadcrumbs(breadcrumbsTokens);
      setPageHeader(curPageHeader);
    }
  }, [router]);

  return (
    <VStack w="full" spacing={2} align="flex-start">
      {pageHeader && (
        <>
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
          <Box>
            <Heading as="h1" fontSize="3xl">
              {pageHeader.label}
            </Heading>
            <Text color="gray.600">{pageHeader.description}</Text>
          </Box>
        </>
      )}
    </VStack>
  );
};

export default PageHeader;
