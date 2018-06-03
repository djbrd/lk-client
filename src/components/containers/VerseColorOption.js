import { connect } from 'react-redux'
import VerseColorOptionPresentation from '../ui/VerseColorOption'
import { analysedColor } from "../../actions/actions";

const VerseColorOption = connect(
    ({analysed}) =>
        ({
            color: analysed.display.options.color,
        }),
    dispatch =>
        ({
            onClick(color) {
                dispatch(analysedColor(color))
            }
        })
)(VerseColorOptionPresentation)

export default VerseColorOption