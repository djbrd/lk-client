import React from 'react'
import VerseOne from './VerseOne'

const VerseEach = ({ activeRhymes }) =>
    <div>
        { activeRhymes.map((rhyme, i) =>
            <VerseOne key={i} rhyme={rhyme}/>
        )}
    </div>

export default VerseEach