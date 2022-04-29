import React from 'react'
import { Stack, Text } from '@chakra-ui/react'

const Description = () => {
  return (
    <>
      <Text
        fontSize={{ base: "4xl", sm: "5xl", md: "38px", lg: "5xl" }}
        fontWeight="bold"
        textAlign={"center"}
      >
        {`<Sobre mi />`}
      </Text>
      <Stack
        fontSize={{ base: "xl", sm: "2xl", md: "2xl", lg: "1.7rem" }}
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
    </>
  )
}

export default Description