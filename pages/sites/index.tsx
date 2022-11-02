import { SimpleGrid } from "@chakra-ui/react";
import { FunctionComponent } from "react";

import Layout from "components/Layout";
import { SiteCard } from "/components/SiteCard";

interface SitesIndexProps {}

const SitesIndex: FunctionComponent<
  SitesIndexProps
> = ({}: SitesIndexProps) => {
  return (
    <Layout>
      <SimpleGrid columns={[1, null, 2]} spacing={8} mb={20} w="full">
        <SiteCard title="Site #1" description="A site" slug="anothersite" />
        <SiteCard
          title="Site #2"
          description="Add one more"
          slug="anothersite"
        />{" "}
        <SiteCard
          title="Site #3"
          description="Yep, another"
          slug="anothersite"
        />
        <SiteCard
          title="Site #4"
          description="Add one more to the count"
          slug="anothersite"
        />
      </SimpleGrid>
    </Layout>
  );
};

export default SitesIndex;
