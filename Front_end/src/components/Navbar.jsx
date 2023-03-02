import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css"

const NavbaReact = () => {
    return (
        <div>
            <Navbar className='barra' bg="light">
                <Container>
                    <Navbar.Brand href="#home" className='log-me'>Joias Case</Navbar.Brand>
                    <div className='centro'>
                        <Nav.Link href="#home">Joias</Nav.Link>
                        <Nav.Link href="#home">Home</Nav.Link>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbaReact
