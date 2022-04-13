import React from 'react'
import SkillsCards from '../components/cardSkills/SkillsCards';
import { Box, Container, Grid, Stack, Text } from "@chakra-ui/react";
import { skills } from '../api/skillsData';

const Skills = () => {

  return (
    <Box bgColor="negro.900">
      <Container maxW="container.xl">
        <Stack
          h="80vh"
          w="100%"
          justifyContent={"space-evenly"}
        // bgColor="green"
        >

          <Stack
            align="center"
            color="blancoN.0"
            fontSize={{ base: "4xl", sm: "5xl", md: "38px", lg: "5xl" }}
            fontWeight="bold"
            fontFamily="ProximaNova_bold, sans-serif"
            textAlign={"center"}
          // bgColor="blue"
          >
            <Text>
              {`<My Skills />`}
            </Text>
          </Stack>
          <Stack
            align="center"
            w={{ sm: "100%", md: "100%", lg: "100%" }}
          // bgColor="red"
          >
            <Stack
              w={{ base: "80%", sm: "80%", md: "80%", lg: "100%" }}
              pt={4}
              alignContent={"center"}
              justifyContent={"center"}
            // bgColor="yellow"
            >
              <Grid
                templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(8, 1fr)" }}
                gap={{ base: 6, sm: 6, md: 4, lg: 6 }}
                align="center"
              >
                {skills.map((skill, index) => {
                  return <SkillsCards
                    key={skill.id}
                    nombre={skill.nombre}
                    logo={skill.logo}
                    color={skill.color}
                  >
                  </SkillsCards>
                })}
              </Grid>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box >
  )
}

export default Skills
