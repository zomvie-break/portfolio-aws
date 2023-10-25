import roque from "../images/roque.png";
import logo from "../images/v-logo.png";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const linksInNav = {
  aboutme: {
    name: "AboutMe",
    href: "/about-me",
  },
  projects: {
    name: "Projects",
    href: "/projects",
  },
};
const NavLink = (props) => {
  const { children } = props;
  const href = props.href;
  const key = props.name;
  // const href = props.href;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={href}
      key={key}
    >
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Image src={logo} boxSize={"30px"} />
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink key={"aboutme"} href={"#aboutme"}>
                About me
              </NavLink>{" "}
              <NavLink key={"projects"} href={"#projects"}>
                Projects
              </NavLink>{" "}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <NavLink key={"aboutme"} href={"#aboutme"}>
                About me
              </NavLink>{" "}
              <NavLink key={"projects"} href={"#projects"}>
                Projects
              </NavLink>{" "}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
