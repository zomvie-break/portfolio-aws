import roque from "../images/roque.png";
import cv from "../media/cv.pdf";
import {
  Box,
  Container,
  Image,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaRegFileAlt } from "react-icons/fa";

export default function Header() {
  return (
    <VStack p={"2em"}>
      <Image src={roque} borderRadius="full" marginBottom={"50px"} />
      <Heading as={"h1"} size={"2xl"} color={"gold"}>
        Hi, my name is Audrius.
      </Heading>
      <Heading as={"h2"} size={"md"} marginBottom={"30px"}>
        I'm a Full Stack Engineer
      </Heading>

      <Text maxWidth={"40%"}>A computer nerd.</Text>
      <HStack spacing={8} marginTop={"2em"} color={"white"}>
        <Text
          className="header-social-logo"
          as={"a"}
          href="https://www.linkedin.com/in/victor-vaquero/"
          target="_blank"
        >
          <FaLinkedin size={"3em"} />
        </Text>
        <Text
          className="header-social-logo"
          as={"a"}
          href="https://www.linkedin.com/in/victor-vaquero/"
          target="_blank"
        >
          <FaGithub size={"3em"} />
        </Text>
        <Text className="header-social-logo" as={"a"} href={cv} target="_blank">
          <FaRegFileAlt size={"3em"} />
        </Text>
      </HStack>
    </VStack>
  );
}
