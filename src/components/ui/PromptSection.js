import React from 'react'
import Instructions from './Instructions'
import Keywords from './Keywords'
import Keyphrases from "./Keyphrases";
import Video from "./Video";
import { Button, Row } from "reactstrap"

class PromptSection extends React.Component {
    componentDidMount() {
        this.props.onRequestPrompt();
    }

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
                    <Row><Button disabled={prompt.disabled} onClick={onRequestPrompt}>Skip</Button></Row>
                </div>
            )
        } else {
            return null;
        }

    }
}


export default PromptSection