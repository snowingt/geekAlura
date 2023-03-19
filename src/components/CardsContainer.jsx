import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Cards from "./Cards";
import CardsCategory from "./CardsCategory";

// styled components
const Heeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 81%;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  padding-left: 10px;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10 px;
`;

const Link = styled.a`
  color: #2a7ae4;
  font-weight: semi-bold;
  font-size: 14px;
  margin-left: 1rem;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const CardsContainer = ({ categories, name, setProduct, show, setShow }) => {
  const [cards, setCards] = useState([]);

  //get api
  useEffect(() => {
    async function fetchData(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        return data;
      } catch (error) {
      } finally {
      }
    }

    async function getData() {
      const API = `https://api.escuelajs.co/api/v1/${categories}`;
      const data = await fetchData(API);

      setCards(data);
    }

    getData();
  }, []);

  return (
    <div className="w-full pb-4 flex flex-col pt-8 pr-10  place-items-center">
      <Heeader>
        <Title>{name}</Title>
        <LinkContainer>
          <Link>Ver todo</Link>
        </LinkContainer>
      </Heeader>

      {cards ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6  gap-3 w-5/6 ">
          {categories === "products"
            ? cards
                .slice(0, 6)
                .map(({ title, id, category, price, description }) => (
                  <Cards
                    key={id}
                    title={title}
                    price={price}
                    category={category}
                    id={id}
                    description={description}
                    setProduct={setProduct}
                    show={show}
                    setShow={setShow}
                  />
                ))
            : cards
                .slice(0, 6)
                .map(({ name, id, image }) => (
                  <CardsCategory key={id} name={name} image={image} id={id} />
                ))}
        </div>
      ) : (
        <h1>Cargando datos...</h1>
      )}
    </div>
  );
};

export default CardsContainer;
