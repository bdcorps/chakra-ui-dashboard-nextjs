import { Box, Center, Text, VStack } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface SimpleCardProps {
  title: string;
  description: string;
}

export const SimpleCard: FunctionComponent<SimpleCardProps> = ({
  title,
  description,
}: SimpleCardProps) => {
  return (
    <Box boxShadow="xs" p={6} rounded="md" bgColor="white" w="full">
      <Center w="full">
        <VStack w="full" align="flex-start">
          <Text fontSize="md" fontWeight={600}>
            {title}
          </Text>
          <Text fontSize="md" noOfLines={3}>
            {description}
          </Text>
        </VStack>
      </Center>
    </Box>
  );
};
