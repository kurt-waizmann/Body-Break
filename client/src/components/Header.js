import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { RiShoppingCartFill } from "react-icons/ri";
import { FiActivity } from "react-icons/fi";
import { GiHealthNormal } from "react-icons/gi";
import { FaHiking, FaIcons } from "react-icons/fa";
import { BiGridHorizontal } from "react-icons/bi";

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
        <SearchBar placeholder="What are you looking for..."></SearchBar>
        <Link to="/cart">
          <IconDiv>
            <RiShoppingCartFill style={{ color: "#02A4D3" }} />
          </IconDiv>
        </Link>
        <SigninButton>Sign-in</SigninButton>
      </Wrapper>
      <Nav>
        {/* <Dropdown onChange={(ev) => handleChange(ev.target.value)} required>
          <option value={""} disabled selected hidden>
            All
          </option>
          <option value="/allitems">All Items</option>
          <option value="/allcategories">All Catagories</option>
          <option value="/allbrands">All Brands</option>
        </Dropdown> */}
        <Icon onClick={() => nav("/allitems")}>
          <Categories>All Products </Categories>
          <BiGridHorizontal style={{ marginLeft: "10px" }} />
        </Icon>
        <Icon onClick={() => nav("/fitness")}>
          <Categories>Fitness </Categories>
          <FiActivity style={{ marginLeft: "10px" }} />
        </Icon>
        <Icon onClick={() => nav("/medical")}>
          <Categories>Health and Wellness</Categories>
          <GiHealthNormal style={{ marginLeft: "10px" }} />
        </Icon>
        <Icon onClick={() => nav("/lifestyle")}>
          <Categories>Lifestyle</Categories>
          <FaHiking style={{ marginLeft: "10px" }} />
        </Icon>
        <Icon onClick={() => nav("/entertainment")}>
          <Categories>Entertainment</Categories>
          <FaIcons style={{ marginLeft: "10px" }} />
        </Icon>
      </Nav>
    </>
  );
};

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* margin-right: 10px; */
  cursor: pointer;
  padding: 10px;
  position: relative;
  :after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    border-bottom: 1px solid #02a4d3;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 400ms ease-in-out;
  }
  :hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background: #030303;
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
`;

const SigninButton = styled.button`
  border: 1px solid;
  /* border-color: #04d9ff; */
  border-color: #02a4d3;
  background-color: black;
  color: #04d9ff;
  margin-right: 20px;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  :hover {
    cursor: pointer;
    color: black;
    /* background-color: #04d9ff; */
    background-color: #02a4d3;
    transition-timing-function: ease-in-out;
    transition-duration: 450ms;
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

// const Dropdown = styled.select`
//   /* width: 55px; */
//   opacity: 0.8;
//   cursor: pointer;
//   font-family: "Poppins", sans-serif;
//   font-weight: bold;
//   border: none;
//   background-color: #313131;
//   color: white;
//   :hover {
//     text-shadow: 0 0 0.125em #02a4d3 hsl(0 0% 100% / 0.3), 0 0 0.35em #04d9ff;
//     box-shadow: 0 0 0.5em 0 #02a4d3, inset 0 0 0.5em 0 #04d9ff;
//     transition-timing-function: ease-in-out;
//     transition-duration: 300ms;
//   }
// `;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: #878787;
  background: #141313;
`;

const Categories = styled.div`
  /* cursor: pointer;
  padding: 10px;
  position: relative;
  :after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    border-bottom: 1px solid #04d9ff;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 400ms ease-in-out;
  }
  :hover::after {
    transform: scaleX(1);
    transform-origin: left;
  } */
  /* :hover {
    text-shadow: 0 0 0.125em #04d9ff hsl(0 0% 100% / 0.3), 0 0 0.35em #04d9ff;
    box-shadow: 0 0 0.5em 0 #04d9ff, inset 0 0 1em 0 #04d9ff;
    transition-timing-function: ease-in-out;
    transition-duration: 600ms;
  } */
`;

export default Header;
