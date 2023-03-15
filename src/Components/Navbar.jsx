import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
// import { Outlet, Link } from "react-router-dom";

// Bootstrap Css 
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbars(props) {
    const textSize = '1.3rem';
    return (
        <>
            <Navbar className={`py-2 px-3 bg-${props.mode} navbar-${props.mode}`} expand="lg">
                <Container fluid>
                    <Navbar.Brand style={{ fontSize: textSize }} href="#">TextUtils</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link style={{marginRight: '20px', fontSize: 'bold', textDecoration: 'none'}} href='/'>
                                Home
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Check
                                className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}
                                onClick={props.modeSet}
                                type="switch"
                                id="custom-switch"
                                label={`Enable ${props.mode === 'light' ? 'dark' : 'light'} mode`}
                            />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <Outlet /> */}
        </>
    )
}

export default Navbars