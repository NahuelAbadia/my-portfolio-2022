import React from 'react'
import MeIcon from '../components/views/home/MeIcon';
import Name from '../components/views/home/Name';
import { Stack } from '@chakra-ui/react'

const Home = () => {

  return (
    <Stack
      id="home"
      align="center"
      w="100%"
      h="100vh"
      justifyContent={"space-between"}
      direction={"row"}
      spacing={0}
    >
      <Name />
      <MeIcon />
    </Stack>
  )
}

export default Home
