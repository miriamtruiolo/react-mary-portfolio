import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="http://instagram.com" target="_blank"><BsInstagram/></a>
      <a href="http://linkedin.com" target="_blank"><BsLinkedin/></a>
      <a href="http://facebook.com" target="_blank"><BsFacebook/></a>
    </div>
  );
};

export default HeaderSocials;
