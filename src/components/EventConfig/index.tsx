import React from 'react';
import { Link } from 'react-router-dom'

import { BiX } from 'react-icons/bi';

import {
    Container,
    Title
} from './styles';

const EventConfig: React.FC = () => {

    return (
        <Container>
            <Link to="/">
                <BiX />
            </Link>
            <Title>
                <h1>Configurações</h1>
            </Title>
        </Container>
    )
}

export default EventConfig;