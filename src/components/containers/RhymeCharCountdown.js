import { connect } from 'react-redux'
import RhymeCharCountdownPresentation from '../ui/RhymeCharCountdown'

const RhymeCharCountdown = connect(
    ({form, analysed, rhyme}) =>
        ({
            typingLength: (form.rhyme &&
                form.rhyme.values &&
                form.rhyme.values.rhyme) ? form.rhyme.values.rhyme.length : 0,
            analysedLength: (analysed.data &&
                analysed.data.original_text) ? analysed.data.original_text.length : 0,
            editing: rhyme.editing
        })
)(RhymeCharCountdownPresentation)

export default RhymeCharCountdown