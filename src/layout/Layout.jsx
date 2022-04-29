import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header'
import SobreMi from "../views/SobreMi";
import Skills from "../views/Skills";
import Proyectos from '../views/Proyectos';
import Contacto from '../views/Contacto';
import Footer from '../components/footer/Footer';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <SobreMi />
      <Skills />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  )
}

export default Layout
