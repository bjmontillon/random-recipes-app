import React from 'react';
import styled from 'styled-components';


const Nav = styled.nav  `
    background-color: #fff8f8;
    width: 100%;
    display: grid;
    place-items: center;
    height: 63px;
    border-radius: 0 0 10px 10px;
    `
const HeaderTitle = styled.h1 `
    font-size: 2rem;
    font-family: 'Style Script', cursive;
`

function Header() {
    return (
        <Nav className='header'>
            <HeaderTitle className='header-title'>Random Recipe</HeaderTitle>
        </Nav>
    )
}

export default Header