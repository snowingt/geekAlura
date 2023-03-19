import React from "react";
import styled from "styled-components";

//styled components
const Span = styled.span`
  color: #2a7ae4;
  font-size: 16px;
  font-weight: semi-bold;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const H3 = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #9d9d9c;
  text-align: center;
`;
const P = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #222222;
`;
const Img = styled.img`
  width: 200px;
  height: 150px;
`;

const Cards = ({
  title,
  price,
  category,
  id,
  description,
  setProduct,
  setShow,
  show,
}) => {
  const handleProduct = () => {
    setProduct({
      title: title,
      price: price,
      image: category.image,
      id: id,
      description: description,
    });
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <div>
      <div className="card">
        <div>
          <Img src={category.image} alt="imagen" />
        </div>
        <div className="card-title ">
          <H3>{title}</H3>
        </div>
        <div>
          <P>{price}$</P>
        </div>
        <Span onClick={handleProduct}>ver producto</Span>
      </div>
    </div>
  );
};

export default Cards;
