import React from 'react'
import CardsContainer from '../components/CardsContainer'
import Product from '../components/Product'

const AllProducts = ({show,setShow,setProduct,product}) => {
  return (
    <div>
        {show ? (
            <Product
                product={product}
                setShow={setShow}
                setProduct={setProduct}
            />
        ) : (
            
        <CardsContainer
            cantidad={'24'}
              setShow={setShow}
              show={show}
              setProduct={setProduct}
              
              categories={"products"}
              name={"Productos"}
            />
        )}
    </div>
  )
}

export default AllProducts