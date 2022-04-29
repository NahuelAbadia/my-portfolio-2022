import React from 'react';
import ContactForm from '../components/views/contact/ContactForm';
import { Stack, Text } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Stack
      id="contacto"
      w="100%"
      align={"center"}
    >
      <Stack>
        <Text
          color="blanco"
          fontFamily="ProximaNova_bold, sans-serif"
          fontSize={{ base: "4xl", sm: "5xl", md: "38px", lg: "5xl" }}
          fontWeight="bold"
          textAlign={"center"}
        >
          {"<"}Contacto{" />"}
        </Text>
      </Stack>
      <Stack w="100%">
        <ContactForm />
      </Stack>
    </Stack>
  )
}

export default Contact;