import { HamburgerIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Box,
  chakra,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Spacer,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

interface LinkItemProps {
  title: string;
  icon: React.ReactElement;
  url: string;
}

const LinkItem = ({ title, icon, url }: LinkItemProps) => {
  return (
    <Link
      width="100%"
      justifyContent="flex-start"
      fontSize={["xl", "md"]}
      fontWeight={500}
      // leftIcon={icon}
      variant="ghost"
      _hover={{ textDecoration: "none", color: "gray.200" }}
      href={url}
    >
      {title}
    </Link>
  );
};

const LinkHeader = ({ title }: any) => {
  return (
    <Box pt={4} pb={2}>
      <Text fontSize="xs" color="gray.500" fontWeight="medium">
        {title}
      </Text>
    </Box>
  );
};

const SidebarContents = () => {
  return (
    <VStack
      align="flex-start"
      justify="space-between"
      h="100vh"
      p={[0, 0, 4]}
      w="320px"
      color="white"
      bg="#0F1828"
    >
      <Box w="full" h="full">
        <Box display={{ base: "none", md: "flex" }}>
          <HStack>
            <Image src="/logo1.svg" w={6} h={6} alt="Logo" />
            <Text fontSize="lg" fontWeight={600}>
              Launchman
            </Text>
          </HStack>
        </Box>

        {/* <Divider w="full" my={2} borderWidth={1} borderColor="gray.600" /> */}

        <Flex py={[0, 6]} direction="column">
          <VStack w="full" spacing={0} h="full">
            <HStack
              spacing={3}
              w="full"
              _hover={{ color: "#e6e6e6", bg: "#222c3a" }}
              px={2}
              py={1}
              rounded="sm"
            >
              <Image w={4} h={4} src="/home-line.svg" alt="logo" />
              <LinkItem icon={<InfoOutlineIcon />} title="Dashboard" url="/" />
            </HStack>

            <HStack
              spacing={3}
              w="full"
              _hover={{ color: "#e6e6e6", bg: "#222c3a" }}
              px={2}
              py={1}
              rounded="sm"
            >
              <Image w={4} h={4} src="/settings.svg" alt="logo" />
              <LinkItem
                icon={<InfoOutlineIcon />}
                title="Settings"
                url="/settings"
              />
            </HStack>
          </VStack>
          <Spacer />
          {/* <Box>
            <Text>sunnyashiin@gmail.com</Text>
            <button onClick={() => {}}>Sign out</button>
          </Box> */}
          {/* <Button onClick={() => {}}>Sign in</Button> */}
        </Flex>
      </Box>
      <Box w="full">
        <Text fontSize="sm">Logged in as sunnyashiin@gmail.com</Text>
      </Box>
    </VStack>
  );
};
const MobileSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex w="full">
      <HStack>
        <Image src="/logo.svg" w={8} h={8} alt="Logo" />
        <Text fontSize="lg" fontWeight={600}>
          Launchman
        </Text>
      </HStack>
      <Spacer />
      <IconButton
        aria-label="Search database"
        variant="ghost"
        icon={<HamburgerIcon boxSize={18} />}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="full"
        isFullHeight
      >
        <DrawerOverlay />
        <DrawerContent bg="#0F1828" color="white">
          <DrawerCloseButton top={5} right={5} />

          <DrawerHeader>
            <HStack>
              <Image src="logo.svg" w={8} h={8} alt="Logo" />
              <Text fontSize="lg" fontWeight={600}>
                Launchman
              </Text>
            </HStack>
          </DrawerHeader>

          <DrawerBody>
            <SidebarContents />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

const Sidebar = ({ children }: any) => {
  return (
    <chakra.header id="header" h="700px">
      <Box display={{ base: "flex", md: "none", lg: "none" }} p={4}>
        <VStack w="full">
          <MobileSidebar />
          {children}
        </VStack>
      </Box>

      <Box display={{ base: "none", md: "flex", lg: "flex" }}>
        <HStack w="full">
          <SidebarContents />
          {children}
        </HStack>
      </Box>

      {/* <Box alignSelf="flex-start">{children}</Box> */}
      <Flex w="full" align="flex-start" justify="flex-start">
        <VStack w="full">
          <HStack>
            {/* <ConfirmButton
              headerText="Delete this message?"
              bodyText="Are you sure you want to delete this message? This cannot be undone."
              onSuccessAction={() => {}}
              buttonText="Delete"
              isDanger={true}
            />
            <Button variant="outline" m={4}>
              Log in
            </Button> */}
          </HStack>

          {/* <Box alignSelf="flex-start">{children}</Box> */}
        </VStack>
      </Flex>
    </chakra.header>
  );
};

const DrawerHome = ({ children }: any) => {
  return (
    <Box>
      <Sidebar>{children}</Sidebar>
    </Box>
  );
};

export default DrawerHome;

// https://levelup.gitconnected.com/create-a-responsive-navigation-bar-using-chakraui-6489473e933
