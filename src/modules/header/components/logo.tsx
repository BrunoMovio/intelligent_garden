import { Box, Heading, Image, HStack } from "@chakra-ui/react";
import { GridItem } from "@chakra-ui/react";
import logo from "../../../commom/assets/logo.png";

function Logo(input: { name: string }) {
  return (
    <GridItem colSpan={5}>
      <HStack>
        <Image src={logo} h="120px" p={10} />
        <Box textAlign="center" w="100%">
          <Heading fontSize="40px" pb={0} mb={0}>
            {input.name}`s Garden
          </Heading>
        </Box>
      </HStack>
    </GridItem>
  );
}

export default Logo;
