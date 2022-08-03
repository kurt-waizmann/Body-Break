import React from "react";
import styled from "styled-components";
import { FaAngleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper></Wrapper>
    </>
  );
};
const Wrapper = styled.footer`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 88px;
  /* padding: 80px 0px; */
  background: #030303;
`;

export default Footer;
