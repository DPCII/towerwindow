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
            <UserNavBox>
                <span className="nav-buttons">Home</span>
                <span className="nav-buttons">User</span>
            </UserNavBox>
        </NavHeader>
    )
}


const NavHeader = styled.nav`
    height: 72px;
    width: 100vw;
    background-color: whitesmoke;
    box-shadow: .5px .1px 5px .1px gray;
    margin-bottom: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.img`
    height: 66px;
    width: auto;
`;

const LogoBox = styled.div`
    width: 235px;
    height: inherit;
    margin-left: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const UserNavBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 40px 0 10px;
    height: 30px;
    width: 170px;
    margin-left: auto;
`;