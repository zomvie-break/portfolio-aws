import { Container, Heading, Text, VStack } from "@chakra-ui/react";

export default function About() {
  return (
    <VStack p={"2em"}>
      <Heading className="section-info" id="aboutme" as={"h2"}>
        About Me
      </Heading>
      <Container
        className="section-info-text"
        borderRadius={"20px"}
        padding={"3em"}
        //this will set the container dimensions according to different display sizes
        maxW={"60em"}
        w={["90%", "80%", "70%", "60%"]}
      >
        <Text>
          I'm an engineer turned web developer skilled in Python. I engineer
          elegant and user-friendly websites that harmonize innovation and
          functionality. With a knack for creative problem-solving, I'm eager to
          collaborate and engineer digital solutions that captivate and inspire.
        </Text>
      </Container>
    </VStack>
  );
}
