import styled from 'styled-components';

export const Container = styled.div`
    z-index: 1;
    grid-area: CC;
    
    background-color: ${props => props.theme.colors.white};
`;

export const Header = styled.div`
    margin: 40px 0 0 40px;
`;

export const Title = styled.div`
    font-size: 18px;
    color: ${props => props.theme.colors.black};
    font-weight: 400;
    margin-bottom: 25px;
`;

export const Content = styled.div`
    margin: 0 40px;
`;

export const WeekDay = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const CalendarDay = styled.div`
    
`;
