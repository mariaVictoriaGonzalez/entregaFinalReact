import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo.png'
import './NavBar.css'
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const categories = ['Dresses', 'Jeans', 'Tops', 'Skirts', 'Sweaters']

    return (
        <Navbar bg="light" data-bs-theme="light" collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to="/" href="#home"><img src={Logo} className='logo' /></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {categories.map(category => (
                            <Link key={category} style={{ textDecoration: 'none', padding: '5px 7px', color: '#c6c6c6' }} to={`/category/${category}`}>{category}</Link>
                        ))}
                    </Nav>
                    <Nav>
                        <CartWidget />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}