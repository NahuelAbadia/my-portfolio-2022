import React, { useEffect, useState } from "react";
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
import { Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"

const Navbar = () => {

  const MotionText = motion(Text)

  const [showMobileMenu, setShowMobileMenu] = useState(false);
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
    <Stack w={"100%"} zIndex={100} as="header" position="fixed">
      <Container show={show}>
        <Wrapper>
          <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
            <LogoContainer>
              <Link
                to="home"
                spy={true}
                offset={0}
                duration={700}
              >
                <MotionText
                  color="white"
                  cursor="pointer"
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
                </MotionText>
              </Link>
            </LogoContainer>

            <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {showMobileMenu ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <Menu open={showMobileMenu}>
              <MenuItem>
                <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  <Link
                    to="sobre-mi"
                    spy={true}
                    offset={-80}
                    duration={700}
                  >
                    <MotionText
                      _hover={{ textColor: "violeta.100", fontSize: { base: "2.1rem", sm: "2.5rem", md: "2.9rem", lg: "1.43rem" }, transition: "0.2s" }}
                      style={{ textDecoration: 'none', transition: "0.2s", }}
                    >
                      Sobre mi
                    </MotionText>
                  </Link>
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  <Link
                    to="skills"
                    spy={true}
                    offset={-80}
                    duration={700}
                  >
                    <MotionText
                      _hover={{ textColor: "violeta.100", fontSize: { base: "2.1rem", sm: "2.5rem", md: "2.9rem", lg: "1.43rem" }, transition: "0.2s" }}
                      style={{ textDecoration: 'none', transition: "0.2s" }}
                    >
                      Skills
                    </MotionText>
                  </Link>
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  <Link
                    to="proyectos"
                    spy={true}
                    offset={-80}
                    duration={700}
                  >
                    <MotionText
                      _hover={{ textColor: "violeta.100", fontSize: { base: "2.1rem", sm: "2.5rem", md: "2.9rem", lg: "1.43rem" }, transition: "0.2s" }}
                      style={{ textDecoration: 'none', transition: "0.2s" }}
                    >
                      Proyectos
                    </MotionText>
                  </Link>
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  <Link
                    to="contacto"
                    spy={true}
                    offset={-110}
                    duration={700}
                  >
                    <MotionText
                      _hover={{ textColor: "violeta.100", fontSize: { base: "2.1rem", sm: "2.5rem", md: "2.9rem", lg: "1.43rem" }, transition: "0.2s" }}
                      style={{ textDecoration: 'none', transition: "0.2s" }}
                    >
                      Contacto
                    </MotionText>
                  </Link>
                </MenuItemLink>
              </MenuItem>
            </Menu>
          </IconContext.Provider>
        </Wrapper>
      </Container>
    </Stack>
  );
};

export default Navbar;
