import React from 'react'
import { ButtonGroup, Button } from 'reactstrap'
import { Row } from 'reactstrap'

class VerseTogetherOption extends React.Component {
    render() {
        const {together, onClick} = this.props
        return (
            <Row>
                <ButtonGroup>
                    <Button onClick={() => onClick(true)} active={together}>All</Button>
                    <Button onClick={() => onClick(false)} active={!together}>Each</Button>
                </ButtonGroup>
            </Row>
        )
    }
}

export default VerseTogetherOption