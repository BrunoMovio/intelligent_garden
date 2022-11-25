import { Box, VStack, GridItem, Flex, useDisclosure } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Card } from "../../../commom/components/card";
import { Heading } from "../../../commom/components/heading";
import SelectPlantModal from "./select-plant.modal";

function Profile() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <GridItem colSpan={1} w={"100$"} h={"100%"} position="relative">
      <Flex
        cursor={'pointer'}
        justify={"center"}
        align={"center"}
        py="2.5px"
        h={"60px"}
        w={"90%"}
        mt={"50px"}
        onClick={() => setIsProfileOpen(!isProfileOpen)}
      >
        <AiOutlineMenu size={"md"} color="#F6F7FC" />
      </Flex>

      {isProfileOpen && (
        <Box position="absolute" bottom={"-80px"} right={"100px"}>
          <Flex
            justify={"start"}
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
                w={"150%"}
                py={1}
                zIndex={1}
                border={"1px solid"}
                borderColor="gray.200"
              >
                <VStack p={8}>
                  <Heading
                    cursor={'pointer'}
                    textAlign={"start"}
                    backgroundColor={"white"}
                    fontSize={"lg"}
                    color={"gray"}
                    w={"100%"}
                    onClick={() => {
                      setIsModalOpen(true);
                      setIsProfileOpen(false);
                    }}
                  >
                    Mudar plantas
                  </Heading>
                  <Heading
                    textAlign={"start"}
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
      {isModalOpen ? (
        <SelectPlantModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      ) : (
        <></>
      )}
    </GridItem>
  );
}

export default Profile;
