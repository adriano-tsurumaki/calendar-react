import styled from 'styled-components';

export const Container = styled.div`
    z-index: 1;
    grid-area: CC;
    
    background-color: ${props => props.theme.colors.white};
`;

export const Header = styled.div`
    margin: 30px 0 0 50px;
`;

export const Title = styled.div`
    font-size: 18px;
    color: ${props => props.theme.colors.black};
    font-weight: 400;
    margin-bottom: 30px;
`;

export const Content = styled.div`
    margin: 0 40px;
`;

export const WeekDay = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    > span {
        display: flex;
        justify-content: center;
        font-weight: bold;
        font-size: 18px;
        cursor: default;
    }

    margin-bottom: 20px;
`;

export const CalendarDay = styled.div`
    
`;

export const WeekField = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

export const DayField = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 0;
    border-top: 2px solid ${props => props.theme.colors.gray};

    > span {
        display: flex;
        justify-content: center;
        cursor: pointer;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 50%;
        transition: all .3s;
    }

    > span:hover {
        color: white;
        background-color: #FF4D6F;
        box-shadow: 0 0 5px rgba(0,0,0,.5);
    }
`;