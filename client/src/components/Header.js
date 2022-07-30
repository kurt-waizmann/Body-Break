import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RiShoppingCartFill } from "react-icons/ri";

const Header = () => {
  const nav = useNavigate();
  return (
    <>
      <Wrapper>
        <HomeButton onClick={() => nav("/")}>Homepage</HomeButton>
        <SearchBar placeholder="Search for..."></SearchBar>
        <SigninButton>Sign-in</SigninButton>
        <IconDiv>
          <RiShoppingCartFill style={{ color: "#66fcf1" }} />
        </IconDiv>
      </Wrapper>
      <Nav>
        <Dropdown>
          <option>All</option>
        </Dropdown>
        <Catagories>Fitness</Catagories>
        <Catagories>Medical</Catagories>
        <Catagories>Lifestyle</Catagories>
        <Catagories>Entertainment</Catagories>
      </Nav>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
`;

const SigninButton = styled.button`
  border-color: #66fcf1;
  background-color: black;
  color: #66fcf1;
  margin-right: 20px;
  border-radius: 5px;
  height: 30px;
  font-weight: bold;
  text-shadow: 0 0 0.125em #66fcf1 hsl(0 0% 100% / 0.3), 0 0 0.35em #66fcf1;
  box-shadow: 0 0 0.5em 0 #66fcf1, inset 0 0 0.5em 0 #66fcf1;
  /* :before {
    pointer-events: none;
    content: "";
    position: absolute;
    background: #66fcf1;
    top: 5%;
    left: 72.4%;
    right: 0;
    height: 20px;
    width: 30px;
    transform: perspective(1em) rotateX(40deg) scale(0.5, 0.6);
    filter: blur(1em);
  } */
  :hover {
    cursor: pointer;
    color: black;
    background-color: #66fcf1;
    transition-timing-function: ease-in-out;
    transition-duration: 600ms;
  }
`;

const HomeButton = styled.button`
  border-color: #66fcf1;
  background-color: black;
  color: #66fcf1;
  border-radius: 5px;
  height: 30px;
  font-weight: bold;
  text-shadow: 0 0 0.125em #66fcf1 hsl(0 0% 100% / 0.3), 0 0 0.35em #66fcf1;
  box-shadow: 0 0 0.5em 0 #66fcf1, inset 0 0 0.5em 0 #66fcf1;
  /* :before {
    pointer-events: none;
    content: "";
    position: absolute;
    background: #66fcf1;
    top: 5%;
    left: 25.2%;
    right: 0;
    height: 20px;
    width: 30px;
    transform: perspective(1em) rotateX(40deg) scale(1, 0.8);
    filter: blur(1em);
  } */
  :hover {
    cursor: pointer;
    color: black;
    background-color: #66fcf1;
    transition-timing-function: ease-in-out;
    transition-duration: 600ms;
  }
`;

const SearchBar = styled.input`
  border-radius: 5px;
  height: 28px;
  width: 800px;
`;

const IconDiv = styled.div`
  cursor: pointer;
`;

const Dropdown = styled.select`
  width: 55px;
  opacity: 0.8;
  cursor: pointer;
  :hover {
    text-shadow: 0 0 0.125em #66fcf1 hsl(0 0% 100% / 0.3), 0 0 0.35em #66fcf1;
    box-shadow: 0 0 0.5em 0 #66fcf1, inset 0 0 0.5em 0 #66fcf1;
    transition-timing-function: ease-in-out;
    transition-duration: 300ms;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  color: white;
`;

const Catagories = styled.div`
  cursor: pointer;
  padding: 10px;
  :hover {
    text-shadow: 0 0 0.125em #66fcf1 hsl(0 0% 100% / 0.3), 0 0 0.35em #66fcf1;
    box-shadow: 0 0 0.5em 0 #66fcf1, inset 0 0 1em 0 #66fcf1;
    transition-timing-function: ease-in-out;
    transition-duration: 600ms;
  }
`;

export default Header;
