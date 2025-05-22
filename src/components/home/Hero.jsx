import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center text-white">
      <Container>
        <Row className="align-items-center">
          <Col lg={7} className="hero-content">
            <h1 className="display-4 fw-bold mb-3">Pushing Technologies to the Limits</h1>
            <p className="lead mb-4">
              Our vision is to translate knowledge into innovative applications that will have significant societal and economic impacts.
            </p>
            <div className="hero-buttons">
              <Link to="/services">
                <Button variant="primary" size="lg" className="me-3 hero-btn">
                  Our Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline-light" size="lg" className="hero-btn">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </Col>
          <Col lg={5} className="d-none d-lg-block">
            {/* This would typically contain a hero image */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;