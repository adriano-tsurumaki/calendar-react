import React, { useState, useEffect } from 'react';
import { 
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Layout from '../components/Layout';
import DayNotify from '../components/DayNotify';
import ContentCalendar from '../components/ContentCalendar';
import EventCalendar from '../components/EventCalendar';
import EventConfig from '../components/EventConfig';

const AppRoutes: React.FC = () => {

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
    }, [dateSelected, daySelected, monthSelected, yearSelected]);

    return (
        <BrowserRouter>
        <Layout>
            <Switch>
                <Route path="/" exact >
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
                </Route>
                <Route path="/edit-event/:time" exact>
                    <EventConfig />
                    <EventCalendar />
                </Route>
            </Switch>
        </Layout>
        </BrowserRouter>
    );
}

export default AppRoutes;