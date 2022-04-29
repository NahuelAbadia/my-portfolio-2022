import React from 'react'
import { Box, Button, Icon, Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const SocialButtons = () => {

  const MotionButton = motion(Button)
  const MotionBox = motion(Box)

  return (
    <>
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
            href="https://drive.google.com/file/d/1XQS7htNlO5iisD4knxW-L7LlA7o5X6EM/view?usp=sharing"
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
            />
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
            />
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
            />
          </MotionBox>
        </Stack>
      </Stack>
    </>
  )
}

export default SocialButtons