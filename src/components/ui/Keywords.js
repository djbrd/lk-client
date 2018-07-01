import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'reactstrap'
import '../../stylesheets/Keywords.css'

const Keywords = ({ keywords='' }) =>
    <Row>
        Keywords are:&nbsp;{keywords.split(", ").map((keyword, i) =>
        <span key={i}>{i>0 && ', '}<span className="keyword">{keyword}</span></span>
    )}
    </Row>


Keywords.propTypes = {
    keywords: PropTypes.string,
}

export default Keywords