import React from 'react'
import { Box, Container, Stack, } from '@chakra-ui/react'
import ContenedorSobreMi from '../components/contenedorSobreMi/ContenedorSobreMi.jsx'

const SobreMi = () => {
  return (
    <Box bgColor="negro.900" id="sobre-mi">
      <Container maxW="container.xl">
        <Stack align={"center"}>
          <ContenedorSobreMi />
        </Stack>
      </Container>
    </Box>
  )
}

export default SobreMi
