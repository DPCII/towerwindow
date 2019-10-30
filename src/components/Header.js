import React from 'react'
import window_logo from '../components/window_logo.png'
import styled from 'styled-components';
import '../App.css'

export default function Header(props) {
    return (
        <NavHeader>
            <LogoBox onClick={props.popnav} >
                <Logo alt="window" src={window_logo}></Logo>
                <HeaderTitle>Tower Window</HeaderTitle>
            </LogoBox>
            <UserNavBox>
                <Button>Home</Button>
                <Button>User</Button>
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
    position: relative;
    transform-origin: center right;
    transform-style: preserve-3d;
    border-radius: 1px;
    transform: perspective(400px) rotateY(0deg);

    transition: transform .4s;  
    &:hover {
        transform: perspective(400px) rotateY(22deg);
    }
`;

const LogoBox = styled.div`
    width: 255px;
    padding: 0px 5px;
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

const Button = styled.div`
    font-family: 'Noto Sans', sans-serif;
    font-weight: 500;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    text-transform: uppercase;
    background-color: inherit;
    border-radius: 2px;

    &:hover {
        background-color: gainsboro;
        cursor: pointer;
    }
`;

const HeaderTitle = styled.span`
    font-size: 1.5rem;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    padding: 8px;
    background-color: inherit;
    border-radius: 2px;

    &:hover {
        background-color: gainsboro;
        cursor: pointer;
    }
    
`;