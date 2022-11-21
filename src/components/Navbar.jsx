import React from 'react';
import styled from 'styled-components';
import CartWidget from './CartWidget';

const Navbar = ({ inInHeader }) => {

    return (
      <>
        <NavContainer>
          <h2>Tienda <span>Happy Belly</span></h2>
          <div>
            <a href="/">Inicio</a>
            <a href="/">Productos</a>
            <a href="/">Nosotros</a>
          </div>         
          <CartWidget/>  
        </NavContainer>
        
      </>
    );
  };
  
  export default Navbar

const NavContainer = styled.nav`
  h2{
      color: white;
      font-weight: 400;
      span{
        font-weight: bold;
        }
    }
    padding: 15px;
    background-color: pink;
    display: flex;
    align-items: center;
    justify-content: space-between;

  a{
    color: white;
    text-decoration: none;
    margin: 15px;
    font-weight: bold;
    font-size: 20px;    
  }
  `