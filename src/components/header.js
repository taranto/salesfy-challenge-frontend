import React from 'react';
import { HeaderStyle } from './styles'
import logo from '../styles/assets/number.svg'

export default function Header() {
    return (
        <HeaderStyle>
            <img alt="nulogo" src={logo} />
        </HeaderStyle>
    );
}
