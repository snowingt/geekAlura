import React from "react";
import styled from "styled-components";
//styled components
const H1 = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #222222;
`;
const H2 = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #222222;
`;
const P = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #222222;
`;
const Img = styled.img`
  width: 500px;
  height: 400px;
`;

const Product = ({ product, setShow }) => {
  //destructuring de product
  const { title, price, image, id, description } = product;

  const handleShow = () => {
    setShow(false);
  };

  return (
    <div className="container max-w-6xl mx-auto pb-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-20">
      <div className="text-center">
        <Img src={image} alt="" />
      </div>
      <div className="ml-5 flex flex-col justify-center">
        <div className="flex  gap-5 ">
          <H1>{title}</H1>
        </div>
        <H2 className="mt-3">$ {price}</H2>
        <P className="mt-3">{description}</P>
        <button onClick={handleShow} className="mt-5">cerrar</button>
      </div>
    </div>
  </div>
  );
};

export default Product;
