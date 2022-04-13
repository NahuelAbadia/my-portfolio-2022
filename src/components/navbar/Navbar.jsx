import React, { useState } from "react";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./NavbarElements"
import { FaBars, FaTimes, } from "react-icons/fa";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/react";

const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const MotionLink = motion(Link)

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <MotionLink
              href="#home"
              color="white"
              fontWeight="bold"
              fontSize={{ base: "27px", sm: "30px", md: "38px", lg: "5xl" }}
              whileHover={{
                rotate: -3,
                scale: 1.15
              }}
              _hover={{
                textColor: "violeta.100",
                transition: "0.2s",
              }}
              style={{ textDecoration: 'none', transition: "0.2s" }}
            >
              {`<My Portfolio />`}
            </MotionLink>
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <MotionLink
                  href="#sobre-mi"
                  _hover={{ textColor: "violeta.100", fontSize: { base: "2.1rem", sm: "2.5rem", md: "2.9rem", lg: "1.43rem" }, transition: "0.2s" }}
                  style={{ textDecoration: 'none', transition: "0.2s", }}
                >
                  Sobre mi
                </MotionLink>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <MotionLink
                  href="#skills"
                  _hover={{ textColor: "violeta.100", fontSize: { base: "2.1rem", sm: "2.5rem", md: "2.9rem", lg: "1.43rem" }, transition: "0.2s" }}
                  style={{ textDecoration: 'none', transition: "0.2s" }}
                >
                  Skills
                </MotionLink>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <MotionLink
                  href="#proyectos"
                  _hover={{ textColor: "violeta.100", fontSize: { base: "2.1rem", sm: "2.5rem", md: "2.9rem", lg: "1.43rem" }, transition: "0.2s" }}
                  style={{ textDecoration: 'none', transition: "0.2s" }}
                >
                  Proyectos
                </MotionLink>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <MotionLink
                  href="#contacto"
                  _hover={{ textColor: "violeta.100", fontSize: { base: "2.1rem", sm: "2.5rem", md: "2.9rem", lg: "1.43rem" }, transition: "0.2s" }}
                  style={{ textDecoration: 'none', transition: "0.2s" }}
                >
                  Contacto
                </MotionLink>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
