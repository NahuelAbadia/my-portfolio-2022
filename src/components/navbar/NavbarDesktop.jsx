import React from 'react'
import { Stack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'

const NavbarDesktop = () => {

  const MotionText = motion(Text)

  return (
    <>
      <Stack>
        <motion.div
          initial={{
            x: -1200,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 45,
          }}
        >
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
              ml={{ base: "1rem", sm: "1rem", md: "2rem", lg: "3rem" }}
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
        </motion.div>
      </Stack>

      <Stack
        pr={8}
        w="40%"
        direction="row"
        justifyContent='space-between'
        alignItems="center"
        fontSize="1.2rem"
        fontWeight={600}
        display={{
          base: 'none',
          sm: 'none',
          md: 'none',
          lg: 'flex'
        }}
      >
        <motion.div
          initial={{
            x: 1200
          }}
          animate={{
            x: 0
          }}
          transition={{
            type: "spring",
            stiffness: 45,
            delay: 0.3
          }}
        >
          <Link
            to="sobre-mi"
            spy={true}
            offset={-80}
            duration={700}
            style={{ cursor: "pointer" }}
          >
            <MotionText
              _hover={{
                textColor: "violeta.100",
                fontSize: {
                  base: "2.1rem",
                  sm: "2.5rem",
                  md: "2.9rem",
                  lg: "1.43rem"
                },
                transition: "0.2s"
              }}
              style={{ textDecoration: 'none', transition: "0.2s", }}
            >
              Sobre mi
            </MotionText>
          </Link>
        </motion.div>
        <motion.div
          initial={{
            x: 1200
          }}
          animate={{
            x: 0
          }}
          transition={{
            type: "spring",
            stiffness: 45,
            delay: 0.5
          }}
        >
          <Link
            to="skills"
            spy={true}
            offset={-80}
            duration={700}
            style={{ cursor: "pointer" }}
          >
            <MotionText
              _hover={{
                textColor: "violeta.100",
                fontSize: {
                  base: "2.1rem",
                  sm: "2.5rem",
                  md: "2.9rem",
                  lg: "1.43rem"
                },
                transition: "0.2s"
              }}
              style={{ textDecoration: 'none', transition: "0.2s" }}
            >
              Skills
            </MotionText>
          </Link>
        </motion.div>
        <motion.div
          initial={{
            x: 1200
          }}
          animate={{
            x: 0
          }}
          transition={{
            type: "spring",
            stiffness: 45,
            delay: 0.7
          }}
        >
          <Link
            to="proyectos"
            spy={true}
            offset={-80}
            duration={700}
            style={{ cursor: "pointer" }}
          >
            <MotionText
              _hover={{
                textColor: "violeta.100",
                fontSize: {
                  base: "2.1rem",
                  sm: "2.5rem",
                  md: "2.9rem",
                  lg: "1.43rem"
                },
                transition: "0.2s"
              }}
              style={{ textDecoration: 'none', transition: "0.2s" }}
            >
              Proyectos
            </MotionText>
          </Link>
        </motion.div>
        <motion.div
          initial={{
            x: 1200
          }}
          animate={{
            x: 0
          }}
          transition={{
            type: "spring",
            stiffness: 45,
            delay: 0.9
          }}
        >
          <Link
            to="contacto"
            spy={true}
            offset={-110}
            duration={700}
            style={{ cursor: "pointer" }}
          >
            <MotionText
              _hover={{
                textColor: "violeta.100",
                fontSize: {
                  base: "2.1rem",
                  sm: "2.5rem",
                  md: "2.9rem",
                  lg: "1.43rem"
                },
                transition: "0.2s"
              }}
              style={{ textDecoration: 'none', transition: "0.2s" }}
            >
              Contacto
            </MotionText>
          </Link>
        </motion.div>
      </Stack>
    </>
  )
}

export default NavbarDesktop