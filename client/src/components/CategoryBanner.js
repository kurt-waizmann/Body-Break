import Imgs from "../../src/Imgs/Do-it.png";
import medical from "../../src/Imgs/Medical.png";
import lifestyle from "../../src/Imgs/Lifestyle.png";
import fitness from "../../src/Imgs/Fitness.png";
import entertainment from "../../src/Imgs/Entertainment.png";
import styled from "styled-components";

const CategoryBanner = ({ category }) => {
  console.log("category", category);
  if (category === "medical") {
    return (
      <>
        <BannerImg>
          <Img src={medical} />
        </BannerImg>
      </>
    );
  } else if (category === "lifestyle") {
    return (
      <>
        <BannerImg>
          <Img src={lifestyle} />
        </BannerImg>
      </>
    );
  } else if (category === "fitness") {
    return (
      <>
        <BannerImg>
          <Img src={fitness} />
        </BannerImg>
      </>
    );
  } else if (category === "entertainment") {
    return (
      <>
        <BannerImg>
          <Img src={entertainment} />
        </BannerImg>
      </>
    );
  }
};

const BannerImg = styled.div`
  display: flex;
  justify-content: center;
  height: 250px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Img = styled.img`
  border-radius: 4px;
`;
export default CategoryBanner;
