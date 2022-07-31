import Header from "./Header";
import styled from "styled-components";

const AllBrands = () => {
  return (
    <>
    <Wrapper>
      <Header />
      <Title>All Brands</Title>
      <Container>
        {/* {items.map((item, key) => {
          return (
            <ProductComponent />
          )
        })} */}
      </Container>
    </Wrapper>
  </>
  )
};
const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  background-color: #1c1b1b;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  color: #04d9ff;
  font-size: x-large;
  padding: 30px;
  text-decoration: underline;
`;
const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  gap: 50px;
  color: white;
`;
export default AllBrands;
