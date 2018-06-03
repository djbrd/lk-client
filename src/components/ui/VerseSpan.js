import React from 'react'

class VerseSpan extends React.Component {
    render() {
        const {span, activeRhymes, color, rhyme=null } = this.props
        let rhymes = !("phoneme" in span) ? []
            : rhyme ? span.phoneme.rhymes.filter((r) => rhyme === r)
                : span.phoneme.rhymes
        for (let rhyme of rhymes) {
            let activeId = activeRhymes.indexOf(rhyme)
            if (activeId !== -1) {
                return this.activated(span, color, activeId)
            }
        }
        return <span>{span.text}</span>
    }

    activated(span, color, highlightedId) {
        const colors = ['#dfba24',
            '#d87e3b',
            '#57d0ca',
            '#ca3e6b',
            '#278fbd',
            '#a5bb51',
            '#7c8bc5',
            '#fdc47c',
            '#ab4097',
            '#54aa00',
            '#51a587',
            '#ffb0b1',
            '#d4cb8b',
            '#d27481',
            '#b15fc1',
        ];

        let spanStyle =  color ? {
            color: colors[highlightedId % colors.length]
        } : {
            background: colors[highlightedId % colors.length]
        }
        return <span style={spanStyle}>{span.text}</span>
    }
}

export default VerseSpan