import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../stylesheets/page.css'
import logo_icon from '../../assets/logo_icon.png'

const headerStyle = {
    backgroundColor: '#000000',
}

const footerStyle = {
    background: 'black',
    color: 'white',
    marginTop: '20%'
}

const childrenContainerSyle = {
    marginLeft: '0%'
}

const PageTemplate = ({ children }) =>

    <div className="page">
        <div id="page-header" style={headerStyle}>
            <Container>
                <Row>
                    <Col sm="2">
                        <img id='logo' src={logo_icon} alt="logo"/>
                    </Col>
                    <Col sm="10">
                        <h1>LYRICAL KOMBAT</h1>
                    </Col>
                </Row>
            </Container>
        </div>
        <Container fluid={true} style={childrenContainerSyle}>
            {children}
        </Container>
        <div id="page-footer" style={footerStyle}>
            <footer className="page-footer font-small pt-4 mt-4">
                <Container className="text-center text-md-left">
                    <Row>
                        <Col md="6">
                            <h5 class="text-uppercase">TODO: </h5>
                            <p>A list of nice stuff</p>
                        </Col>
                        <Col md="6">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Mock up one</a>
                                </li>
                                <li>
                                    <a href="#!">Mock up too</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright py-3 text-center">
                    © 2018 Copyright:
                    <a href="https://mdbootstrap.com/material-design-for-bootstrap/">Lyrical Kombatants</a>
                </div>
            </footer>
        </div>
    </div>


export default PageTemplate