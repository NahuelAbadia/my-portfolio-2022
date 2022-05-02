import React, { useState } from 'react'
import nahue from "../../../assets/nahu.png"
import { Image, Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import "./MeIcon.css"

const MyIcon = () => {

  const MotionStack = motion(Stack)

  var balls = document.getElementsByClassName("ball");
  document.onmousemove = function (event) {
    var x = event.clientX * 65 / window.innerWidth + "%";
    var y = event.clientY * 125 / window.innerHeight + "%";
    //event.clientX => obtener la coordenada horizontal del mouse
    //event.clientY => obtener la coordenada vertical del mouse
    //window.innerWidth => obtener el ancho del navegador
    //window.innerHeight => obtener la altura del navegador

    for (var i = 0; i < 2; i++) {
      balls[i].style.left = x;
      balls[i].style.top = y;
      balls[i].style.transform = "translate(-" + x + ",-" + y + ")";
    }
  }

  const [isAnimating, setIsAnimating] = useState(false)

  return (
    <>
      <motion.div
        className="box-container"
        animate={{ opacity: [0, 1, 1, 1, 1, 0] }}
        transition={isAnimating ? { delay: 0, duration: 8 } : { delay: 4.25, duration: 8 }}
      >
        <motion.h2 className="texto">
          {isAnimating ? "¿Ya viste algunos de mis proyectos?😎" : "Hola! Bienvenido a mi portfolio😁"}
        </motion.h2>
      </motion.div>
      <MotionStack
        h="100%"
        w={{
          base: "0%",
          sm: "0%",
          md: "40%",
          lg: "40%"
        }}
        display={{
          base: "none",
          sm: "none",
          md: "flex",
          lg: "flex"
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={isAnimating ? { delay: 0, duration: 0 } : { delay: 3.2, duration: 0.5 }}
      >
        <div className="face">
          <Image
            src={nahue}
            width={{ md: "430px", lg: "430px" }}
            cursor="pointer"
            onClick={() => { setIsAnimating(true) }}
          />
        </div>
        <div className="eyes">
          <div className="eye1">
            <div className="ball"></div>
          </div>

          <div className="eye2">
            <div className="ball"></div>
          </div>
        </div>
      </MotionStack>
    </>
  )
}

export default MyIcon