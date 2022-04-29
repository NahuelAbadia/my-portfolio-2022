import React from 'react'
import nahue from "../assets/nahu.png"
import { Image } from '@chakra-ui/react'
import "./MeIcon.css"

const MeIcon = () => {
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
    <>
      <div className="face">
        <Image
          src={nahue}
          width={{ md:"430px",lg:"430px"}}
          // bg="green"
          // position={"relative"}
        
          // w={"86%"}
        // top="230px"

        // top={{ lg: "15%" }}
        // right={{ md: "15px", lg: "19.15%" }}
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
    </>
  )
}

export default MeIcon