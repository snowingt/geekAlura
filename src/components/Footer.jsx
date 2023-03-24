import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'

//styled components
const Div = styled.div`
  
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 300px;
    background-color:#eaf2fc;
    margin-bottom: 1rem;
`

const Footer = () => {
  return (
    <Div className='grid grid-cols-4 content pt-12 pl-32'>
        <div className="logo place-self-start">
            <img src={logo} alt="logo" />
        </div>
        <div className="about flex flex-col place-self-start gap-3">
            <h3>Quienes somos</h3>
            <h3>Politica de privacidad</h3>
            <h3>Nuestras tiendas</h3>
            <h3>Programa de fidelidad</h3>
            <h3>Quiero ser franquiciado</h3>
            <h3>Anuncie aqui</h3>
            
        </div>
        <div className="contac flex flex-col  place-self-start gap-3">
            <h3>Contáctanos</h3>
            <form className='flex flex-col gap-4'>
                <input className='w-100 ' type="text" placeholder="Nombre" />
                <textarea name="" id="" cols="30" rows="5" placeholder="Mensaje"></textarea>
                <input type="submit" placeholder='enviar mensaje' />
            </form>
        </div>
    </Div>
  )
}

export default Footer