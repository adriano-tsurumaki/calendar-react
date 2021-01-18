import React from 'react';

import ContentCalendar from '../ContentCalendar';
import DayNotify from '../DayNotify';
import WidgetWeather from '../WidgetWeather';

import {
    Center,
    Grid 
} from './styles';

const Layout: React.FC = () => {
    return (
        <Center>
            <Grid>
                <WidgetWeather />
                <DayNotify />
                <ContentCalendar />
            </Grid>
        </Center>
    )
}

export default Layout;