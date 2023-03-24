import React from "react";
import Banner from "../components/Banner";
import CardsContainer from "../components/CardsContainer";
import Product from "../components/Product";

const Home = ({ show, setShow,product, setProduct }) => {
 
  return (
    <div>
      <div className="flex justify-center flex-col  place-items-center">
        {show ? (
          <Product
            product={product}
            setShow={setShow}
            setProduct={setProduct}
          />
        ) : (
          <div>
            <Banner />
            <CardsContainer 
            categories={"categories"}
             name={"category"}
              />
            <CardsContainer
            cantidad={'6'}
              setShow={setShow}
              show={show}
              setProduct={setProduct}
              categories={"products"}
              name={"Productos"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
