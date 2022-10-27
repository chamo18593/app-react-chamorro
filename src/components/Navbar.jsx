import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Navbar = (props) => {

    return (
      <>
        <NavContainer>
          <h2>Tienda <span>Happy Belly</span></h2>
          <div>
            <a href="/">Inicio</a>
            <a href="/">Nosotros</a>
            <a href="/">Contacto</a>            
          </div>
          <Button text="Ingresá"/>
        </NavContainer>
      </>
    )
  };
  
  export default Navbar

const NavContainer = styled.nav`
    h2{
        color: white;
        font-weight: 400;        
    }
    padding: .4rem;
    background-color: violet;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        color: white;
        text-decoration: none;
        margin-right: 1rem;  
    }
  `