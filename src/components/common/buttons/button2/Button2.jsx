import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@chakra-ui/react'

const Button2 = ({ color, title, link }) => {

  const MotionButton = motion(Button)

  return (
    <>
      <MotionButton
        as="a"
        href={link}
        target="_blank"
        style={{ textDecoration: "none" }}
        whileHover={{ scale: 1.15 }}
        colorScheme={color=== undefined ? "blue" : color}
      >
        {title}
      </MotionButton>
    </>
  )
}

export default Button2