import { Box, Heading, Text, Image, HStack } from "@chakra-ui/react";
import { GridItem } from "@chakra-ui/react";
import logo from "../../commom/assets/logo.png";

function Logo() {
  return (
    <GridItem colSpan={5}>
      <HStack>
        <Image src={logo} h="120px" p={10} />
        <Box textAlign="center" w="100%">
          <Heading fontSize="40px" pb={0} mb={0}>
            Horta do Artur
          </Heading>
        </Box>
      </HStack>
    </GridItem>
  );
}

export default Logo;
