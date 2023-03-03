import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css"

const NavbaReact = () => {
    return (
        <div>
            <Navbar id='barra' bg="light">
                <Container>
                    <Navbar.Brand href="/" className='log-me'>Joias Case</Navbar.Brand>
                </Container>
                <div className='centro'>
                <Navbar.Brand href="/" className='log-ma'>Homer</Navbar.Brand>
                <Navbar.Brand href="/joia" className='log-ma'>Nova Joia</Navbar.Brand>
                </div>
            </Navbar>
        </div>
    )
}

export default NavbaReact
