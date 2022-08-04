import medical from "../../src/Imgs/Medical.png";
import lifestyle from "../../src/Imgs/Lifestyle.png";
import fitness from "../../src/Imgs/Fitness.png";
import entertainment from "../../src/Imgs/Entertainment.png";
import allitems from "../../src/Imgs/All-Items.png";
import styled from "styled-components";

const CategoryBanner = ({ category }) => {
  //check props for correct params from CategoryComponent and render correct banner image.
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
  } else if (category === "allitems") {
    return (
      <>
        <BannerImg>
          <Img src={allitems} />
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
  padding-top: 20px;
`;

const Img = styled.img`
  border-radius: 4px;
`;
export default CategoryBanner;
