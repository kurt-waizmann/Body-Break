import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { RiShoppingCartFill } from "react-icons/ri";
import { FiActivity } from "react-icons/fi";
import { GiHealthNormal } from "react-icons/gi";
import { FaHiking, FaIcons } from "react-icons/fa";
import { BiGridHorizontal } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { CardConext } from "./CardContext";
import Logo from "../../src/Imgs/Logo.gif";
import { AllItemsContext } from "./AllItemsContext";
import { v4 as uuidv4, v4 } from "uuid";

const Header = () => {
  const {
    state,
    actions: { get_Items },
  } = useContext(CardConext);
  useEffect(() => {
    get_Items();
  }, []);

  const nav = useNavigate();
  // Handler for our Dropdown/select

  const qty = state.cardList.reduce((accumulator, curValue) => {
    return accumulator + curValue.qty;
  }, 0);

  const handleChange = (value) => {
    nav(value);
  };

  //get items from context
  const { items, setSearchId } = useContext(AllItemsContext);
  //set value of search input
  const [value, setValue] = useState("");
  console.log(value);
  //create searchResults
  const searchResults = items.filter((result, index) => {
    // console.log("index", index);
    //case insensitive and matches anywhere in word
    return result.name.toLowerCase().includes(value.toLowerCase());
  });
  //Create first half of search suggestion
  const firstHalf = (title) => {
    //find index of where suggestion and searchbar value overlap
    const index = title.toLowerCase().indexOf(value.toLowerCase());
    //slice from beginning of title to the amount of characters typed into the searchbar and return it.
    return title.slice(0, index + value.length);
  };
  //Second half of search suggestion
  const secondHalf = (title) => {
    //find index of where suggestion and searchbar value overlap
    const index = title.toLowerCase().indexOf(value.toLowerCase());
    //slice from overlap point to end of string and return new string
    return title.slice(index + value.length);
  };
  const handleSelect = (result, _id) => {
    setSearchId(_id);
    nav("/SearchComponent");
  };
  return (
    <>
      <Wrapper>
        <img src={Logo} style={{ width: "30px", borderRadius: "50%" }} />
        <Company to="/">BodyBreak</Company>
        <SearchDiv>
          <SearchBar
            type="text"
            value={value}
            onChange={(ev) => {
              setValue(ev.target.value);
            }}
            onKeyDown={(ev) => {
              if (ev.key === "Enter") {
                setValue("");
              }
            }}
            placeholder="What are you looking for..."
          ></SearchBar>
          <SearchResults
            style={{ display: value.length < 2 ? "none" : "flex" }}
          >
            {searchResults.map((item, index) => {
              console.log("item", item);
              return (
                <Result
                  key={v4()}
                  onClick={(ev) => handleSelect(ev.target.innerText, item._id)}
                >
                  <span key={firstHalf}>
                    {firstHalf(item.name)}
                    <Predictions key={secondHalf}>
                      {secondHalf(item.name)}
                    </Predictions>
                    {/* <em> in</em>  */}
                    {/* <Catagory key={categories[catId].name}>
                    {" "}
                    {categories[catId].name}
                  </Catagory>  */}
                  </span>
                </Result>
              );
            })}
          </SearchResults>
        </SearchDiv>
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
        {/* <SigninButton>Sign-in</SigninButton> */}
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
const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const SearchResults = styled.ul`
  display: flex;
  position: relative;
  flex-direction: column;
  color: white;
  background-color: #313131;
  margin: 0px 0px;
  border: none;
  /* box-shadow: 0px 2px 8px 3px #d1d1d1; */
  width: auto;
  height: 300px;
  margin-top: 250px;
  /* margin-left: 31.5%; */
  padding: 10px;
  z-index: 10;
`;
const Result = styled.li`
  display: flex;
  /* overflow: hidden; */
  font-size: 14px;
  color: white;
  margin-bottom: 5px;
  padding: 5px;
  &:hover {
    background-color: #8e8b8b;
  }
`;
const Predictions = styled.span`
  font-weight: bold;
`;
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

const SigninButton = styled.button`
  border: 1px solid;
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
  /* width:150px; */
  /* font-size: 20px; */
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

const Categories = styled.div``;

export default Header;
