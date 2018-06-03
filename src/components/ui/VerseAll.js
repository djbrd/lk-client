import React from 'react'
import VerseLine from './VerseLine'

const VerseAll = ({ lines }) =>
    // Create a line component for each line
    <div>
        { lines.map((line, i) =>
            <VerseLine line={line} key={i}/>
        )}
    </div>

export default VerseAll