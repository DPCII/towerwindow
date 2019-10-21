import React, { useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import '../App.css'

export default function SearchMenu(props) {
    const [input, setInput] = useState('')
    const [backendRes, setBackendRes] = useState([])
    
    const handleSubmit = (evt) => {
        evt.preventDefault()
        axios.get(`http://localhost:8000/?q=${input}`)
        .then(result => setBackendRes([...result.data]))
        // .then(() => console.log({backendRes}))
        // .then(res => console.log(res.data))
    }


    return (
        <div className="navmenu">
            <form onSubmit={handleSubmit}>
                <input 
                placeholder="Search for content by keywords..."
                className="search-input"
                onChange={(evt)=>setInput(evt.target.value)}
                ></input>
            </form>
            <div className="search-results">
                {
                    !backendRes.length > 0 ?
                    (
                        <h1>Search results will show here</h1>
                    )
                    :
                    (
                        backendRes.map((el, index) => {
                           return <EachResultContainer key={index} onClick={() => {props.sendSelection(el.resId, el.vid_player)}}> 
                                     <h4>{el.title}</h4>
                                     <EachResultContent >
                                        <img alt={el.title} src={`http://img.youtube.com/vi/${el.resId}/3.jpg`}/>
                                        <EachResultDescription>{el.description}</EachResultDescription> 
                                     </EachResultContent>
                                  </EachResultContainer>
                            }
                        )
                    )
                }
            </div>
        </div>
    )
}

const EachResultContainer = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
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
`;
