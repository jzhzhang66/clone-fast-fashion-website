import * as React from "react";
import Nav from "../components/Nav/Nav";
import "antd/dist/antd.css";
import ClothingCard from "../components/ClothingCard/ClothingCard";
import { ShienLogoStyled } from "../styles/clothing.style";
import ShienLogo from "../images/shienLogo.png";
import GreenButtonDown from "../images/clothing/green-button-down.jpg";
import GreenKnittedSkirt from "../images/clothing/green-knitted-skirt.png";
import GriddedTwoPieceSet from "../images/clothing/gridded-two-piece-set.jpg";
import MomJeans from "../images/clothing/mom-jeans.jpg";
import PatternedSweaterSet from "../images/clothing/patterned-sweater-set.jpg";
import SparklyPinkCropTop from "../images/clothing/sparkly-pink-crop-top.jpg";
import TieDyeMiniDress from "../images/clothing/tie-dye-mini-dress.jpg";
import WhiteFloralTop from "../images/clothing/white-floral-top.jpg";
import Environment1 from "../images/stats/Enviornment-01.png";
import Environment2 from "../images/stats/Enviornment-02.png";
import Environment3 from "../images/stats/Enviornment-03.png";
import Environment4 from "../images/stats/Enviornment-04.png";
import Environment5 from "../images/stats/Enviornment-05.png";
import Environment6 from "../images/stats/Enviornment-06.png";
import Environment7 from "../images/stats/Enviornment-07.png";
import Environment8 from "../images/stats/Enviornment-08.png";

import { Row, Col } from "antd";

const clothes = [
  {
    image: GreenButtonDown,
    title: "Green Button Down",
    price: "$20",
    stat: Environment1,
  },
  {
    image: GreenKnittedSkirt,
    title: "Green Knitted Skirt",
    price: "$22",
    stat: Environment2,
  },
  {
    image: GriddedTwoPieceSet,
    title: "Gridded Two Piece Set",
    price: "$31",
    stat: Environment3,
  },
  { image: MomJeans, title: "Mom Jeans", price: "$29", stat: Environment4 },
  {
    image: PatternedSweaterSet,
    title: "Patterned Sweater Set",
    price: "$28",
    stat: Environment5,
  },
  {
    image: SparklyPinkCropTop,
    title: "Sparkly Pink Crop Top",
    price: "$14",
    stat: Environment6,
  },
  {
    image: TieDyeMiniDress,
    title: "Tie Dye Mini Dress",
    price: "$19",
    stat: Environment7,
  },
  {
    image: WhiteFloralTop,
    title: "White Floral Top",
    price: "$15",
    stat: Environment8,
  },
];

const IndexPage = () => {
  return (
    <>
      <Nav />
      <ShienLogoStyled src={ShienLogo} />
      <Row gutter={16}>
        {clothes.map((c) => (
          <ClothingCard item={c} />
        ))}
      </Row>
    </>
  );
};

export default IndexPage;
