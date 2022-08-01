import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { RiShoppingCartFill } from "react-icons/ri";
import { useContext } from "react";
import { AllItemsContext } from "./AllItemsContext";

const Header = () => {
  // const { setDropdownSelection } = useContext(AllItemsContext);
  const nav = useNavigate();
  // Handler for our Dropdown/select
  const handleChange = (value) => {
    nav(value);
  };

  return (
    <>
      <Wrapper>
        <Company to="/">BodyBreak</Company>
        {/* <HomeButton onClick={() => nav("/")}>Homepage</HomeButton> */}
        <SearchBar placeholder="Search for..."></SearchBar>
        <IconDiv>
          <RiShoppingCartFill style={{ color: "#04d9ff" }} />
        </IconDiv>
        <SigninButton>Sign-in</SigninButton>
      </Wrapper>
      <Nav>
        <Dropdown onChange={(ev) => handleChange(ev.target.value)} required>
          <option value={""} disabled selected hidden>
            All
          </option>
          <option value="/allitems">All Items</option>
          <option value="/allcategories">All Catagories</option>
          <option value="/allbrands">All Brands</option>
        </Dropdown>
        <Categories onClick={() => nav("/fitness")}>Fitness</Categories>
        <Categories onClick={() => nav("/medical")}>Medical</Categories>
        <Categories onClick={() => nav("/lifestyle")}>Lifestyle</Categories>
        <Categories onClick={() => nav("/entertainment")}>
          Entertainment
        </Categories>
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
  height: 50px;
  padding: 0 70px 0 70px;
`;

const Company = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  color: white;
  text-decoration: none;
`

const SigninButton = styled.button`
  border: 1px solid;
  border-color: #04d9ff;
  background-color: black;
  color: #04d9ff;
  margin-right: 20px;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  font-weight: bold;
  /* text-shadow: 0 0 0.125em #04d9ff hsl(0 0% 100% / 0.3), 0 0 0.35em #04d9ff;
  box-shadow: 0 0 0.5em 0 #04d9ff, inset 0 0 0.5em 0 #04d9ff; */
  font-family: "Poppins", sans-serif;
  :before {
    pointer-events: none;
    content: "";
    position: absolute;
    background: #04d9ff;
    top: 15%;
    left: 72%;
    right: 0;
    height: 20px;
    width: 30px;
    transform: perspective(1em) rotateX(40deg) scale(0.5, 0.6);
    filter: blur(1em);
  }
  :hover {
    cursor: pointer;
    color: black;
    background-color: #04d9ff;
    transition-timing-function: ease-in-out;
    transition-duration: 400ms;
  }
`;

const HomeButton = styled.button`
  border: 1px solid;
  border-color: #04d9ff;
  background-color: black;
  color: #04d9ff;
  border-radius: 5px;
  height: 30px;
  font-weight: bold;
  /* text-shadow: 0 0 0.125em #04d9ff hsl(0 0% 100% / 0.3), 0 0 0.35em #04d9ff;
  box-shadow: 0 0 0.5em 0 #04d9ff, inset 0 0 0.5em 0 #04d9ff; */
  font-family: "Poppins", sans-serif;
  :before {
    pointer-events: none;
    content: "";
    position: absolute;
    background: #04d9ff;
    top: 15%;
    left: 24.8%;
    right: 0;
    height: 20px;
    width: 30px;
    transform: perspective(1em) rotateX(40deg) scale(0.5, 0.6);
    filter: blur(1em);
  }
  :hover {
    cursor: pointer;
    color: black;
    background-color: #04d9ff;
    transition-timing-function: ease-in-out;
    transition-duration: 600ms;
  }
`;

const SearchBar = styled.input`
  border: none;
  border-radius: 5px;
  height: 28px;
  width: 800px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  background-color: #313131;
  color: white;
  padding-left: 15px;
`;

const IconDiv = styled.div`
  cursor: pointer;
`;

const Dropdown = styled.select`
  /* width: 55px; */
  opacity: 0.8;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  border: none;
  background-color: #313131;
  color: white;
  :hover {
    text-shadow: 0 0 0.125em #04d9ff hsl(0 0% 100% / 0.3), 0 0 0.35em #04d9ff;
    box-shadow: 0 0 0.5em 0 #04d9ff, inset 0 0 0.5em 0 #04d9ff;
    transition-timing-function: ease-in-out;
    transition-duration: 300ms;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: #878787;
`;

const Categories = styled.div`
  cursor: pointer;
  padding: 10px;
  :hover {
    text-shadow: 0 0 0.125em #04d9ff hsl(0 0% 100% / 0.3), 0 0 0.35em #04d9ff;
    box-shadow: 0 0 0.5em 0 #04d9ff, inset 0 0 1em 0 #04d9ff;
    transition-timing-function: ease-in-out;
    transition-duration: 600ms;
  }
`;

export default Header;
