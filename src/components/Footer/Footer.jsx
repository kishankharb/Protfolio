import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
// import {  Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>kishanplayer920@gmail.com</span>
        <div className="f-icons">
        {/* <Link to="https://github.com/kishankharb">
          <img src={Github} alt="" />
          </Link>
          <Link to="https://www.linkedin.com/in/kishan-kharb-38776923b/">
          <img src={LinkedIn} alt="" />
            </Link>
            <Link to="https://www.instagram.com/kishanplayer920/">
            <img src={Instagram} alt="" />
            </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
