import { connect } from 'react-redux'
import VerseAllPresenter from '../ui/VerseAll'

const VerseAll = connect(
    ({analysed}) =>
        ({
            lines: analysed.data.lines
        }),
    null
)(VerseAllPresenter)

export default VerseAll