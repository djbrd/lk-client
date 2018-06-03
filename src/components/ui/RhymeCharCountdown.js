import React from 'react'

class RhymeCharCountdown extends React.Component {
    render() {
        const { typingLength, analysedLength, editing } = this.props
        let length = editing ? typingLength : analysedLength
        return <div>Remaining characters <span>{ 280 - length }</span></div>
    }
}

export default RhymeCharCountdown