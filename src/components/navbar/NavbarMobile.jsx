import React from 'react'
import {
  Stack,
  Button,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
} from '@chakra-ui/react'
import { FaBars, FaTimes, } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'

const NavbarMobile = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const MotionText = motion(Text)

  return (
    <>
      <Stack
        display={{
          base: 'flex',
          sm: 'flex',
          md: 'flex',
          lg: 'none'
        }}
      >
        <motion.div
          initial={{
            x: 900
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
          <Button
            bg={'none'}
            _active={{ bg: 'none' }}
            _hover={{ bg: 'none' }}
            _focus={{ bg: 'none' }}
            onClick={() => onOpen()}
          >
            <FaBars size={"2.25em"} />
          </Button>
        </motion.div>

        <Drawer
          onClose={onClose}
          isOpen={isOpen}
          size={'full'}
        >
          <DrawerOverlay />
          <DrawerContent bg={'#08080B'}>
            <Stack
              mt={'10px'}
              direction={'row-reverse'}
            >
              <Button
                bg={'none'}
                _hover={{ bg: 'none' }}
                _active={{ bg: 'none' }}
                _focus={{ bg: 'none' }}
                onClick={() => onClose()}
                height="50px"
                pt={3}
                pr={10}
              >
                <FaTimes size="2 em" color="white" />
              </Button>
            </Stack>
            <DrawerBody>
              <Stack
                h={'100%'}
                pt={{ base: 12, sm: 16, md: 20 }}
                direction={'column'}
                spacing={{ base: 24, sm: 24, md: 16 }}
              >
                <Link
                  to="home"
                  spy={true}
                  offset={0}
                  duration={700}
                  style={{ cursor: 'pointer' }}
                  onClick={() => onClose()}
                >
                  <MotionText
                    color="white"
                    fontSize={{ base: "4xl", sm: "4xl", md: "5xl", lg: "5xl" }}
                    fontWeight={600}
                    textAlign="center"
                    onClick={() => onClose()}
                  >
                    Home
                  </MotionText>
                </Link>

                <Link
                  to="sobre-mi"
                  spy={true}
                  offset={-80}
                  duration={700}
                  style={{ cursor: "pointer" }}
                >
                  <MotionText
                    color="white"
                    fontSize={{ base: "4xl", sm: "4xl", md: "5xl", lg: "5xl" }}
                    fontWeight={600}
                    textAlign="center"
                    onClick={() => onClose()}
                  >
                    Sobre mi
                  </MotionText>
                </Link>
                <Link
                  to="skills"
                  spy={true}
                  offset={-80}
                  duration={700}
                  style={{ cursor: "pointer" }}
                >
                  <MotionText
                    color="white"
                    fontSize={{ base: "4xl", sm: "4xl", md: "5xl", lg: "5xl" }}
                    fontWeight={600}
                    textAlign="center"
                    onClick={() => onClose()}
                  >
                    Skills
                  </MotionText>
                </Link>
                <Link
                  to="proyectos"
                  spy={true}
                  offset={-80}
                  duration={700}
                  style={{ cursor: "pointer" }}
                >
                  <MotionText
                    color="white"
                    fontSize={{ base: "4xl", sm: "4xl", md: "5xl", lg: "5xl" }}
                    fontWeight={600}
                    textAlign="center"
                    onClick={() => onClose()}
                  >
                    Proyectos
                  </MotionText>
                </Link>
                <Link
                  to="contacto"
                  spy={true}
                  offset={-110}
                  duration={700}
                  style={{ cursor: "pointer" }}
                >
                  <MotionText
                    color="white"
                    fontSize={{ base: "4xl", sm: "4xl", md: "5xl", lg: "5xl" }}
                    fontWeight={600}
                    textAlign="center"
                    onClick={() => onClose()}
                  >
                    Contacto
                  </MotionText>
                </Link>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

      </Stack>
    </>
  )
}

export default NavbarMobile