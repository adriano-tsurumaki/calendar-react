import React from 'react';

import ContentCalendar from '../ContentCalendar';
import DayNotify from '../DayNotify';

import {
    Center,
    Grid
} from './styles';

const Layout: React.FC = () => {
    return (
        <Center>
            <Grid>
                <DayNotify />
                <ContentCalendar />
            </Grid>
        </Center>
    )
}

export default Layout;