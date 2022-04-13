import React from 'react'
import { Box, Button, Grid, Image, Stack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const CardProyectos = ({ nombre, tecnologia, desc, img, pagina, repo }) => {

  const MotionButton = motion(Button)

  return (
    <Box>
      <Grid templateColumns='repeat(1, 1fr)' h="100%">
        <Stack
          h="100%"
          py={6}
          align="center"
          direction="column"
          boxShadow={"lg"}
          borderRadius="15px"
          bgColor="gray.50"
          spacing={{ base: 0 }}
          m={{ base: "auto" }}
          w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
        >
          <Stack h={{ base: "35%", sm: "40%", md: "40%", lg: "35%" }} mt={6}  >
            <Image
              src={img}
              w="500px"
              h="100%"
              objectFit={"contain"}
            />
          </Stack>

          <Stack
            h="25%"
            w={{ sm: "60%", md: "90%", lg: "100%" }}
            pt={{ base: 0, lg: 4 }}
            spacing={{ base: -1, sm: -1, md: -1, lg: 0 }}
            justifyContent={"center"}
          >
            <Text
              fontSize={{ base: "18px", sm: "20px", md: "20px", lg: "20px" }}
              fontWeight={"bold"}
              textAlign={"center"}
              color="negro.0"
            >
              {nombre}
            </Text>
            <Text
              fontSize={{ base: "16px", sm: "20px", md: "20px", lg: "20px" }}
              color="gris.100"
              textAlign={"center"}
              px={12}
            >
              {tecnologia}
            </Text>
          </Stack>

          <Stack
            w="100%"
            fontSize={{ base: "16px", sm: "20px", md: "20px", lg: "20px" }}
            h={{ base: "100%", lg: "40%" }}
            align={"center"}
          >
            <Stack h="100%" justifyContent={"center"}>
              <Text
                textAlign={"center"}
                m="0 20px"
                color="negro.0"
                px={4}
              >
                {desc}
              </Text>
            </Stack>
            <Stack direction="row" spacing={5}>
              <MotionButton
                as="a"
                href={repo}
                target="_blank"
                style={{ textDecoration: "none" }}
                whileHover={{ scale: 1.15 }}
                colorScheme={"purple"}
              >
                Ver repo
              </MotionButton>
              <MotionButton
                as="a"
                href={pagina}
                target="_blank"
                style={{ textDecoration: "none" }}
                whileHover={{ scale: 1.15 }}
                colorScheme={"purple"}
              >
                Ver página
              </MotionButton>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
    </Box>
  )
}

export default CardProyectos
