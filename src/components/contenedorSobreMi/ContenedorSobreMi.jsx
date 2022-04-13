import React from 'react'
import { Box, Button, Icon, Stack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa'

const ContenedorSobreMi = () => {

  const MotionButton = motion(Button)
  const MotionBox = motion(Box)

  return (
    <Stack
      direction={"column"}
      h="100%"
      w="100%"
      py={14}
      color="blanco"
      spacing={8}
      alignItems={{ base: "center", sm: "center", md: "center", lg: "inherit" }}
    >
      <Text
        fontSize={{ base: "4xl", sm: "5xl", md: "38px", lg: "5xl" }}
        fontWeight="bold"
        textAlign={"center"}
      >
        {`<Sobre mi />`}
      </Text>
      <Stack
        fontSize={{ base: "xl", sm: "2xl", md: "2xl", lg: "3xl" }}
        fontWeight={{ base: "semibold", sm: "semibold", md: "semibold", lg: "semibold" }}
        textAlign={{ base: "center", sm: "center", md: "inherit", lg: "inherit" }}
        w={{ base: "92%", sm: "90%", md: "90%", lg: "100%" }}
        h="70%"
        py={{ base: 2, sm: 4, md: 8, lg: 12 }}
        spacing={12}

      >
        <Text>
          Soy un desarrollador frontend apasionado por lo que hago, con capacidad analítica y con una formación autodidacta.
        </Text>
        <Text>
          Estoy constantemente en búsqueda de nuevos conocimientos para así desenvolverme mejor en el día a día y hacer uso de ellos tanto en mis proyectos personales como en los proyectos laborales.
        </Text>
        <Text>
          Además, cuento con la iniciativa para trabajar en equipo, promoviendo así la comunicación y un clima de trabajo participativo.
        </Text>
        <Text>
          Soy una persona objetiva y decidida que da lo mejor de si mismo para cumplir sus metas.
        </Text>
      </Stack>

      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
        minH={{ base: "2rem", sm: "4.7rem", md: "4.7rem", lg: "4.7rem" }}
        h="100%"
        w={{ base: "92%", sm: "90%", md: "90%", lg: "100%" }}
      >
        <Stack>
          <MotionButton
            as="a"
            href="https://drive.google.com/file/d/1MPTGfKFhY-ke6Z5E9vbIWZnd6cKyi7vV/view?usp=sharing"
            target="_blank"
            color="white"
            variant="outline"
            border="2px solid"
            w={{ base: "133px", sm: "133px", md: "160px", lg: "160px" }}
            h={{ base: "40px", sm: "40px", md: "48px", lg: "48px" }}
            style={{ transition: "0.3s" }}
            _hover={{ textColor: "blanco", bgColor: "violeta.100" }}
            whileHover={{ scale: 1.15, }}
          >
            Descargar CV
          </MotionButton>
        </Stack>

        <Stack
          direction="row"
          spacing={{ base: 4, sm: 4, md: 5, lg: 7 }}
          justifyContent={"flex-end"}
          pr={{ base: 2, sm: 4, md: 3, lg: 8 }}

        >
          <MotionBox
            as="a"
            href="https://www.linkedin.com/in/nahuel-tomás-abadia/"
            target="_blank"
            cursor={"pointer"}
            whileHover={{ scale: 1.3, color: "#0e76a8" }}>
            <Icon
              as={FaLinkedin}
              w={{ base: 6, sm: 8, md: 9, lg: 9 }}
              h={{ base: 6, sm: 8, md: 9, lg: 9 }}
            >
            </Icon>
          </MotionBox>
          <MotionBox
            as="a"
            href="https://github.com/NahuelAbadia/"
            target="_blank"
            cursor={"pointer"}
            whileHover={{ scale: 1.3, color: "gray" }}>
            <Icon
              as={FaGithub}
              w={{ base: 6, sm: 8, md: 9, lg: 9 }}
              h={{ base: 6, sm: 8, md: 9, lg: 9 }}
            >
            </Icon>
          </MotionBox>
          <MotionBox
            as="a"
            href="mailto:nahuabadia@gmail.com"
            target="_blank"
            cursor={"pointer"}
            whileHover={{ scale: 1.3, color: "#f36529" }}>
            <Icon
              as={FaEnvelope}
              w={{ base: 6, sm: 8, md: 9, lg: 9 }}
              h={{ base: 6, sm: 8, md: 9, lg: 9 }}
            >
            </Icon>
          </MotionBox>
          <MotionBox
            as="a"
            href="https://www.instagram.com/nahue.abadia/"
            target="_blank"
            cursor={"pointer"}
            whileHover={{ scale: 1.3, color: "#be2edd" }}>
            <Icon
              as={FaInstagram}
              w={{ base: 6, sm: 8, md: 9, lg: 9 }}
              h={{ base: 6, sm: 8, md: 9, lg: 9 }}
            >
            </Icon>
          </MotionBox>
        </Stack>
      </Stack>


    </Stack >
  )
}

export default ContenedorSobreMi
