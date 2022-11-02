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
import { useCallback, useEffect, useState } from "react";

import Layout from "../../components/Layout";

export default function UIMainPage() {
  const tabs = ["General", "Pages", "SEO", "Developer API", "Experimental"];

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
  }, [slug]);

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
          </TabPanel>
          <TabPanel>
            <Box>Hello</Box>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>five!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
}
