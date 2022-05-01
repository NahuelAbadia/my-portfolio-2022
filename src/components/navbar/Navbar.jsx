import React, { useEffect, useState } from 'react'
import NavbarMobile from './NavbarMobile';
import NavbarDesktop from './NavbarDesktop';
import { Stack } from '@chakra-ui/react'

const Navbar = () => {

  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else {
        handleShow(false)
      }
    })
    return () => {
      window.removeEventListener("scroll")
    }
  }, [])

  return (
    <Stack
      w="100%"
      h="110px"
      as="header"
      position="fixed"
      zIndex={100}
      color="white"
      alignItems="center"
      justifyContent="center"
      bg={!show ? "#08080B" : "#111"}
      transition="0.6s"
      fontFamily="ProximaNova_bold, sans-serif"
    >
      <Stack
        w="100%"
        maxW="1300px"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <NavbarDesktop />
        <NavbarMobile />
      </Stack>
    </Stack >
  )
}

export default Navbar