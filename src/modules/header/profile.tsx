import { Box, Text, VStack, HStack, GridItem, Flex } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Card } from "../../commom/components/card";
import { Button } from "../../commom/components/button";
import { Heading } from "../../commom/components/heading";

function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GridItem colSpan={1} w={"100$"} h={"100%"} position="relative">
      <Flex
        justify={"center"}
        align={"center"}
        py="2.5px"
        h={"60px"}
        w={"90%"}
        mt={"50px"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <AiOutlineMenu size={"md"} color="#F6F7FC" />
      </Flex>

      {isOpen && (
        <Box position="absolute" bottom={"-60px"}>
          <Flex
            justify={"center"}
            align={"center"}
            py="2.5px"
            h={"80px"}
            w={"100%"}
            mt={"20px"}
            mr={"40px"}
            borderRadius={"8px"}
          >
            <VStack>
              <Card
                w={"100%"}
                py={1}
                zIndex={1}
                border={"1px solid"}
                borderColor="gray.200"
              >
                <VStack p={8}>
                  <Heading
                    textAlign={"end"}
                    backgroundColor={"white"}
                    fontSize={"lg"}
                    color={"gray"}
                    w={"100%"}
                  >
                    Mudar senha
                  </Heading>
                  <Heading
                    textAlign={"end"}
                    backgroundColor={"white"}
                    fontSize={"lg"}
                    color={"gray"}
                    w={"100%"}
                  >
                    Sair
                  </Heading>
                </VStack>
              </Card>
            </VStack>
          </Flex>
        </Box>
      )}
    </GridItem>
  );
}

export default Profile;
