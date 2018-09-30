import React from 'react'

const VerseScore = ({rhymes, keywords, keyphrase}) => {
    const total = (rhymes * 5) + (keywords * 20) + keyphrase * 50;
    return (
        <div>
            <div>
                You scored {rhymes * 5} points for your rhymes
            </div>
            {keywords > 0 &&
            <div>
                Plus {keywords * 20} for using {keywords} keywords
            </div>
            }
            {keyphrase &&
            <div>
                Plus 50 points for using the keyphrase
            </div>
            }
            <div>
                For a total of {total} points
            </div>
        </div>
    )
}

export default VerseScore