import React from 'react'
import Navbar from '../navbar/Navbar';
import Home from '../../views/Home'
import About from "../../views/About";
import Skills from "../../views/Skills";
import Projects from '../../views/Projects';
import Contact from '../../views/Contact';
import Footer from '../../views/Footer';
import { Box, Container } from '@chakra-ui/react';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box bgColor="negro.900" id="home">
        <Container maxW="container.xl">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default Layout
