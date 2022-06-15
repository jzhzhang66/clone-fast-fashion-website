import React, { useState } from "react";
import { Card, Col } from "antd";
import { ClothingCardContainer } from "./ClothingCard.style";

const { Meta } = Card;

const ClothingCard = ({ item }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <ClothingCardContainer>
      <Col span={5}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img src={isHover ? item.stat : item.image} alt="" />}
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
        >
          <Meta title={item.title} />
          {item.price}
        </Card>
      </Col>
    </ClothingCardContainer>
  );
};
export default ClothingCard;
