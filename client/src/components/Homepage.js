import styled from "styled-components";
import Header from "./Header";

const Homepage = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Header />
          <div style={{ color: "white" }}>Homepage</div>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: #1c1b1b;
`;

const Wrapper = styled.div``;

export default Homepage;
