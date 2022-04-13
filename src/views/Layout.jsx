import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header'
import SobreMi from "./SobreMi";
import Skills from "./Skills";
import Proyectos from './Proyectos';
import Contacto from './Contacto';
import Footer from '../components/footer/Footer';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <section id="sobre-mi">
        <SobreMi />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="proyectos">
        <Proyectos />
      </section>
      <section id="contacto">
        <Contacto />
      </section>
      <Footer />
    </div>
  )
}

export default Layout
