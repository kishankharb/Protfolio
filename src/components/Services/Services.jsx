import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Latest from './latest.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>
        In addition to my experience with the MERN stack,
        <br />

         I am also proficient in React Native and have developed several mobile
         <br />

  apps using this framework. 
         <br />

         {/* I am also well-versed in React.js and have used it to build interactive and responsive user interfaces for web applications. */}
        </span>
        <a href={Latest} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "5rem" }}
          // whileInView={{ left: "14rem" }}
          // transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Fronted"}
            detail={"Html, Css, JavaScript, React"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          // initial={{ left: "-11rem", top: "12rem" }}
          // whileInView={{ left: "-4rem" }}
          // transition={transition}
          initial={{ left: "20rem" ,top:"20rem" }}
          // whileInView={{ left: "14rem" }}
          // transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Full Stack Developer"}
            detail={" React.js , Nodejs, Express , MongoDB"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          // initial={{ top: "19rem", left: "25rem" }}
          // whileInView={{ left: "12rem" }}
          // transition={transition}
          initial={{ left: "20rem"}}
          // whileInView={{ left: "14rem" }}
          // transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Blockchain Developer"}
            detail={
              "Bitcoin , Ethereum Blockchain and Cryptography and Cryptocurrency"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
