import { connect } from 'react-redux'
import RhymeTimerPresentation from '../ui/RhymeTimer'

const RhymeTimer = connect(
    ({rhyme}) =>
        ({
            startTime: rhyme.startTime,
            endTime: rhyme.endTime
        })
)(RhymeTimerPresentation)

export default RhymeTimer