import { connect } from 'react-redux'
import VerseTogetherOptionPresentation from '../ui/VerseTogetherOption'
import {analysedTogether } from "../../actions/actions";

const VerseTogetherOption = connect(
    ({analysed}) =>
        ({
            together: analysed.display.options.together,
        }),
    dispatch =>
        ({
            onClick(together) {
                dispatch(analysedTogether(together))
            }
        })
)(VerseTogetherOptionPresentation)

export default VerseTogetherOption