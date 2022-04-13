import React from 'react'
import { Box, Button, FormControl, FormLabel, Grid, Input, InputGroup, Stack, Textarea, } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const FormularioContacto = () => {

  const MotionButton = motion(Button)

  return (
    <Box>
      <Stack
        h="100%"
        w="100%"
        py={6}
        align={"center"}
      >
        {/* <form action="mailto:nahuabadia@gmail.com" method="post" enctype="text/plain" > */}
        <form action="https://formsubmit.co/nahuabadia@gmail.com" method="POST" >
          <Grid
            h={"60%"}
            w="100%"
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
            gap={{ base: 6, lg: 6 }}
            color="blanco"
          >
            <FormControl isRequired >
              <FormLabel fontWeight={"bold"}>Nombre</FormLabel>
              <InputGroup>
                <Input
                  type="name"
                  name="nombre"
                  aria-label="Nombre"
                  borderColor="blanco"
                  focusBorderColor="violeta.100"
                  size='lg'
                  _hover={"disable"}
                  w={{ base: "20rem", sm: "27rem", lg: "28rem" }}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontWeight={"bold"}>Apellido</FormLabel>
              <InputGroup>
                <Input
                  type="name"
                  name="apellido"
                  aria-label="Apellido"
                  borderColor="blanco"
                  focusBorderColor="violeta.100"
                  size='lg'
                  _hover={"disable"}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontWeight={"bold"}>Teléfono</FormLabel>
              <InputGroup>
                <Input
                  type="number"
                  name="numero"
                  aria-label="Numero de telefono"
                  borderColor="blanco"
                  focusBorderColor="violeta.100"
                  size="lg"
                  _hover={"disable"}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontWeight={"bold"}>Email</FormLabel>
              <InputGroup>
                <Input
                  type="email"
                  name="email"
                  aria-label="Email"
                  borderColor="blanco"
                  focusBorderColor="violeta.100"
                  size='lg'
                  _hover={"disable"}
                />
              </InputGroup>
            </FormControl>
          </Grid>
          <Grid
            templateColumns='repeat(1, 1fr)'
            h="40%"
            pt={3}
            pb={6}
          >
            <FormControl isRequired>
              <FormLabel
                fontWeight={"bold"}
                color="blanco"
              >
                Mensaje
              </FormLabel>
              <Textarea
                name="mensaje"
                h="150px"
                resize={"none"}
                borderColor="blanco"
                border="1px solid"
                color="blanco"
                focusBorderColor="violeta.100"
                _hover={"disable"}
                size='lg'
              />
            </FormControl>
            <Stack align="center" pt={8}>
              <MotionButton
                // as="a"
                // href="mailto:nahuabadia@gmail.com"
                type="submit"
                value="Enviar"
                border="2px solid"
                borderColor="blanco"
                color="white"
                variant="outline"
                size="lg"
                style={{ transition: "0.3s" }}
                _hover={{ textColor: "blanco", bgColor: "violeta.100" }}
                whileHover={{
                  scale: 1.15,
                }}
              >
                Enviar
              </MotionButton>
            </Stack>
          </Grid>
        </form>
      </Stack>
    </Box >
  )
}

export default FormularioContacto