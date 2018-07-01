import React from 'react'

class RhymeTimer extends React.Component {
    constructor(props) {
        super(props)
        this.interval = null
    }

    componentWillUpdate(nextProps) {
        const { startTime, endTime } = this.props
        if (this.interval === null && nextProps.startTime > startTime) {
            this.interval = setInterval(this.forceUpdate.bind(this), 1000)
        } else if (nextProps.endTime > endTime) {
            clearInterval(this.interval)
            this.interval = null
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval)
        this.interval = null
    }

    render() {
        const { startTime, endTime } = this.props
        let latest = endTime
        if (startTime && !endTime) {
            latest = new Date().getTime()
        }
        let diff = (latest - startTime) / 1000;
        let diff_minutes = Math.round(diff/60);
        let diff_seconds = Math.round(diff%60);
        diff_seconds = diff_seconds < 10 ? '0' + parseInt(diff_seconds, 10) : parseInt(diff_seconds, 10);

        return <div>Elapsed time <span>{diff_minutes}:{diff_seconds}</span></div>
    }
}

export default RhymeTimer