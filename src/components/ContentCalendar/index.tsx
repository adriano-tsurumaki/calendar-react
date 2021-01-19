import React, { useState } from 'react';

import { 
    Container,
    Header,
    Title,
    Content,
    WeekDay,
    CalendarDay
} from './styles';

const ContentCalendar: React.FC = () => {

    const [day, setDay] = useState<Date>(new Date());

    return (
        <Container>
            <Header>
                <Title>
                    <strong>Janeiro</strong> de 2020
                </Title>
            </Header>
            <Content>
                <WeekDay>
                    <span>Domingo</span>
                    <span>Segunda</span>
                    <span>Terça</span>
                    <span>Quarta</span>
                    <span>Quinta</span>
                    <span>Sexta</span>
                    <span>Sábado</span>
                </WeekDay>
                <CalendarDay>

                </CalendarDay>
            </Content>
        </Container>
    )
}

export default ContentCalendar;