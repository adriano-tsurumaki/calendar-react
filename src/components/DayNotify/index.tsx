import React from 'react';

import { Link } from 'react-router-dom';

import { BiCalendarCheck, BiPlus } from "react-icons/bi";

import { 
    Container,
    Header,
    Title,
    Content,
    ScheduleItem,
    ScheduleHour,
    SchedulePresentation
} from './styles';

import days from '../../utils/days';
import months from '../../utils/months';

interface IContentDayNotifyProps {
    dateSelected: number;
    setDateSelected: React.Dispatch<React.SetStateAction<number>>;
    daySelected: number;
    setDaySelected: React.Dispatch<React.SetStateAction<number>>;
    monthSelected: number;
    setMonthSelected: React.Dispatch<React.SetStateAction<number>>;
    yearSelected: number;
    setYearSelected: React.Dispatch<React.SetStateAction<number>>;
}

const DayNotify: React.FC<IContentDayNotifyProps> = ({
    dateSelected,
    setDateSelected,
    daySelected,
    setDaySelected,
    monthSelected,
    setMonthSelected,
    yearSelected,
    setYearSelected
}) => {
    return (
        <Container>
            <Header>
                <Title>
                    <Link to={"/edit-event/" + String(new Date(yearSelected, monthSelected, dateSelected).getTime())}>
                        <BiPlus className="BiPlus" />
                        <BiCalendarCheck />
                        <span><strong>{days[daySelected]}</strong>, {dateSelected} de {months[monthSelected]}</span>
                    </Link>
                </Title>
            </Header>

            <Content>
                <ScheduleItem>
                    <ScheduleHour className="schedule-hour">08:30</ScheduleHour>
                    <SchedulePresentation>Start with design project</SchedulePresentation>
                </ScheduleItem>

                <ScheduleItem>
                    <ScheduleHour className="schedule-hour">08:30</ScheduleHour>
                    <SchedulePresentation>Start with design project</SchedulePresentation>
                </ScheduleItem>

                <ScheduleItem>
                    <ScheduleHour className="schedule-hour">08:30</ScheduleHour>
                    <SchedulePresentation>Start with design project</SchedulePresentation>
                </ScheduleItem>

                <ScheduleItem>
                    <ScheduleHour className="schedule-hour">08:30</ScheduleHour>
                    <SchedulePresentation>Start with design project</SchedulePresentation>
                </ScheduleItem>

                <ScheduleItem>
                    <ScheduleHour className="schedule-hour">08:30</ScheduleHour>
                    <SchedulePresentation>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, corporis sit, reiciendis similique facere non sequi eos sed voluptatem voluptatibus eius quaerat nostrum neque voluptate impedit iusto? Magni, excepturi quas!</SchedulePresentation>
                </ScheduleItem>
                
                <ScheduleItem>
                    <ScheduleHour className="schedule-hour">08:30</ScheduleHour>
                    <SchedulePresentation>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, corporis sit, reiciendis similique facere non sequi eos sed voluptatem voluptatibus eius quaerat nostrum neque voluptate impedit iusto? Magni, excepturi quas!</SchedulePresentation>
                </ScheduleItem>

                <ScheduleItem>
                    <ScheduleHour className="schedule-hour">08:30</ScheduleHour>
                    <SchedulePresentation>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, corporis sit, reiciendis similique facere non sequi eos sed voluptatem voluptatibus eius quaerat nostrum neque voluptate impedit iusto? Magni, excepturi quas!</SchedulePresentation>
                </ScheduleItem>


            </Content>

        </Container>
    )
}

export default DayNotify;