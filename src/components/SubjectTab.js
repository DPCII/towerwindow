import React from 'react';
import styled from 'styled-components';

export default function SubjectTab() {
    return (
        <SubjectTabWrapper>
            <p>Subjects here.</p>
        </SubjectTabWrapper>
    )
}

const SubjectTabWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
