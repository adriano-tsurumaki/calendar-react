import styled from 'styled-components';

export const Container = styled.aside`
    grid-area: DN;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.whiteOpacity};
    max-height: 70vh;
    overflow: hidden;
`;

export const Header = styled.header`
    margin: 40px 0 0 40px;
`;

export const Title = styled.title`
    display: flex;
    align-items: center;

    > svg {
        font-size: 28px;
    }

    > span {
        margin-left: 10px;
        font-size: 18px;
        font-weight: 300;

        > strong {
            position: relative;

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
    }

    cursor: default;
`;

export const Content = styled.main`
    display: flex;
    flex-direction: column;
    margin: 30px 0 0 40px;
    overflow-y: scroll;
    min-height: 55vh;
    max-height: 55vh;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.tertiary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.secondary};
    }
`;

export const ScheduleItem = styled.div`
    display: flex;
    flex-direction: row;

    position: relative;

    margin-top: 25px;
    cursor: pointer;

    transition: color .3s;

    &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        width: 100%;
        display: block;
        margin-top: 10px;
        border-bottom: 1px solid rgba(255, 255, 255, .4);
        -webkit-transition: all 3s;
        transition: all .3s;
    }

    &::before{
        position: absolute;
        left: 0;
        top: -5px;
        content: '';
        display: inline-block;
        width: 0;
        height: calc(100% + 10px);
        background-color: ${props => props.theme.colors.white};
        -webkit-transition: all 3s;
        transition: all .3s;
    }

    &:hover, &:hover .schedule-hour {
        color: ${props => props.theme.colors.white};
    }

    &:hover .schedule-hour {
        margin-left: 10px;
    }

    &:hover::after {
        border-color: ${props => props.theme.colors.white};
    }
    &:hover::before {
        width: 5px;
    }
`;

export const ScheduleHour = styled.div`
    display: flex;
    align-items: center;
    transition: margin-left .3s;
    font-weight: 300;
    color: rgba(255, 255, 255, .4);
    transition: all .3s;
`;

export const SchedulePresentation = styled.div`
    display: inline-block;
    margin-left: 10px;
`;
