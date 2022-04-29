import React, { useState } from 'react'
import { Box, Grid, Icon, Stack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const IconCards = ({ nombre, logo, color }) => {

  const MotionBox = motion(Box)

  const [isAnimating, setisAnimating] = useState(false)

  return (
    <Stack alignItems={"center"}>
      <Stack
        align={"center"}
        w={{ base: "100%", sm: "60%", md: "100%", lg: "100%" }}
      >
        <Grid
          templateColumns={{ sm: "repeat(1, 1fr)", lg: "repeat(1, 1fr)" }}
          w={"100%"}
        >
          <MotionBox
            textColor="orange.500"
            animate={{
              rotateY: isAnimating ? 360 : -360,
            }}
            transition={{
              duration: 0.7,
              type: "tween",
            }}
            onMouseEnter={() => setisAnimating(!isAnimating)}
          >
            <Icon
              as={logo}
              color={color}
              h={{ base: 16, sm: 20, md: 24, lg: 24 }}
              w={{ base: 16, sm: 20, md: 24, lg: 24 }}
            >
            </Icon>
          </MotionBox>
        </Grid>
        <Text
          align="center"
          color="white"
          fontSize="xl"
          pt={3}
        >
          {nombre}
        </Text>
      </Stack>
    </Stack>
  )
}

export default IconCards
