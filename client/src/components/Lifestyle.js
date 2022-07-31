import styled from "styled-components";
import Header from "./Header";

const Lifestyle = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Title>Lifestyle</Title>
      </Wrapper>
    </>
  );
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

export default Lifestyle;
