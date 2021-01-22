import styled, { css } from 'styled-components';

interface IDayFieldProps {
    status: string;
    dateSelected: number;
    dateField: number;
    monthSelected: number;
    monthField: number;
}


export const Container = styled.div`
    z-index: 1;
    grid-area: CC;
    
    background-color: ${props => props.theme.colors.white};
`;

export const Header = styled.div`
    margin: 30px 40px 0 40px;
`;

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    color: ${props => props.theme.colors.black};
    font-weight: 400;
    margin-bottom: 20px;
    cursor: default;

    > svg {
        height: 40px;
        width: 40px;
        color: ${props => props.theme.colors.gray};
        cursor: pointer;
        transition: all .3s;
        
        &:hover {
            color: #000000;
        }
    }

    > span::-moz-selection, > span strong::-moz-selection { 
        color: ${props => props.theme.colors.black};
        background: none;
    }

    > span::selection, > span strong::selection {
        color: ${props => props.theme.colors.black};
        background: none;
    }
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

export const DayField = styled.div<IDayFieldProps>`
    display: flex;
    justify-content: center;
    padding: 5px 0;
    border-top: 2px solid ${props => props.theme.colors.gray};

    > button {
        display: flex;
        justify-content: center;
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 50%;
        font-size: 17px;
        color: ${props => props.status === 'present' ? '#000000' : '#A0A0A0'};
        background-color: ${props => props.theme.colors.white};
        cursor: pointer;
        transition: all .3s;
    }

    > button:hover {
        color: white;
        background-color: #FF4D6F;
        box-shadow: 0 0 5px rgba(0,0,0,.5);
    }

    ${props => {
        if( props.dateSelected === props.dateField &&
            props.monthSelected === props.monthField)
        return css`
            > button {
                color: white;
                background-color: #FF4D6F;
                box-shadow: 0 0 5px rgba(0,0,0,.5);
            }
        `
    }}

    > .active {
        color: white;
        background-color: #FF4D6F;
        box-shadow: 0 0 5px rgba(0,0,0,.5);
    }
`;