import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@chakra-ui/react'

const MyButton = ({ bg, bgHover, color, title, link }) => {

  const MotionButton = motion(Button)

  return (
    <>
      <MotionButton
        as="a"
        href={link}
        target="_blank"
        bg={bg === undefined ? "" : bg}
        color={color === undefined ? "black" : color}
        variant="outline"
        border="2px solid"
        w={{ base: "133px", sm: "133px", md: "160px", lg: "130px" }}
        h={{ base: "40px", sm: "40px", md: "48px", lg: "48px" }}
        style={{ transition: "0.3s" }}
        _hover={{ textColor: "white", bgColor: bgHover === undefined ? "violeta.100" : bgHover }}
        whileHover={{ scale: 1.15, }}
      >
        {title}
      </MotionButton>
    </>
  )
}

export default MyButton