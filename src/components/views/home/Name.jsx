import React from 'react'
import Typewriter from 'typewriter-effect'
import GraphemeSplitter from "grapheme-splitter";
import { Stack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Name = () => {

  const MotionText = motion(Text)

  const stringSplitter = string => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  return (
    <Stack
      h="100%"
      w={{ base: "100%", sm: "100%", md: "55%", lg: "52%" }}
      color="blanco"
      fontFamily="Circular-Black, Arial, Helvetica, sans-serif"
      fontWeight="bold"
      spacing={{ base: -1, sm: -2, md: -2, lg: -2 }}
      justifyContent={"center"}
    >
      <MotionText
        pl={{ md: 4 }}
        fontSize={{
          base: "28px",
          sm: "33px",
          md: "28px",
          lg: "38px"
        }}
      >
        Hola, me llamo
      </MotionText>
      <Text
        pl={{ md: 3.5 }}
        fontSize={{
          base: "45px",
          sm: "55px",
          md: "50px",
          lg: "65px"
        }}
      >
        Nahuel Abadía
      </Text>

      <Stack direction="row" spacing={{ base: 1.5, sm: 2.5, md: 2, lg: 3 }}>
        <Text
          pl={{ md: 4 }}
          fontSize={{
            base: "26px",
            sm: "33px",
            md: "28px",
            lg: "38px"
          }}
        >
          Soy
        </Text>
        <Text
          color="violeta.100"
          fontSize={{ base: "26px", sm: "33px", md: "28px", lg: "38px" }}
        >
          {<Typewriter options={{
            autoStart: true,
            loop: true,
            stringSplitter
          }}
            onInit={(typewriter) => {
              typewriter
                .typeString('<span style="text-shadow:2px 2px 3px purple">Frontend Developer</span> 💻')
                .pauseFor(1000)
                .deleteAll()
                .start()
            }}
          />}
        </Text>
      </Stack>
    </Stack>
  )
}

export default Name