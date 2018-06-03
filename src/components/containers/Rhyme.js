import { connect } from 'react-redux'
import RhymeSection from '../ui/RhymeSection'
import {submitRhyme} from '../../actions/actions'

const Rhyme = connect(
    ({rhyme}) =>
        ({
            rhyme: rhyme
        }),
    dispatch =>
        ({
            onSubmitRhyme(values) {
                dispatch(submitRhyme(values))
            }
        })
)(RhymeSection)

export default Rhyme

