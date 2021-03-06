import React, { useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { AnchorButton, Button, ButtonGroup } from '@blueprintjs/core';
import SubjectTab from './SubjectTab';
import ResearchTab from './ResearchTab';
import '../App.css'

export default function SearchMenu(props) {
    const [input, setInput] = useState('')
    const [backendRes, setBackendRes] = useState([])
    
    const handleSubmit = (evt) => {
        evt.preventDefault()
        axios.get(`https://towerwindowheroku.herokuapp.com/?q=${input}`)
        .then(result => setBackendRes([...result.data]))
        // .then(() => console.log({backendRes}))
        // .then(res => console.log(res.data))
    }

    const [menuView, setMenuView] = useState(0)

    const handleSearchTabs = (tab) => {
        if(tab === 0) {
            setMenuView(0)
        } else if(tab === 1) {
            setMenuView(1)
        } else if(tab === 2) {
            setMenuView(2)
        }
    }


    function renderSearchMenu() {
        if(menuView === 0) {
        return  <div className="search-tab"> {/* This is the Search view*/}
                        <form onSubmit={handleSubmit}>
                            <input type="search"
                            placeholder="Search for content by keywords..."
                            className="search-input"
                            onChange={(evt)=>setInput(evt.target.value)}
                            ></input>
                        </form>
                        <div className="search-results">
                            {
                                !backendRes.length > 0 ?
                                (
                                    // <h3>Search results will show here</h3>
                                    null
                                )
                                :
                                (
                                    backendRes.map((el, index) => {
                                    return <EachResultContainer key={index} onClick={() => {props.sendSelection(el.resId, el.vid_player)}}> 
                                                <h4>{el.title}</h4>
                                                <hr width="100%" />
                                                <EachResultContent >
                                                    <img alt={el.title} src={`http://img.youtube.com/vi/${el.resId}/0.jpg`} height="220"/>
                                                    <EachResultDescription>{el.description}</EachResultDescription> 
                                                </EachResultContent>
                                            </EachResultContainer>
                                        }
                                    )
                                )
                            }
                        </div>
                </div> // Above is the Search view
        } else if(menuView === 1) {
            return <SubjectTab />
        } else if(menuView === 2) {
            return <ResearchTab />
        }
    }




        // Here we need to render three or more views: Search, Subjects, and Research
        // We can create a tab component to switch view state

    return (

        <div className="navmenu">
            <ButtonGroup fill={true} large={true} style={buttonsStyle}>
                <Button onClick={() => handleSearchTabs(0)}>Search</Button>
                <Button onClick={() => handleSearchTabs(1)}>Subjects</Button>
                <AnchorButton onClick={() => handleSearchTabs(2)}>Research</AnchorButton>
            </ButtonGroup>
            {/* <SearchMenuTabs>
                <span className="menu-tab" onClick={() => handleSearchTabs(0)}>Search</span>
                <span className="menu-tab" onClick={() => handleSearchTabs(1)}>Subjects</span>
                <span className="menu-tab" onClick={() => handleSearchTabs(2)}>Research</span>
            </SearchMenuTabs> */}
        {renderSearchMenu()}

        </div>
        
    )
}

const buttonsStyle = {
    width: "60%",
}

const EachResultContainer = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border-bottom: 8px solid white;
`;

const EachResultContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
`;

const EachResultDescription = styled.p`
    padding: 2rem;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.1rem;
`;

const SearchMenuTabs = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    top: 30px;
`;
