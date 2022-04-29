import React from 'react'
import Description from '../components/views/about/Description.jsx'
import SocialButtons from '../components/views/about/SocialButtons.jsx'
import { Stack, } from '@chakra-ui/react'

const SobreMi = () => {
  return (
    <Stack
      id="sobre-mi"
      direction={"column"}
      h="100%"
      w="100%"
      py={14}
      color="blanco"
      spacing={8}
      alignItems={{ base: "center", sm: "center", md: "center", lg: "inherit" }}
    >
      <Description />
      <SocialButtons />
    </Stack>
  )
}

export default SobreMi
