import React, { useState, useEffect } from 'react';

// import ContentCalendar from '../ContentCalendar';
// import DayNotify from '../DayNotify';

import {
    Center,
    Grid
} from './styles';

const Layout: React.FC = ({ children }) => {

    

    return (
        <Center>
            <Grid>
                {children}
            </Grid>
        </Center>
    )
}

export default Layout;