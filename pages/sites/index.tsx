import { Box } from "@chakra-ui/react";
import { FunctionComponent } from "react";

import Layout from "../../components/Layout";

interface SitesIndexProps {}

const SitesIndex: FunctionComponent<
  SitesIndexProps
> = ({}: SitesIndexProps) => {
  return (
    <Layout>
      <Box w="full">true</Box>
    </Layout>
  );
};

export default SitesIndex;
