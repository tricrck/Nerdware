import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa';
import SEO from '../components/common/SEO';

const Error404 = () => {
  return (
    <>
      <SEO
        title="Page Not Found - 404 Error | Nerdware Technologies"
        description="Sorry, the page you're looking for doesn't exist. Return to Nerdware Technologies homepage or explore our services."
        keywords="404, page not found, error, Nerdware Technologies"
        url="/404"
      />
      
      <main className="error-page">
        {/* Error Hero Section */}
        <section className="error-hero py-5 bg-light min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8} xl={6}>
                <div className="error-content">
                  {/* Large 404 Number */}
                  <div className="error-number mb-4">
                    <h1 className="display-1 fw-bold text-primary mb-0" style={{fontSize: '8rem', lineHeight: '1'}}>
                      404
                    </h1>
                    <div className="error-icon mb-3">
                      <FaExclamationTriangle className="text-warning" size={48} />
                    </div>
                  </div>
                  
                  {/* Error Message */}
                  <div className="error-message mb-5">
                    <h2 className="h3 mb-3 text-dark">Oops! Page Not Found</h2>
                    <p className="lead text-muted mb-4">
                      The page you're looking for seems to have wandered off into the digital void. 
                      Don't worry, even the best developers sometimes take a wrong turn!
                    </p>
                    <p className="text-muted">
                      The page might have been moved, deleted, or you might have entered the wrong URL.
                    </p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="error-actions mb-5">
                    <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                      <Link to="/">
                        <Button variant="primary" size="lg" className="px-4">
                          <FaHome className="me-2" />
                          Back to Home
                        </Button>
                      </Link>
                      
                      <Button 
                        variant="outline-primary" 
                        size="lg" 
                        className="px-4"
                        onClick={() => window.history.back()}
                      >
                        <FaArrowLeft className="me-2" />
                        Go Back
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            
            {/* Helpful Links Section */}
            <Row className="justify-content-center mt-5">
              <Col lg={10}>
                <Card className="border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <h4 className="text-center mb-4">
                      <FaSearch className="text-primary me-2" />
                      Looking for something specific?
                    </h4>
                    <Row className="text-center">
                      <Col md={3} className="mb-3">
                        <Link to="/about" className="text-decoration-none">
                          <div className="p-3 rounded bg-light h-100">
                            <h6 className="text-primary mb-2">About Us</h6>
                            <p className="small text-muted mb-0">Learn about our company</p>
                          </div>
                        </Link>
                      </Col>
                      <Col md={3} className="mb-3">
                        <Link to="/services" className="text-decoration-none">
                          <div className="p-3 rounded bg-light h-100">
                            <h6 className="text-primary mb-2">Services</h6>
                            <p className="small text-muted mb-0">Explore our offerings</p>
                          </div>
                        </Link>
                      </Col>
                      <Col md={3} className="mb-3">
                        <Link to="/portfolio" className="text-decoration-none">
                          <div className="p-3 rounded bg-light h-100">
                            <h6 className="text-primary mb-2">Portfolio</h6>
                            <p className="small text-muted mb-0">View our work</p>
                          </div>
                        </Link>
                      </Col>
                      <Col md={3} className="mb-3">
                        <Link to="/contact" className="text-decoration-none">
                          <div className="p-3 rounded bg-light h-100">
                            <h6 className="text-primary mb-2">Contact</h6>
                            <p className="small text-muted mb-0">Get in touch</p>
                          </div>
                        </Link>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            
            {/* Fun Tech Quote */}
            <Row className="justify-content-center mt-4">
              <Col lg={8} className="text-center">
                <blockquote className="blockquote">
                  <p className="mb-3 text-muted fst-italic">
                    "There are only 10 types of people in the world: those who understand binary and those who don't."
                  </p>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">Classic Programming Joke</cite>
                  </footer>
                </blockquote>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Error404;