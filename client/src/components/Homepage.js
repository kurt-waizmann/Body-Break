import styled from "styled-components";
import Header from "./Header";
import Banner from "./Banner";

const Homepage = () => {
  
  return (
    <>
      <Container>
        <Wrapper>
          <Header />
          <Title>BodyBreak</Title>
          <Banner />
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: #1c1b1b;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
`;

const Wrapper = styled.div``;

const Title = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  /* color: #66fcf1; */
  color: #04d9ff;
  font-size: x-large;
  padding: 30px;
`;

export default Homepage;
