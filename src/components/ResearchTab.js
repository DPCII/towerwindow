import React from 'react'
import styled from 'styled-components';

export default function ResearchTab() {
    return (
        <ResearchTabWrapper>
            <p>Research here...</p>
        </ResearchTabWrapper>
    )
}

const ResearchTabWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;