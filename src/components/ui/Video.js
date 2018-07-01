import React from 'react'
import Youtube from 'react-youtube'
import { Row } from 'reactstrap'

class Video extends React.Component {
    constructor(props) {
        super(props)
        this.player = null
        this.timeout = null
    }

    render() {
        let { videoId, start, end } = this.props
        const opts = {
            height: '360',
            width: '640',
            frameBorder: '0',
            playerVars: {
                controls: 0,
                autoplay: 0,
                start: start,
                end: end,
                rel: 0
            }
        }

        return (
            <Row>
                <Youtube
                    videoId={videoId}
                    opts={opts}
                    onReady={this._onReady.bind(this)}
                />
            </Row>
        )
    }

    _onReady(event) {
        this.player = event.target
        this.timeout = setTimeout(this._onTimeout.bind(this), 1000)
    }

    _onTimeout() {
        if (this.player.getPlayerState() === 5) {
            console.log('Playing video')
            this.player.playVideo()
        }
    }
}

export default Video
