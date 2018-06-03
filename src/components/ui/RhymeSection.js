import React from 'react'
import RhymeForm from './RhymeForm'
import RhymeCharCountdown from '../containers/RhymeCharCountdown'
import RhymeTimer from '../containers/RhymeTimer'
import { Row } from 'reactstrap'

class RhymeSection extends React.Component {
    render() {
        const { onSubmitRhyme } = this.props
        return (
            <div>
                <Row>
                    <RhymeCharCountdown/>
                </Row>
                <Row>
                    <RhymeTimer/>
                </Row>
                <Row>
                    <RhymeForm onSubmit={onSubmitRhyme}/>
                </Row>
            </div>
        )
    }
}

export default RhymeSection