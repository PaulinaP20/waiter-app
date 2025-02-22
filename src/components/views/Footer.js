import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="bg-light text-secondary py-3 mt-4">
            <Container>
                <Row>
                    <Col className="text-center">
                    <p>Copyright © PizzeriaApp 2025.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};
export default Footer;