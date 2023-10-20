import { Container, Heading, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Container
        backgroundColor={"grey"}
        borderRadius={"20"}
        padding={"3em"}
        color={"white"}
        w={["40%", "90%", "50%", "40%"]}
      >
        <Heading as={"h2"}>About Me</Heading>
        <Text>
          I'm an engineer turned web developer skilled in Python. I engineer
          elegant and user-friendly websites that harmonize innovation and
          functionality. With a knack for creative problem-solving, I'm eager to
          collaborate and engineer digital solutions that captivate and inspire.
        </Text>
      </Container>
    </>
  );
}
