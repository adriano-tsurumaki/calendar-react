import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CC;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.black};
`;

export const Title = styled.div`
    margin: 40px;

    > h1 {
        position: relative;
        display: inline-block;
        font-size: 24px;
        margin-left: 5px;
        cursor: default;

        &::after {
            position: absolute;
            content: '';
            display: inline-block;
            bottom: -3px;
            left: 0;
            width: 100%;
            border-bottom: 2px solid ${props => props.theme.colors.black};
        }
    }
`;