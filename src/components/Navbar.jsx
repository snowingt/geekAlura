import React from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";


//styles
const Butoon = styled.button`
  border: 1px solid #2a7ae4;
  background-color: #ffffff;
  color: #2a7ae4;
  font-size: 12px;
  width: 155px;
  height: 45px;
  margin-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  border: none;
  background-color: #f5f5f5;

  font-size: 1rem;
  width: 200px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  padding-left: 20px;
  transition: 0.3s;
  &::placeholder {
    color: #c1c1c1;
    font-size: 12px;
  }

  cursor: pointer;
  outline: none;
  &::placeholder {
    color: rgb(156 163 175);
  }
`;

// endstyles

const Navbar = ({ setShow}) => {
  const handleShow = () => {
    setShow(false);
  };
  return (
    <div>
      <header className="w-full flex  ">
       

        <nav className="w-5/6 nav--menu flex  flex-wrap justify-between ">
          <div className="flex  menu--logo justify-between ">
            <Link to="/">

            <img onClick={handleShow} className="logo" src={logo} alt="Alura geek" />
            </Link>
            <div className="flex justify-center w-30  items-center self-center  pr-10">
              <Input type="text" placeholder="Que deseas comprar?" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div>
            <Link to="/login">
            <Butoon>Login</Butoon>
            </Link>
          </div>
        </nav>
       
      </header>
    </div>
  );
};

export default Navbar;
