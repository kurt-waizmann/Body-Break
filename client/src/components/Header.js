import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { RiShoppingCartFill } from "react-icons/ri";
import { FiActivity } from "react-icons/fi";
import { GiHealthNormal } from "react-icons/gi";
import { FaHiking, FaIcons } from "react-icons/fa";
import { BiGridHorizontal } from "react-icons/bi";
import { useContext, useEffect } from "react";
import { CardConext } from "./CardContext";
import Logo from "../../src/Imgs/Logo.gif";

const Header = () => {
  const {
    state,
    actions: { get_Items },
  } = useContext(CardConext);
  useEffect(() => {
    get_Items();
  }, []);

  const nav = useNavigate();

  const qty = state.cardList.reduce((accumulator, curValue) => {
    return accumulator + curValue.qty;
  }, 0);

  return (
    <>
      <Wrapper>
        <img src={Logo} style={{ width: "30px", borderRadius: "50%" }} />
        <Company to="/">BodyBreak</Company>
        <SearchBar placeholder="What are you looking for..."></SearchBar>
        <CartTxt>
          Cart
          <IconDiv>
            <Link to="/cart">
              <RiShoppingCartFill
                style={{ color: "#02A4D3", fontSize: "23px" }}
              />
              <QuantityBox>{qty}</QuantityBox>
            </Link>
          </IconDiv>
        </CartTxt>
      </Wrapper>
      <Nav>
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
  padding: 0 70px 0 53px;
`;

const Company = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  color: white;
  text-decoration: none;
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
const CartTxt = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;
const IconDiv = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  cursor: pointer;
  color: white;
`;
const QuantityBox = styled.div`
  position: absolute;
  color: white;
  left: 23px;
  bottom: 14px;
  font-size: 12px;
  margin-left: 2px;
`;

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

const Categories = styled.div``;

export default Header;
