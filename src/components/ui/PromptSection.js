import React from 'react'
import Instructions from './Instructions'
import Keywords from './Keywords'
import Keyphrases from "./Keyphrases";
import Video from "./Video";
import { Button, Row } from "reactstrap"

class PromptSection extends React.Component {
    render() {
        const { prompt, onRequestPrompt } = this.props
        if (prompt.requested) {
            return <Row>Loading</Row>
        } else if (prompt.error) {
            return <Row>{prompt.error}</Row>
        } else if (prompt.id) {
            return (
                <div>
                    <Instructions/>
                    <Video videoId={prompt.video_id} start={prompt.start} end={prompt.end}/>
                    <Keywords keywords={prompt.keywords}/>
                    <Keyphrases keyphrase={prompt.keyphrase}/>
                    <Row><Button onClick={onRequestPrompt}>Load Prompt</Button></Row>
                </div>
            )
        } else {
            return (
                <div>
                    <Row><Button onClick={onRequestPrompt}>Load Prompt</Button></Row>
                </div>
            )
        }

    }
}


export default PromptSection