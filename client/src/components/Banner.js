import Imgs from "../../src/Imgs/Do-it.png";
import styled from "styled-components";

const Banner = () => {
  return (
    <>
      <BannerImg>
        <Img src={Imgs} />
      </BannerImg>
    </>
  );
};

const BannerImg = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 120px;
`;

const Img = styled.img`
  border-radius: 4px;
`;
export default Banner;
