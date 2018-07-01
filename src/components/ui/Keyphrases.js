import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'reactstrap'
import '../../stylesheets/Keyphrases.css'

const Keyphrases = ({ keyphrase = {}}) =>
    <Row>
        <div id="keyphrases">
            <div className="sponsor">
                Use <span className="keyphrase">"{keyphrase.phrase}"</span> for extra points<br/>
                Inspiration sponsored by {keyphrase.sponsor}
            </div>
        </div>
    </Row>

Keyphrases.propTypes = {
    keyphrase: PropTypes.object,
}

export default Keyphrases