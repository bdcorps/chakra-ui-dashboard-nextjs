import {
  Box,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FunctionComponent, useCallback, useEffect, useState } from "react";

import Layout from "components/Layout";

interface SimpleSettingsContentProps {}

const SimpleSettingsContent: FunctionComponent<
  SimpleSettingsContentProps
> = () => {
  return (
    <Box maxW="container.sm">
      <VStack spacing={4} align="flex-start">
        <VStack spacing={2} align="flex-start" w="full">
          <Text fontSize="md" fontWeight={500}>
            Name
          </Text>
          <Input placeholder="My Awesome Site" />
        </VStack>

        <VStack spacing={2} align="flex-start" w="full">
          <Text fontSize="md" fontWeight={500}>
            Description
          </Text>
          <Input placeholder="My Awesome Description" />
        </VStack>

        <VStack spacing={2} align="flex-start" w="full">
          <Text fontSize="md" fontWeight={500}>
            Brand Color
          </Text>
          <Input placeholder="My Awesome Color" />
        </VStack>
      </VStack>
    </Box>
  );
};

const UIMainPage = () => {
  const tabs = ["General", "SEO"];

  const [selectedTab, setSelectedTab] = useState<number>(0);

  const router = useRouter();
  const slug: string = String(router.query.slug);

  const innerFunction = useCallback(() => {
    const index = tabs.findIndex((tab: string) => {
      return tab.toLowerCase().replace(/ /g, "-") === slug;
    });

    if (index !== -1) {
      setSelectedTab(index);
    } else {
      setSelectedTab(0);
    }
  }, [slug, tabs]);

  useEffect(() => {
    innerFunction();
  }, [innerFunction]);

  return (
    <Layout>
      <Tabs
        w="full"
        overflowX="scroll"
        index={selectedTab}
        onChange={(index) => setSelectedTab(index)}
      >
        <TabList>
          {tabs.map((tab: string, i: number) => {
            return <Tab key={`tab_${i}`}>{tab}</Tab>;
          })}
        </TabList>

        <TabPanels>
          <TabPanel>
            <SimpleSettingsContent />
          </TabPanel>
          <TabPanel>
            <SimpleSettingsContent />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default UIMainPage;
