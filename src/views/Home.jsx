import React from 'react'
import MyIcon from '../components/views/home/MyIcon';
import Name from '../components/views/home/Name';
import { Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion';

const Home = () => {

  const MotionStack = motion(Stack)

  return (
    <MotionStack
      id="home"
      align="center"
      w="100%"
      h="100vh"
      justifyContent={"space-between"}
      direction={"row"}
      spacing={0}
      initial={{
        y: 0,
        x: 0,
      }}
    >
      <Name />
      <MyIcon />
    </MotionStack>
  )
}

export default Home
