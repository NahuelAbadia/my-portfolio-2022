import React from 'react'
import NewCard from '../common/cards/card1/NewCard'
import { Grid, Stack, } from '@chakra-ui/react'
import { proyectos } from '../../api/ProyectosData'

const InfoProyectos = () => {
  return (
    <Stack direction={"column"} >
      <Stack
        py={12}
      >
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(1, 1fr)", md: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          gap={{ base: 7, md: 4, lg: 10 }}
          direction="row"
          w={{ base: "100%", md: "100%", lg: "100%" }}
          minH="1000px"
          h="100%"
          margin="auto"
        >
          {proyectos.map((proyecto) => {
            return <NewCard
              key={proyecto.id}
              nombre={proyecto.nombre}
              tecnologia={proyecto.tecnologia}
              desc={proyecto.desc}
              img={proyecto.img}
              pagina={proyecto.pagina}
              repo={proyecto.repo}
              />
          })}
        </Grid>
      </Stack>
    </Stack>
  )
}

export default InfoProyectos
