import React, { useState, useEffect } from 'react';

import ContentCalendar from '../ContentCalendar';
import DayNotify from '../DayNotify';

import {
    Center,
    Grid
} from './styles';

const Layout: React.FC = () => {

    const datePresent = new Date();

    const [daySelected, setDaySelected] = useState<number>(datePresent.getDay());
    const [dateSelected, setDateSelected] = useState<number>(datePresent.getDate());
    const [monthSelected, setMonthSelected] = useState<number>(datePresent.getMonth());
    const [yearSelected, setYearSelected] = useState<number>(datePresent.getFullYear());

    useEffect(() => {
        localStorage.setItem('@calendar-react:dateSelect', String(dateSelected));
        localStorage.setItem('@calendar-react:daySelect', String(daySelected));
        localStorage.setItem('@calendar-react:monthSelect', String(monthSelected));
        localStorage.setItem('@calendar-react:yearSelect', String(yearSelected));
    }, []);

    return (
        <Center>
            <Grid>
                <DayNotify 
                    dateSelected={dateSelected}
                    setDateSelected={setDateSelected}
                    daySelected={daySelected}
                    setDaySelected={setDaySelected}
                    monthSelected={monthSelected}
                    setMonthSelected={setMonthSelected}
                    yearSelected={yearSelected}
                    setYearSelected={setYearSelected}
                />
                <ContentCalendar 
                    dateSelected={dateSelected}
                    setDateSelected={setDateSelected}
                    daySelected={daySelected}
                    setDaySelected={setDaySelected}
                    monthSelected={monthSelected}
                    setMonthSelected={setMonthSelected}
                    yearSelected={yearSelected}
                    setYearSelected={setYearSelected}
                />
            </Grid>
        </Center>
    )
}

export default Layout;