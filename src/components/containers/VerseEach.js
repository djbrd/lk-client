import { connect } from 'react-redux'
import VerseEachPresenter from '../ui/VerseEach'

const VerseEach = connect(
    ({analysed}) =>
        ({
            activeRhymes: analysed.activeRhymes
        }),
    null
)(VerseEachPresenter)

export default VerseEach