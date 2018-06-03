import React from 'react'
import VerseLine from './VerseLine'

const VerseOne = ({ rhyme }) =>
    <div>
        {rhyme.lines.map((line, i) =>
            <VerseLine
                key={i}
                line={line}
                rhyme={rhyme}
            />
        )}
    </div>

export default VerseOne