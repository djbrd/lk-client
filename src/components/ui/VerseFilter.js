import React from 'react'
import { ButtonGroup, Button } from 'reactstrap'

class VerseFilter extends React.Component {
    render() {
        const { pcount, pmax, onClick } = this.props
        let rows = []
        for (let i = 1; i <= pmax; ++i) {
            rows.push(<Button key={i} onClick={() => onClick(i)} active={pcount===i}>{i}</Button>)
        }
        return (
            <div>
                <ButtonGroup>
                    <Button onClick={() => onClick(0)} active={pcount===0}>All</Button>
                    {rows}
                </ButtonGroup>
            </div>

        )
    }
}

export default VerseFilter