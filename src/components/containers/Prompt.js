import { connect } from 'react-redux'
import PromptSection from '../ui/PromptSection'
import { fetchPrompt } from '../../actions/actions'

const Prompt = connect(
    ({prompt}) =>
        ({
            prompt: prompt
        }),
    dispatch =>
        ({
            onRequestPrompt(id) {
                dispatch(fetchPrompt(id))
            }
        })
)(PromptSection)

export default Prompt