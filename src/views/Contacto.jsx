import React from 'react';
import { Box, Container, Stack, Text } from '@chakra-ui/react';
import FormularioContacto from '../components/formularioContacto/FormularioContacto';

const Contacto = () => {
  return (
    <Box bgColor="negro.900" id="contacto">
      <Container maxW="container.xl">
        <Stack w="100%" align={"center"}>
          <Stack>
            <Text
              color="blanco"
              fontFamily="ProximaNova_bold, sans-serif"
              fontSize={{ base: "4xl", sm: "5xl", md: "38px", lg: "5xl" }}
              fontWeight="bold"
              textAlign={"center"}
            >
              {"<"}Contacto{" />"}
            </Text>
          </Stack>
          <Stack w="100%">
            <FormularioContacto />
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Contacto;