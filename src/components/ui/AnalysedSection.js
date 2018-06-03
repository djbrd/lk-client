import React from 'react'
import VerseAll from '../containers/VerseAll'
import VerseEach from "../containers/VerseEach";
import VerseDisplay from "./VerseDisplay"
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

class AnalysedSection extends React.Component {
    render() {
        const { analysed } = this.props
        if (analysed.data) {
            return (
                <div>
                    <VerseDisplay/>
                    { analysed.display.options.together ? <VerseAll/> : <VerseEach/> }
                    <Link to='/reward'>
                        <Button color='secondary'>Collect your reward</Button>
                    </Link>
                </div>
            )
        } else {
            return null
        }
    }
}

export default AnalysedSection