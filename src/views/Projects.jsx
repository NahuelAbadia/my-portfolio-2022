import React from 'react'
import ProjectDetail from '../components/views/projects/ProjectDetail.jsx';
import { Stack, Text } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Stack
      id="proyectos"
      py={10}
      fontFamily="ProximaNova_bold, sans-serif"
    >
      <Stack
        align="center"
        pt={6}
      >
        <Text
          color="blanco"
          fontSize={{ base: "4xl", sm: "5xl", md: "38px", lg: "5xl" }}
          fontWeight="bold"
          textAlign={"center"}
        >
          {`<Mis proyectos />`}
        </Text>
      </Stack>

      <Stack
        alignItems="center"
        py={12}
      >
        <ProjectDetail />
      </Stack>
    </Stack>
  )
}

export default Projects
