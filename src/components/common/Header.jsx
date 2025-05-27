import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Collapse navbar on route change
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

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
      collapseOnSelect
      expand="lg" 
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className={`fixed-top ${scrolled ? 'navbar-scrolled' : ''} ${expanded ? 'navbar-expanded' : ''}`}
      variant={scrolled || expanded ? 'light' : 'dark'}
      bg={scrolled || expanded ? 'white' : 'transparent'}
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
          <Nav className="ms-auto" onClick={() => setExpanded(false)}>
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