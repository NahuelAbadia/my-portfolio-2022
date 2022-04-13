import React from 'react'
import Typewriter from 'typewriter-effect'
import GraphemeSplitter from "grapheme-splitter";
import nahue from '../../assets/nahu2022.jpeg'
import { Box, Container, Image, Stack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Home = () => {

  const MotionText = motion(Text)

  const stringSplitter = string => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  return (
    <Box bgColor="negro.900">
      <Container maxW="container.xl">
        <Stack
          align="center"
          w="100%"
          h="80vh"
          justifyContent={"space-between"}
          direction={"row"}
          spacing={0}
        >
          <Stack
            // fontFamily="ProximaNova_bold, sans-serif"
            h="100%"
            w={{ base: "100%", sm: "100%", md: "55%", lg: "52%" }}
            color="blanco"
            fontFamily="Circular-Black, Arial, Helvetica, sans-serif"
            fontWeight="bold"
            spacing={{ base: -1, sm: -2, md: -2, lg: -2 }}
            justifyContent={"center"}
          >
            <MotionText
              fontSize={{ base: "28px", sm: "33px", md: "28px", lg: "38px" }}
              pl={{ md: 4 }}
              drag
              dragConstraints={{
                top: -2,
                left: -2,
                right: 2,
                bottom: 2,
              }}
              dragElastic={0.1}
              dragMomentum={false}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
            >
              Hola, me llamo
            </MotionText>
            <Text
              fontSize={{ base: "45px", sm: "55px", md: "50px", lg: "65px" }}
              pl={{ md: 3.5 }}
            >
              Nahuel Abadía
            </Text>

            <Stack direction="row" spacing={{ base: 1.5, sm: 2.5, md: 2, lg: 3 }}>
              <Text
                fontSize={{ base: "26px", sm: "33px", md: "28px", lg: "38px" }}
                pl={{ md: 4 }}
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
                    typewriter.typeString('<span style="text-shadow:2px 2px 3px purple">Web Developer</span> 💻').pauseFor(1000).deleteAll()
                      .typeString('<span style="text-shadow:2px 2px 3px purple">Frontend Developer</span> ❤️').pauseFor(1000).deleteAll()
                      .typeString('<span style="text-shadow:2px 2px 3px purple">UI Developer</span> 😁').pauseFor(1000).deleteAll().start()
                  }}
                />}
              </Text>
            </Stack>

          </Stack>

          <Stack
            h="100%"
            w={{ base: "0%", sm: "0%", md: "45%", lg: "48%" }}
            display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
          >
            <Image
              src={nahue}
              h={"100%"}
              w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
              objectFit={"contain"}
            />
          </Stack>

        </Stack>
      </Container>
    </Box>
  )
}

export default Home
