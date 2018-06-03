import React from 'react'
import { Container } from 'reactstrap'
import Prompt from '../containers/Prompt'
import Rhyme from '../containers/Rhyme'
import Analysed from '../containers/Analysed'
import PageTemplate from './PageTemplate'

const Game = () =>
    <PageTemplate>
        <Container>
            <Prompt/>
            <Rhyme/>
            <Analysed/>
        </Container>
    </PageTemplate>

export default Game