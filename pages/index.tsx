import { Alert, AlertIcon, SimpleGrid, Text } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import Layout from "components/Layout";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { SimpleCard } from "../components/SimpleCard";
import Table from "/components/Table";

export default function UIMainPage({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  const columnHelper = createColumnHelper<any>();

  const columns = [
    columnHelper.accessor("name", {
      cell: (info: any) => info.getValue(),
      header: "Name",
    }),
    columnHelper.accessor("message", {
      cell: (info: any) => info.getValue(),
      header: "Message",
    }),
  ];

  return (
    <Layout>
      <Alert status="warning">
        <AlertIcon />
        Your account will expire in 2 days. Upgrade now for $1M.
      </Alert>

      <SimpleGrid columns={[1, null, 2]} spacing={8} mb={20} w="full">
        <SimpleCard
          title="Sales (Last 30 days)"
          description="+70% due to organic growth"
        />
        <SimpleCard
          title="Stress (Last 30 days)"
          description="-30% due to being called cute :)"
        />
      </SimpleGrid>

      <Text fontSize="lg" fontWeight={600}>
        Recent Support Tickets
      </Text>

      <Table
        columns={columns}
        data={[
          {
            name: "Elon Mosk",
            message:
              "Yo! I heard you got a sick App Dashboard template. You think I can whip up a Twitter MVP with it? tight deadline - 2 days max",
          },
          {
            name: "Barrack Obata",
            message:
              "Thinking of making a SaaS app for politicians. You got a good Dashboard template?",
          },
          {
            name: "John Clooney",
            message:
              "Hey Sukh, in a pinch -  I'm filming a movie but I got this sick app idea. Trynna launch on PH. tips on where I should start?",
          },
        ]}
      />
    </Layout>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {},
  };
}
