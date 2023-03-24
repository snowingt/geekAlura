import React from 'react'

import styled from 'styled-components'

//styled components
const Span=styled.span`
color:#2A7AE4;
font-size: 12px;
font-weight: semi-bold;
&:hover{
    cursor:pointer;
    text-decoration: underline;
}
`;
const H3=styled.h3`
font-size: 12px;
font-weight: 500;
color: #9d9d9c;
text-align: center;
`;

const Img=styled.img`
width: 200px;
height: 200px;
`;

const CardsCategory = ({name,image,id}) => {
  return (
    <div className='card'>
        <Img src={image} alt="imagen"/>
      <div className='h-9  '>
        <H3>{name}</H3>

      </div>
      <div>

      </div>
        <Span>ver categorias</Span>
       
        

    </div>
  )
}


export default CardsCategory