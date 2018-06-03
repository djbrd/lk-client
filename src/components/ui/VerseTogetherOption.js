import React from 'react'
import { ButtonGroup, Button } from 'reactstrap'

class VerseTogetherOption extends React.Component {
    render() {
        const {together, onClick} = this.props
        return (
            <div>
                <ButtonGroup>
                    <Button onClick={() => onClick(true)} active={together}>All</Button>
                    <Button onClick={() => onClick(false)} active={!together}>Each</Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default VerseTogetherOption