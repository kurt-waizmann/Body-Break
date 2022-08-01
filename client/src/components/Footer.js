import React from "react";
import styled from "styled-components";
import { FaAngleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <TopBox></TopBox>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.footer`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 200px;
  /* padding: 80px 0px; */
  background: #191818;
`;
const TopBox = styled.div`
  background: #1c1b1b;
  color: white;
  width: 100%;
  height: 50px;
`;

export default Footer;
