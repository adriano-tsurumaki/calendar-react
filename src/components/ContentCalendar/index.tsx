import React, { useMemo } from 'react';

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

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

import months from '../../utils/months';

interface IContentCalendarProps {
    dateSelected: number;
    setDateSelected: React.Dispatch<React.SetStateAction<number>>;
    daySelected: number;
    setDaySelected: React.Dispatch<React.SetStateAction<number>>;
    monthSelected: number;
    setMonthSelected: React.Dispatch<React.SetStateAction<number>>;
    yearSelected: number;
    setYearSelected: React.Dispatch<React.SetStateAction<number>>;
}

interface IDaysPerWeekUnformattedProps {
    date: number;
    day: number;
    month: number;
    status: string;
    week: number;
}

const ContentCalendar: React.FC<IContentCalendarProps> = ({
    dateSelected,
    setDateSelected,
    daySelected,
    setDaySelected,
    monthSelected,
    setMonthSelected,
    yearSelected,
    setYearSelected
}) => {

    const fillDay = useMemo(() => {
        let daysPerWeekUnformatted = new Array<IDaysPerWeekUnformattedProps>();

        function increaseDate(
            n: number, 
            body: Array<IDaysPerWeekUnformattedProps>, 
            dateRef: Date, 
            status: string
        ) {
            let arm = new Array<IDaysPerWeekUnformattedProps>();
            let datePresent;

            for(let i=1; i<=n; i++) {
                datePresent = new Date(dateRef.getTime() - (86400000 * i));
                
                arm.push({
                    date: datePresent.getDate(),
                    day: datePresent.getDay(),
                    month: datePresent.getMonth(),
                    status,
                    week: 0
                })
            }

            arm.reverse();

            if(status === 'before') {
                return [...arm, ...body];
            }
            
            return [...body, ...arm];
        }
    
        const date = new Date(yearSelected, monthSelected, 1);

        daysPerWeekUnformatted = increaseDate(
            date.getDay(),
            daysPerWeekUnformatted,
            date,
            'before'
        );

        let dateLast = new Date(yearSelected, monthSelected + 1);

        daysPerWeekUnformatted = increaseDate(
            new Date(dateLast.getTime() - 86400000).getDate(),
            daysPerWeekUnformatted,
            dateLast,
            'present'
        );

        let qtd = 6 - new Date(dateLast.getTime() - 86400000).getDay();
        let dateAfter = new Date(yearSelected, monthSelected + 1, qtd + 1);
        daysPerWeekUnformatted = increaseDate(
            qtd,
            daysPerWeekUnformatted,
            dateAfter,
            'after'
        );
        
        const quantityOfWeek = daysPerWeekUnformatted.reduce((total, element) => {
            if(element.day === 0)
                return total + 1;
            else
                return total;
        }, 0);

        daysPerWeekUnformatted = daysPerWeekUnformatted.map((item, index) => {
            return {...item, week: Math.floor(index / 7)}
        });

        const daysPerWeek = new Array<IDaysPerWeekUnformattedProps[]>();

        const filterDays = (k: number) => {
            daysPerWeek.push(
                daysPerWeekUnformatted.filter(item => item.week === k)
            );
        }

        for(var k = 0; k < quantityOfWeek; k++) {
            filterDays(k);
        }

        return daysPerWeek;
    }, [monthSelected, yearSelected]);

    const handleDayClick = (date: number, day: number, month: number, year: number, status: string) => {
        let monthUpdate = month;
        let yearUpdate = year;
        
        if(status === 'before') {
            yearUpdate = month === 11 ? year - 1 : year;
        } else if(status === 'after') {
            yearUpdate = month === 0 ? year + 1 : year;
        }

        localStorage.setItem('@calendar-react:dateSelect', String(date));
        localStorage.setItem('@calendar-react:daySelect', String(day));
        localStorage.setItem('@calendar-react:monthSelect', String(monthUpdate));
        localStorage.setItem('@calendar-react:yearSelect', String(yearUpdate));
        setDateSelected(date);
        setDaySelected(day);
        setMonthSelected(monthUpdate);
        setYearSelected(yearUpdate);
    };

    const handleMonthClick = (status: string) => {

        let year = Number(localStorage.getItem('@calendar-react:yearSelect'));
        let month = Number(localStorage.getItem('@calendar-react:monthSelect'));

        
        if(status === 'previous') {
            year = month === 0 ? year - 1: year;
            month = month === 0 ? 11 : month - 1;
        } else {
            year = month === 11 ? year + 1: year;
            month = month === 11 ? 0 : month + 1;
        }

        const date = new Date(year, month, 1);

        localStorage.setItem('@calendar-react:yearSelect', String(year));
        localStorage.setItem('@calendar-react:monthSelect', String(month));
        localStorage.setItem('@calendar-react:daySelect', String(date.getDay()));
        localStorage.setItem('@calendar-react:dateSelect', String(date.getDate()));

        setYearSelected(year);
        setMonthSelected(month);
        setDaySelected(date.getDay());
        setDateSelected(date.getDate());

        // const date = localStorage.getItem('@calendar-react:dateSelect');
    }

    return (
        <Container>
            <Header>
                <Title>
                    <BiChevronLeft
                        onClick={() => handleMonthClick('previous')}
                    />
                    <span><strong>{months[monthSelected]}</strong> de {yearSelected}</span>
                    <BiChevronRight
                        onClick={() => handleMonthClick('following')}
                    />
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
                    {fillDay.map((week, indexW) => {
                        return (
                            <WeekField key={"week" + indexW}>
                                {week.map((dayField, indexD) => {
                                    return (
                                        <DayField 
                                            status={dayField.status}
                                            key={"day" + indexD}
                                            dateSelected={dateSelected}
                                            dateField={dayField.date}
                                            monthSelected={monthSelected}
                                            monthField={dayField.month}
                                        >
                                            <button 
                                                onClick={() => handleDayClick(
                                                    dayField.date, 
                                                    dayField.day,
                                                    dayField.month,
                                                    yearSelected,
                                                    dayField.status
                                                )}
                                            >{dayField.date}</button>
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