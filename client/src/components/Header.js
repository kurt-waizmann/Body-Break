import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { RiShoppingCartFill } from "react-icons/ri";
import { FiActivity } from "react-icons/fi";
import { GiHealthNormal } from "react-icons/gi";
import { FaHiking, FaIcons } from "react-icons/fa";
import { BiGridHorizontal } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { CartConext } from "./CartContext";
import Logo from "../../src/Imgs/Logo.gif";
import { AllItemsContext } from "./AllItemsContext";
import { v4 as uuidv4, v4 } from "uuid";

const Header = () => {
  //Following code is for getting get_Items() functions from CartContext
  const {
    state,
    actions: { get_Items },
  } = useContext(CartConext);
  useEffect(() => {
    get_Items();
  }, []);
  //get items from context
  const { items, setSearchId } = useContext(AllItemsContext);

  const nav = useNavigate();

  // Below code is for adding our value beside our cart icon.
  const qty = state.cardList.reduce((accumulator, curValue) => {
    return accumulator + curValue.qty;
  }, 0);

  //----------------SEARCH BAR CODE ------------------------

  //set value of search input
  const [value, setValue] = useState("");

  // make group for search value
  const [groups, setGroups] = useState([]);

  //create catagories to categorize search results
  const calegorys = [
    "Entertainment",
    "Fitness",
    "Gaming",
    "Industrial",
    "Lifestyle",
    "Medical",
    "Pets and Animals",
  ];

  //group result by category
  useEffect(() => {
    if (searchResults.length > 0) {
      setGroups(
        calegorys.map((category) => {
          return {
            [category]: [
              ...searchResults.filter((item) => item.category === category),
            ],
          };
        })
      );
    }
  }, [value.length]);

  //create searchResults
  const searchResults = items.filter((result, index) => {
    //case insensitive and matches anywhere in word
    return result.name.toLowerCase().includes(value.toLowerCase());
  });

  //SEARCH RESULT FORMATTING-----------------------

  //formats before search value
  const firstHalf = (title) => {
    //find index of where item and searchbar value overlap
    const index = title.toLowerCase().indexOf(value.toLowerCase());
    //slice from beginning of title to the amount of characters typed into the searchbar and return it.
    return title.slice(0, index - 1);
  };
  //formats search value
  const secondHalf = (title) => {
    //find index of where item and searchbar value overlap
    const index = title.toLowerCase().indexOf(value.toLowerCase());
    //slice from overlap point to end of string and return new string
    return title.slice(index, index + value.length);
  };
  //formats search result after search value
  const thirdHalf = (title) => {
    //find index of where item and searchbar value overlap
    const index = title.toLowerCase().indexOf(value.toLowerCase());
    //slice from overlap point to end of string and return new string
    return title.slice(index + value.length);
  };

  //When search result is clicked, navigate to SearchComponent page with product information.
  const handleSelect = (result, _id) => {
    setSearchId(_id);
    setValue("");
    nav("/SearchComponent");
  };

  return (
    <>
      <Wrapper>
        <img src={Logo} style={{ width: "30px", borderRadius: "50%" }} />
        <Company to="/">BodyBreak</Company>
        <Container>
          <SearchBar
            type="text"
            value={value}
            onChange={(ev) => {
              setValue(ev.target.value);
            }}
            onKeyDown={(ev) => {
              if (ev.key === "Escape") {
                setValue("");
              }
            }}
            placeholder="What are you looking for..."
          ></SearchBar>
          <SearchDiv>
            <SearchResults
              style={{ display: value.length < 2 ? "none" : "flex" }}
            >
              {groups.map((group, index) => {
                return (
                  <ul key={v4()}>
                    {Object.keys(group).map((category, index) => {
                      if (group[category].length > 0) {
                        return (
                          <ul key={v4()}>
                            <Category>{category}</Category>
                            {group[category].map((item) => {
                              return (
                                <Result
                                  key={v4()}
                                  onClick={(ev) =>
                                    handleSelect(ev.target.innerText, item._id)
                                  }
                                >
                                  <Span key={firstHalf}>
                                    {firstHalf(item.name)}
                                    <Predictions key={secondHalf}>
                                      {secondHalf(item.name)}
                                    </Predictions>
                                    {thirdHalf(item.name)}
                                  </Span>
                                </Result>
                              );
                            })}
                          </ul>
                        );
                      }
                    })}
                  </ul>
                );
              })}
            </SearchResults>
          </SearchDiv>
        </Container>
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

const Category = styled.span`
  display: flex;
  justify-content: center;
  border-bottom: 2px solid white;
  font-weight: bold;
  padding-bottom: 5px;
`;
const Container = styled.div`
  position: relative;
`;
const Span = styled.span`
  color: white;
`;
const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 800px;
  max-height: 500px;
  overflow: auto;
  border-radius: 4px;
  z-index: 5;
`;
const SearchResults = styled.ul`
  display: flex;
  position: relative;
  flex-direction: column;
  color: white;
  background-color: #313131;
  cursor: pointer;

  border: none;
  width: auto;
  height: auto;
  padding: 10px;
  z-index: 5;
`;
const Result = styled.li`
  display: flex;
  font-size: 14px;
  color: white;
  margin-bottom: 5px;
  padding: 5px;
  &:hover {
    background-color: #8e8b8b;
  }
`;
const Predictions = styled.span`
  color: #80b3c4;
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
