import { connect } from 'react-redux'
import VerseScorePresenter from "../ui/VerseScore";

const VerseScore = connect(
    ({analysed}) =>
        ({
            ...analysed.score
        }),
    null
)(VerseScorePresenter)

export default VerseScore