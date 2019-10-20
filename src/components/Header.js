import React from 'react'
import window_logo from '../components/window_logo.png'
import styled from 'styled-components';
import '../App.css'

export default function Header(props) {
    return (
        <NavHeader>
            <LogoBox onClick={props.popnav} >
                <Logo alt="window" src={window_logo}></Logo>
                <span className="header-title">Tower Window</span>
            </LogoBox>
        </NavHeader>
    )
}


const NavHeader = styled.nav`
    height: 100px;
    width: 100vw;
    box-sizing: border-box;
    background-color: whitesmoke;
`;

const Logo = styled.img`
    height: 80px;
    width: auto;
`;

const LogoBox = styled.div`
    width: 250px;
    height: inherit;
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 2rem;
`;