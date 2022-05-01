import React from 'react'
import nahue from "../../../assets/nahu.png"
import { Image, Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import "./MeIcon.css"

const MeIcon = () => {

  const MotionStack = motion(Stack)

  var balls = document.getElementsByClassName("ball");
  document.onmousemove = function (event) {
    var x = event.clientX * 65 / window.innerWidth + "%";
    var y = event.clientY * 125 / window.innerHeight + "%";
    //event.clientX => get the horizontal coordinate of the mouse
    //event.clientY => get the Vertical coordinate of the mouse
    //window.innerWidth => get the browser width
    //window.innerHeight => get the browser height

    for (var i = 0; i < 2; i++) {
      balls[i].style.left = x;
      balls[i].style.top = y;
      balls[i].style.transform = "translate(-" + x + ",-" + y + ")";
    }
  }

  return (
    <MotionStack
      h="100%"
      w={{ base: "0%", sm: "0%", md: "40%", lg: "40%" }}
      display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
    >
      <div className="face">
        <Image
          src={nahue}
          width={{ md: "430px", lg: "430px" }}
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
  )
}

export default MeIcon