import React from 'react'
import Header from '../components/header'
import Converter from '../components/converter'
import { Container } from './styles'

export default function Home() {
    return (
        <Container>
            <Header />
            <div className="converter-section">
                <Converter />
            </div>
        </Container>
    );
}
