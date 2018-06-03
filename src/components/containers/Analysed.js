import { connect } from 'react-redux'
import AnalysedSection from '../ui/AnalysedSection'

const Analysed = connect(
    ({analysed}) =>
        ({
            analysed: analysed
        }),
        null
)(AnalysedSection)

export default Analysed