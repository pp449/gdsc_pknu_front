import React from 'react';
import styled from 'styled-components';

const Tmp = styled.div`
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    scroll-snap-align: start;
`;

function SecondPage() {
    return (
        <Tmp>2</Tmp>
    );
}

export default SecondPage;
