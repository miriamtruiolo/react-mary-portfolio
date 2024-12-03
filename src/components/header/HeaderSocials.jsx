import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="" target="_blank" rel="noopener noreferrer"><BsInstagram style={{ color: 'var(--color-dark)' }} /></a>
      <a href="" target="_blank" rel="noopener noreferrer"><BsLinkedin style={{ color: 'var(--color-dark)' }} /></a>
      <a href="" target="_blank" rel="noopener noreferrer"><BsFacebook style={{ color: 'var(--color-dark)' }} /></a>
    </div>
  );
};

export default HeaderSocials;
