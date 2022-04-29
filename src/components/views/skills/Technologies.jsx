import React from 'react';
import IconCards from './IconCards';
import { Grid, GridItem, Stack } from "@chakra-ui/react";
import { skills } from "../../../api/SkillsData.js"

const Technologies = () => {
  return (
    <Stack
      align="center"
      w={{ sm: "100%", md: "100%", lg: "100%" }}
      py={14}
    >
      <Stack
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
          {skills.map(skill => {
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
              <IconCards
                nombre={skill.nombre}
                logo={skill.logo}
                color={skill.color}
              />
            </GridItem>
          })}
        </Grid>
      </Stack>
    </Stack>
  )
}

export default Technologies