import {
  Card,
  CardBody,
  Image,
  Stack,
  Divider,
  CardFooter,
  Button,
  ButtonGroup,
  Text,
  Heading,
  HStack,
  VStack,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import bingo from "../images/projects/bingo.png";
import wordsearch from "../images/projects/wordsearch.png";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <VStack p={"2em"}>
      <Heading className="section-info" id="projects">
        Projects
      </Heading>

      <HStack spacing={"2em"}>
        {/* Bingo */}
        <Card maxW="xs" minH="md">
          <CardBody>
            <Stack mt="6" spacing="3" alignItems={"center"}>
              <Image
                src={bingo}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                h="100px"
                w="90%"
                fit="cover"
                align={"top"}
              />
              <Heading size="md">Bingo</Heading>
              <Text align={"justify"}>
                A python script to generate Bingo boards and flashcards for
                language learners of all levels.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button
              colorScheme="green"
              rightIcon={<FaGithub />}
              flexGrow={"1"}
              href="https://github.com/zomvie-break/bingo"
              as={"a"}
              target="_blank"
            >
              see on
            </Button>
          </CardFooter>
        </Card>

        {/* Wordsearch */}
        <Card maxW="xs" minH="md">
          <CardBody>
            <Stack mt="6" spacing="3" alignItems={"center"}>
              <Image
                src={wordsearch}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                h="100px"
                w="90%"
                fit="cover"
                align={"top"}
              />
              <Heading size="md">Wordsearch</Heading>
              <Text align={"justify"}>
                A python script to generate N number of different
                wordsearch-activities. With adjustable difficulty levels to
                accomodate learners of all ages.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button
              colorScheme="green"
              rightIcon={<FaGithub />}
              flexGrow={"1"}
              href="https://github.com/zomvie-break/wordsearch"
              as={"a"}
              target="_blank"
            >
              see on
            </Button>
          </CardFooter>
        </Card>
      </HStack>
    </VStack>
  );
}
