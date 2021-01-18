import styled from 'styled-components';

export const Center = styled.div`
    display: flex;

    height: 100vh;

    align-items: center;
    justify-content: center;
`;

export const Grid = styled.div`
    display: grid;

    grid-template-areas:
    'WW CC'
    'DN CC';

    width: 1000px;

    grid-template-columns: auto 620px;

    max-height: 70vh;
    min-height: 70vh;

`