import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box>
      <Stack
        align="center"
        bgColor="negro.0"
        justify="center"
        // direction={{ base: "column", lg: "row" }}
        direction="row"
        minH="6vh"
      >
        <Text fontWeight={"bold"} color="blanco" textAlign={"center"}>Copyright © 2022 - Nahuel Abadia. Todos los derechos reservados</Text>
      </Stack>
    </Box>
  );
};

export default Footer;
