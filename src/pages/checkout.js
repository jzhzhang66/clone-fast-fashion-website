import { Row, Button } from "antd";
import * as React from "react";
import Nav from "../components/Nav/Nav";
import GreenButtonDown from "../images/clothing/green-button-down.jpg";
import GreenKnittedSkirt from "../images/clothing/green-knitted-skirt.png";
import Environment1 from "../images/stats/Enviornment-01.png";
import Environment2 from "../images/stats/Enviornment-02.png";
import {
  ItemImage,
  CheckoutContainer,
  CardContainer,
  ClothesContainer,
  Price,
  TotalButtonContainer,
  WastedContainer
} from "../styles/checkout.style";

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
];

const CheckoutPage = () => {
  return (
    <>
      <Nav />
      <CheckoutContainer>
        <ClothesContainer>
          {clothes.map((c) => (
            <CardContainer>
              <ItemImage src={c.image} alt="" />
              <p>{c.price}</p>
              <b>{c.title}</b>
            </CardContainer>
          ))}
        </ClothesContainer>
        <TotalButtonContainer>
          <Price>Total: $44.00 </Price>
          <Button href="/completed-checkout">Confirm Order</Button>
          <WastedContainer>
            <h2>
              Here's how much you're polluting the environment just by shopping Shien:
            </h2>
            <h3>CO2 Wasted: 8 lbs.</h3>
            <h3>Water Wasted: 4 gal.</h3>
          </WastedContainer>
        </TotalButtonContainer>
      </CheckoutContainer>
    </>
  );
};

export default CheckoutPage;
