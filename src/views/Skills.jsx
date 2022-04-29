import React from 'react'
import SkillsCards from '../components/cardSkills/SkillsCards';
import { Box, Container, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { skills } from '../api/skillsData';

const Skills = () => {

  return (
    <Box bgColor="negro.900" id="skills">
      <Container maxW="container.xl">
        <Stack
          h={{ sm: "110vh", md: "80vh", lg: "80vh" }}
          w="100%"
          justifyContent={"space-evenly"}
        >
          <Stack
            align="center"
            color="blancoN.0"
            fontSize={{ base: "4xl", sm: "38px", md: "38px", lg: "5xl" }}
            fontWeight="bold"
            fontFamily="ProximaNova_bold, sans-serif"
            textAlign={"center"}
            pt={16}
          >
            <Text>
              {`<My Skills />`}
            </Text>
          </Stack>

          <Stack
            align="center"
            w={{ sm: "100%", md: "100%", lg: "100%" }}
            py={14}
          >
            <Stack
              // h={{sm:"100%"}}
              w={{ base: "100%", sm: "80%", md: "80%", lg: "100%" }}
              alignItems={"center"}
              justifyContent="center"
            >
              <Grid
                align="center"
                w={{ base: "100%", sm: "100%", md: "100%", lg: "90%" }}
                gap={{ base: 6, sm: 6, md: 4, lg: 8 }}
                templateColumns={
                  {
                    base: "repeat(2, 1fr)",
                    sm: "repeat(3, 1fr)",
                    md: "repeat(4, 1fr)",
                    lg: "repeat(6, 1fr)"
                  }
                }
              >
                {skills.map((skill) => {
                  return <GridItem
                    key={skill.id}
                    h="100%"
                    py={6}
                    w={{
                      base: "100%",
                      sm: "100%",
                      md: "100%",
                      lg: "75%"
                    }}
                  >
                    <SkillsCards
                      nombre={skill.nombre}
                      logo={skill.logo}
                      color={skill.color}
                    />
                  </GridItem>
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
