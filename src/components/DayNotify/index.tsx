import React from 'react';

import { BiCalendarCheck } from "react-icons/bi";

import { 
    Container,
    Header,
    Title,
    Content,
    ScheduleItem,
    ScheduleHour,
    SchedulePresentation
} from './styles';

const DayNotify: React.FC = () => {
    return (
        <Container>
            <Header>
                <Title>
                    <BiCalendarCheck />
                    <span><strong>Segunda-feira</strong>, 10 de Agosto</span>
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
                    <SchedulePresentation>Start with design project</SchedulePresentation>
                </ScheduleItem>


            </Content>

        </Container>
    )
}

export default DayNotify;