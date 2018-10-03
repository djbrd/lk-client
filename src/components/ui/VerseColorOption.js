import React from 'react'
import { ButtonGroup, Button } from 'reactstrap'
import { Row } from 'reactstrap'

class VerseColorOption extends React.Component {
    render() {
        const { color, onClick } = this.props
        return (
            <Row>
                <ButtonGroup>
                    <Button onClick={() => onClick(true)} active={color}>Text</Button>
                    <Button onClick={() => onClick(false)} active={!color}>Background</Button>
                </ButtonGroup>
            </Row>
        )
    }
}

export default VerseColorOption