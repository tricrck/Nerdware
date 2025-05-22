import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar 
      expand="lg" 
      className={`fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}
      variant={scrolled ? 'light' : 'dark'}
      bg={scrolled ? 'white' : 'transparent'}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img 
            src="/images/logo.png" 
            alt="Nerdware System Technologies" 
            height="40" 
            className="d-inline-block align-top" 
          />
          <span className="ms-2">Nerdware System Technologies</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link">About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/services" className="nav-link">Services</Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio" className="nav-link">Portfolio</Nav.Link>
            <Nav.Link as={NavLink} to="/blog" className="nav-link">Blogs</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;