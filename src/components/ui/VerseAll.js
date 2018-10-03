import React from 'react'
import VerseLine from './VerseLine'
import { Row } from 'reactstrap'

const VerseAll = ({ lines }) =>
    // Create a line component for each line
    <Row className='verseFragment'>
        { lines.map((line, i) =>
            <VerseLine line={line} key={i}/>
        )}
    </Row>

export default VerseAll