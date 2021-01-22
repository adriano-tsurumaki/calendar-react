import React, { useState } from 'react';

import ContentCalendar from '../ContentCalendar';
import DayNotify from '../DayNotify';

import {
    Center,
    Grid
} from './styles';

const Layout: React.FC = () => {

    const [daySelected, setDaySelected] = useState<number>(new Date().getDay());
    const [dateSelected, setDateSelected] = useState<number>(new Date().getDate());
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth());
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

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