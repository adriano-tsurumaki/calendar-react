import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    grid-area: DN;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.background};

    > a {
        position: absolute;
        top: 0;
        left: 0;
        color: ${props => props.theme.colors.whiteOpacity};
        font-size: 30px;
        transition: all .3s;
    }

    > a:hover {
        color: white;
    }
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
            border-bottom: 2px solid ${props => props.theme.colors.whiteOpacity};
        }
    }
`;