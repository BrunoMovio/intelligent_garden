import { Box, Heading, Text, Image, HStack } from "@chakra-ui/react";
import { GridItem } from "@chakra-ui/react";

function Banner() {
  return (
    <GridItem colSpan={6} my={"12px"}>
      <HStack justify={"center"}>
        <Box
          textAlign="center"
          w="80%"
          borderRadius={"8px"}
          border={"1px solid #F6F7FC"}
        >
          <Heading fontSize="20px" pb={0} mb={0}>
            Como funciona?
          </Heading>
          <Text>
            Os sensores de humildade e temperatura devem ser colocados dentro da
            jardineira ao lado de cada planta a ser monitorada e devem estar
            conectados ao módulo principal. Esse módulo também requer que uma
            fonte de energia seja conectada além de uma conexão constante com
            uma rede WiFi disponível para que ele possa enviar os dados para
            este dashboard online.
          </Text>
        </Box>
      </HStack>
    </GridItem>
  );
}

export default Banner;
