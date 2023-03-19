import React from 'react'
import styled from 'styled-components'

//styled components
const H1=styled.h1`
font-size: 40px;
font-weight: 600;
color: #ffffff;
`;
const P = styled.p`
font-size: 16px;
font-weight: 400;
color: #ffffff;
`;
const Button = styled.button`

background-color: #2A7AE4;
color:#ffffff ;
font-size: 12px;
width: 120px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;

`;


const Banner = () => {
 
  return (
    <div>
        <div className="banner flex place-items-end pb-10 ">
        <div className="banner__content  ">
          <H1 className="banner__title">Alura Geek</H1>
          <P className="banner__text">Lorem ipsum dolor sit amet consectetur  </P>
          <Button className="banner__button">Comprar</Button>
          </div>

              
               
    </div>
    </div>
  )
}

export default Banner