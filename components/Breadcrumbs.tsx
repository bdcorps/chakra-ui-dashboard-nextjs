import { HStack, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";

import { LinkType } from "types";

interface BreadcrumbsProps {
  items: LinkType[];
}

const Breadcrumbs: FunctionComponent<BreadcrumbsProps> = ({
  items,
}: BreadcrumbsProps) => {
  const router = useRouter();
  return (
    <HStack spacing={2} w="full">
      {items.map((item: LinkType, i: number) => {
        return (
          <React.Fragment key={`breadcrumb_${i}`}>
            <Link
              fontSize="sm"
              p={0}
              m={0}
              _hover={{ fontWeight: 500 }}
              color={i !== items.length - 1 ? "gray.500" : "gray.700"}
              href={item.url}
            >
              {item.label}
            </Link>
            {i !== items.length - 1 && (
              <Text p={0} m={0} color="gray.200" fontSize="sm">
                /
              </Text>
            )}
          </React.Fragment>
        );
      })}
    </HStack>
  );
};

export default Breadcrumbs;
