import { LinkBox, LinkOverlay, Text } from '@chakra-ui/react';

interface SiteCardProps {
  slug: string;
  title: string;
  description: string;
  url: string;
}

export const SiteCard: React.FC<SiteCardProps> = (props) => {
  const { slug, title, description, url } = props;
  return (
    <LinkBox p={4} rounded="md" background="white" boxShadow="xs">
      <LinkOverlay href={`/sites/${slug}`}>
        <Text>{title}</Text>
      </LinkOverlay>
      <Text color="gray.500" noOfLines={1}>
        {description}
      </Text>
    </LinkBox>
  );
};
