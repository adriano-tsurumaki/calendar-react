import React, { useState, useMemo } from 'react';

import { 
    Container,
    Header,
    Title,
    Content,
    WeekDay,
    CalendarDay,
    WeekField,
    DayField
} from './styles';

const ContentCalendar: React.FC = () => {

    const [daySelected, setDaySelected] = useState<number>(new Date().getDate());
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth());
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

    const fillDay = useMemo(() => {
        let daysPerWeekUnformatted = [];
    
        const date = new Date(yearSelected, monthSelected, 1);
        const auxFirst = date.getTime();
        const dayFirst = date.getDay();
        daysPerWeekUnformatted.push({date: date.getDate(), day: date.getDay()});
    
        let n = 1;
    
        for(var i = dayFirst; i > 0; i--) {
            
            let dateBefore = new Date(auxFirst - (86400000 * n));
            
            daysPerWeekUnformatted.unshift({date: dateBefore.getDate(), day: dateBefore.getDay()});
    
            n++;
        }
        
        const auxLast = new Date(yearSelected, monthSelected + 1, 1).getTime();
        const dayLast = new Date(auxLast - 86400000).getDate();

        for(var j = 1; j < dayLast; j++) {
            let dateAfter = new Date(auxFirst + (86400000 * j));
            
            daysPerWeekUnformatted.push({date: dateAfter.getDate(), day: dateAfter.getDay()});
        }

        const quantityOfWeek = daysPerWeekUnformatted.reduce((total, element) => {
            if(element.day === 0)
                return total + 1;
            else
                return total;
        }, 0);

        daysPerWeekUnformatted = daysPerWeekUnformatted.map((item, index) => {
            return {week: Math.floor(index / 7), ...item}
        });

        const daysPerWeek = [];

        for(var k = 0; k < quantityOfWeek; k++) {
            daysPerWeek.push(
                daysPerWeekUnformatted.filter(item => item.week === k)
            );
        }

        console.log({daysPerWeekUnformatted, daysPerWeek, quantityOfWeek});

        return daysPerWeek;
    }, [monthSelected, yearSelected]);

    return (
        <Container>
            <Header>
                <Title>
                    <strong>Janeiro</strong> de 2020
                </Title>
            </Header>
            <Content>
                <WeekDay>
                    <span>Dom</span>
                    <span>Seg</span>
                    <span>Ter</span>
                    <span>Qua</span>
                    <span>Qui</span>
                    <span>Sex</span>
                    <span>Sab</span>
                </WeekDay>
                <CalendarDay>
                    {fillDay.map(week => {
                        return (
                            <WeekField>
                                {week.map(day => {
                                    return (
                                        <DayField>
                                            <span>{day.date}</span>
                                        </DayField>
                                    )
                                })}
                            </WeekField>
                        )
                    })}
                </CalendarDay>
            </Content>
        </Container>
    )
}

export default ContentCalendar;