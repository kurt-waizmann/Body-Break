import Imgs from "../../src/Imgs/Do-it.png";
import homepage from "../../src/Imgs/Homepage2.png";
import styled from "styled-components";

const Banner = () => {
  return (
    <>
      <BannerImg>
        <Img src={homepage} />
      </BannerImg>
    </>
  );
};

//img div
const BannerImg = styled.div`
  display: flex;
  justify-content: center;
  height: 250px;
  margin-bottom: 0px;
  padding-top: 20px;
`;
//img element
const Img = styled.img`
  border-radius: 4px;
`;
export default Banner;
