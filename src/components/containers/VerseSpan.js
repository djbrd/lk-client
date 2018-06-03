import { connect } from 'react-redux'
import VerseSpanPresenter from '../ui/VerseSpan'

const VerseSpan = connect(
    ({analysed}) =>
        ({
            activeRhymes: analysed.activeRhymes,
            color: analysed.display.options.color
        }),
        null
)(VerseSpanPresenter)

export default VerseSpan
