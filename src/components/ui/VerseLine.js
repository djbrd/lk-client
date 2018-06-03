import React from 'react'
import VerseSpan from '../containers/VerseSpan'

const VerseLine = ({ line, rhyme=null }) =>
    // Loop through spans and create a VerseSpan element for each one
    <div>
        { rhyme && rhyme.lines[0] === line && line.id !== 0 ? '...' : null }
        { line.spans.map((span, i) =>
            <VerseSpan key={i} span={span} rhyme={rhyme}/>
        )}
        { rhyme && rhyme.lines[rhyme.lines.length - 1] === line && line.nextLine ? '...' : null }
    </div>

export default VerseLine