import React from 'react';
import './Header.css';
import logo from '../../images/onlineCourse.jpg';
import { Container,Row,Col,Button } from 'react-bootstrap';

const Header = () => {
    return (
            <Container fluid>
                <Row className="header">
                    <Col className="d-flex justify-content-center logo">
                        <h1>e-School</h1>
                    </Col>
                    <Col className="d-flex justify-content-center">
                         <input className="search-field" placeholder="Search.." type="text"/>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button variant="success" className=" signInBtn text-white font-weight-bold" >Sign in</Button>
                    </Col>
                </Row>
            </Container>
    );
};

export default Header;