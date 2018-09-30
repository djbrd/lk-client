
// Rhyme has an array of lines, representing all of those which contain the rhyme
// Phoneme has a reference to span
// Span has a reference to phoneme which has an array of rhymes
// Rhyme has an array of phonemes
// So it's possible from the span to get phoneme, rhymes
// And it's possible from the rhyme to get lines

export const initialData = ({ original_text, phonemes, rhymes }) => {
    // Here, data is prepared to be used in all situations
    let lines = linesWithSpans(original_text, phonemes)
    linkRhymesAndPhonemes(rhymes, phonemes)
    linkLinesToRhymes(lines, rhymes)

    return {
        lines: lines,
        original_text: original_text,
        phonemes: phonemes,
        rhymes: rhymes,
    }
}

export const analysedScore = ({rhymes, original_text}, {keywords, keyphrase}) => {
    const loweredOriginal = original_text.toLowerCase();
    const usedKeywords = keywords.split(', ').filter(word => loweredOriginal.indexOf(word) > -1);

    return {
        rhymes: rhymes.length,
        keywords: usedKeywords.length,
        keyphrase: loweredOriginal.replace(/\n/g, " ").indexOf(keyphrase.phrase.toLowerCase()) > -1
    }
}

export const maxRhymeLength = ({ data }) => {
    const { rhymes } = data
    return rhymes.reduce((max, rhyme) => {
        return Math.max(max, rhyme.pattern.length)
    }, 0)
}

export const activeRhymes = (data, display) => {
    const { rhymes } = data
    const filter = display.filter
    const together = display.options.together

    let candidates = filter.pcount ? rhymes.filter((rhyme) => rhyme.pattern.length === filter.pcount) : [...rhymes]
    if (!together) {
        return candidates
    }

    // Some must be filtered out if they're going to be shown together
    // Longest first
    candidates.sort(sortRhymesByLength)

    // Only include candidates which don't overlap those already selected
    let activePhonemes = new Set()
    let activeRhymes = []
    candidates.forEach( (rhyme) => {
        if(!(rhyme.phonemes.some((phoneme) => activePhonemes.has(phoneme)))) {
            rhyme.phonemes.forEach((phoneme) => activePhonemes.add(phoneme))
            activeRhymes.push(rhyme)
        }
    })

    // Put the active rhymes back into order by position in text for display
    return activeRhymes.sort(sortRhymesByStartIndex)
}


const linesWithSpans = (original_text, phonemes) => {
    let lastSpanInLineIds = []
    let spans = []
    let last_index = 0
    for (let i=0; i < phonemes.length; ++i) {
        let ph = phonemes[i]
        let start_index = ph.start_index

        // Create spans out of any text in the original between the last phoneme and this one
        if (start_index !== last_index) {
            let text = original_text.substring(last_index, start_index)
            let eolIdx = -1
            while (text && (eolIdx = text.indexOf('\n')) !== -1) {
                if (eolIdx > 0) {
                    spans.push({text: text.substr(0, eolIdx)})
                }
                lastSpanInLineIds.push(spans.length)
                text = text.substr(eolIdx + 1)
            }
            if (text) {
                spans.push({text: text})
            }
        }

        last_index = start_index + ph.length
        let span = {text: original_text.substring(start_index, last_index), phoneme: ph}
        ph.span = span
        spans.push(span)
    }

    // Add any remaining text unrepresented by phoneme
    let text = original_text.substring(last_index)
    let eolIdx = -1
    while (text && (eolIdx = text.indexOf('\n')) !== -1) {
        if (eolIdx > 0) {
            spans.push({text: text.substr(0, eolIdx)})
        }
        lastSpanInLineIds.push(spans.length)
        text = text.substr(eolIdx + 1)
    }
    if (text) {
        spans.push({text: text})
    }

    if (spans) {
        lastSpanInLineIds.push(spans.length)
    }

    // Link lines and spans
    let lines = []
    let lastLine = null
    let firstSpanId = 0
    for (let i = 0; i < lastSpanInLineIds.length; ++i) {
        let lastSpanId = lastSpanInLineIds[i]
        let lineSpans = spans.slice(firstSpanId, lastSpanId)
        let line = {id: i, spans: lineSpans}
        lineSpans.forEach((span) => {
            span.line = line
        })
        lines.push(line)
        firstSpanId = lastSpanId
        if (lastLine) {
            lastLine.nextLine = line
        }
        lastLine = line
    }

    return lines
}

// Attach rhymes to phonemes
const linkRhymesAndPhonemes = (rhymes, phonemes) => {
    phonemes.forEach( (phoneme) => {
        phoneme.rhymes = []
    })

    rhymes.forEach( (rhyme) => {
        let phs = phonemesFromRhyme(rhyme, phonemes)
        phs.forEach ((phoneme) => {
            phoneme.rhymes.push(rhyme)
        })
        rhyme.phonemes = phs
    })
}

const phonemesFromRhyme = (rhyme, phonemes) => {
    let result = []
    for (let i = 0; i < 2; ++i) {
        for (let j = 0; j < rhyme.pattern.length; ++j) {
            if (rhyme.pattern[j] > 0) {
                let phoneme = phonemes[rhyme.indices[i] + j]
                result.push(phoneme)
            }
        }
    }
    return result
}

const linkLinesToRhymes = (lines, rhymes) => {
    for (let i = 0; i < rhymes.length; ++i) {
        let rhyme = rhymes[i]
        rhyme.lines = []
        let firstLine = rhyme.phonemes[0].span.line
        let lastLine = rhyme.phonemes[rhyme.phonemes.length - 1].span.line
        let line = firstLine
        do {
            rhyme.lines.push(line)
        } while(line !== lastLine && (line = line.nextLine))
    }
}

const sortRhymesByLength = function (a, b) {
    return Math.sign(b.pattern.length - a.pattern.length);
}

var sortRhymesByStartIndex = function (a, b) {
    return Math.sign(a.indices[0] - b.indices[0]);
}