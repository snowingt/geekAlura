import React from 'react'
import  StyledComponent  from 'styled-components'

//styled-components
const Input = StyledComponent.input`
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
    background: none;
    
    
    font-size: 1.5rem;
    transition: .9s;
    &:focus{
        width: 300px;
        border-color: #2a7ae4;
    }
`
const Button = StyledComponent.input`
    border: none;
    outline: none;
    height: 60px;
    background: #2a7ae4;
    color: #fff;
    font-size: 1.5rem;
    display: flex;
    place-content: center;
    cursor: pointer;
    transition: .5s;
    margin-top: 10px;
    padding-top: 10px;
    &:hover{
        background: #2980b9;
    }
`
const Form = StyledComponent.form`
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 10px;
`


const Loging = () => {
    const [data, setData] = React.useState({ username: '', password: '' })
    const [error, setError] = React.useState({ username: '', password: '' })
    const [isSubmit, setIsSubmit] = React.useState(false)

   



const handleSubmmit = (e) => {
    e.preventDefault()
    console.log('submit')
   

}
const handleChange = (e) => {
    console.log(e.target.value)

}





  return (
   <div>
  
   
    <div className='w-full loging-container flex flex-col gap-5 place-content-center place-items-center pt-20  '>
        <h1 className='text-4xl pb-5'>Iniciar Sesion</h1>
        <Form className=''>
            <Input onChange={handleChange} type='text' placeholder='Username' className='w-full mb-10 pb-5'/>
            <Input onChange={handleChange} type='password' placeholder='Password' className='w-full mb-10 pb-5'/>
            <Button type='submit' value='Iniciar Sesion' className='w-full mb-10 pb-5' onClick={handleSubmmit} />
        </Form>
    </div>
    </div>
  )
}

export default Loging