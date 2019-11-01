import React from 'react'
import window_logo from '../images/window_logo.png'
import styled from 'styled-components';
import { Button } from '@blueprintjs/core';
import '../App.css'

// Because views are currently based on videos and whether or not the video player state is empty, the home button just empties the video player state to return us home. This will need refactoring with a proper state manager and router.

export default function Header(props) {
    return (
        <NavHeader>
            <LogoBox onClick={props.popnav} >
                <Logo alt="window" src={window_logo}></Logo>
                <HeaderTitle>Tower Window</HeaderTitle>
            </LogoBox>
            <UserNavBox>
                <Button className="bp3-button" type="button" onClick={() => props.sendSelection('', '')}>Home</Button>
                <Button className="bp3-button" type="button">User</Button>
            </UserNavBox>
        </NavHeader>


    )
}


const NavHeader = styled.nav`
    height: 57px;
    max-width: 100vw;
    background-color: whitesmoke;
    box-shadow: .5px .1px 5px .1px gray;
    margin-bottom: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.img`
    height: 55px;
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
    width: 235px;
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
    width: 110px;
    margin-left: auto;
`;

// const Button = styled.div`
//     font-family: 'Noto Sans', sans-serif;
//     font-weight: 500;
//     height: 25px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 8px;
//     text-transform: uppercase;
//     background-color: inherit;
//     border-radius: 2px;

//     &:hover {
//         background-color: gainsboro;
//         cursor: pointer;
//     }
// `;

const HeaderTitle = styled.span`
    font-size: 1.5rem;
    /* font-family: 'Noto Sans', sans-serif; */
    font-weight: 400;
    padding: 8px;
    background-color: inherit;
    border-radius: 2px;

    &:hover {
        background-color: rgb(240,240,240);
        cursor: pointer;
    }
    
`;