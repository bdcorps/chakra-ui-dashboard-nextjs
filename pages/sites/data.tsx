import { Box } from "@chakra-ui/react";
import { FunctionComponent } from "react";

import Layout from "components/Layout";

interface DataProps {}

const Data: FunctionComponent<DataProps> = ({}: DataProps) => {
  return (
    <Layout>
      <Box w="full">true</Box>
    </Layout>
  );
};

export default Data;
