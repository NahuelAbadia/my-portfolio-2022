import React from 'react'
import Technologies from '../components/views/skills/Technologies';
import { Stack, Text } from "@chakra-ui/react";

const Skills = () => {

  return (
    <Stack
      id="skills"
      w="100%"
      h={{ sm: "110vh", md: "80vh", lg: "80vh" }}
      justifyContent={"space-evenly"}
      fontFamily="ProximaNova_bold, sans-serif"
    >
      <Stack
        align="center"
        pt={16}
      >
        <Text
          color="blanco"
          fontSize={{ base: "4xl", sm: "38px", md: "38px", lg: "5xl" }}
          fontWeight="bold"
          textAlign={"center"}
        >
          {`<My Skills />`}
        </Text>
      </Stack>

      <Technologies />

    </Stack>
  )
}

export default Skills
