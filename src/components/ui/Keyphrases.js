import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'reactstrap'
import '../../stylesheets/Keyphrases.css'

const Keyphrases = ({keyphrase='', sponsor=''}) =>
    <Row>
        <div id="keyphrases">
            <div className="sponsor">
                Use <span className="keyphrase">"{keyphrase}"</span> for extra points<br/>
                Inspiration sponsored by {sponsor}
            </div>
        </div>
    </Row>

Keyphrases.propTypes = {
    keyphrase: PropTypes.string,
    sponsor: PropTypes.string,
}

export default Keyphrases