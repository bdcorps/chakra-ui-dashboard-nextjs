import { AddIcon } from "@chakra-ui/icons";
import { Box, Center, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Layout from "../components/Layout";

export default function UIMainPage({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  return (
    <Layout>
      <SimpleGrid columns={[1, null, 3]} spacing="8" mb="20">
        <Box boxShadow="xs" p={6} rounded="md" bgColor="white">
          <Center>
            <VStack w="full">
              <AddIcon w={3} h={3} />
              <Text>Add a new site</Text>
            </VStack>
          </Center>
        </Box>
      </SimpleGrid>
    </Layout>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {},
  };
}
