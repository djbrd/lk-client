import React from 'react'
import { ButtonGroup, Button } from 'reactstrap'

class VerseColorOption extends React.Component {
    render() {
        const { color, onClick } = this.props
        return (
            <div>
                <ButtonGroup>
                    <Button onClick={() => onClick(true)} active={color}>Text</Button>
                    <Button onClick={() => onClick(false)} active={!color}>Background</Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default VerseColorOption