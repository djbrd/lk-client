import React from 'react'
import VerseLine from './VerseLine'
import { Row } from 'reactstrap';

const VerseOne = ({ rhyme }) =>
    <Row className='verseFragment'>
        {rhyme.lines.map((line, i) =>
            <VerseLine
                key={i}
                line={line}
                rhyme={rhyme}
            />
        )}
    </Row>

export default VerseOne