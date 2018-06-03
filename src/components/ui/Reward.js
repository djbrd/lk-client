import React from 'react'
import { Container, Row } from 'reactstrap'
import PageTemplate from './PageTemplate'
import adidas_voucher from '../../assets/adidas_voucher.jpg'

const Reward = () =>
    <PageTemplate>
        <Container>
            <div id="congratulations-section">
                <Row>
                    <h2>Congratulations!</h2>
                </Row>
                <Row class="row">
                    <h3>You beat Nadia Rose "Skwod"</h3>
                </Row>
            </div>
            <div id="voucher-section">
                <img id='voucher_img' src={adidas_voucher} alt="adidas voucher"/>
                <div id='voucher_msg'>CLICK HERE TO CLAIM YOUR DISCOUNT</div>
            </div>
        </Container>
    </PageTemplate>

export default Reward