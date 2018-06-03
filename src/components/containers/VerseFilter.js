import { connect } from 'react-redux'
import VerseFilterPresentation from '../ui/VerseFilter'
import { analysedFilter } from "../../actions/actions";

const VerseFilter = connect(
    ({analysed}) =>
        ({
            pcount: analysed.display.filter.pcount,
            pmax: analysed.display.filter.pmax
        }),
    dispatch =>
        ({
            onClick(pcount) {
                dispatch(analysedFilter(pcount))
            }
        })
)(VerseFilterPresentation)

export default VerseFilter