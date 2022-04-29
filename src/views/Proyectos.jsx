import React from 'react'
import { Box, Container, Stack, Text } from "@chakra-ui/react";
import InfoProyectos from '../components/infoProyectos/InfoProyectos.jsx';

const Proyectos = () => {
  return (
    <Box bgColor="negro.900" id="proyectos">
      <Container maxW="container.xl">
        <Stack
          py={10}
          fontFamily="ProximaNova_bold, sans-serif"
        >
          <Stack
            fontSize="5xl"
            fontWeight="bold"
            color="blanco"
            pt={6}
          >
            <Text
              align="center"
              fontSize={{ base: "4xl", sm: "5xl", md: "38px", lg: "5xl" }}
              fontWeight="bold"
              textAlign={"center"}
            >
              {`<Mis proyectos />`}
            </Text>
          </Stack>

          <Stack alignItems="center">
            <InfoProyectos />
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Proyectos
