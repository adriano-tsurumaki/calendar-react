import styled from 'styled-components';

export const Center = styled.div`
    display: flex;

    height: 100vh;

    align-items: center;
    justify-content: center;
    
    background-color: #416788;
`;

export const Grid = styled.div`
    display: grid;

    grid-template-areas:
    'DN CC'
    'DN CC';
    grid-template-columns: auto 620px;

    width: 1000px;

    box-shadow: 0 0 10px black;

    max-height: 70vh;
    min-height: 70vh;

`