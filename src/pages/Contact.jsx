import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { useState, useRef } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import SEO from '../components/common/SEO'

const Contact = () => {
  const form = useRef();
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setShowError(false);
    
    emailjs
      .sendForm('service_robfegs', 'template_ee07y1j', form.current, {
        publicKey: 'msPpvIVCXTIzEVGOD',
      })
      .then(
        () => {
          setSubmitting(false);
          setShowSuccess(true);
           // Clear the form on successful submission
          form.current.reset();
          setTimeout(() => {
            setShowSuccess(false);
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSubmitting(false);
          setShowError(true);
          
          // Auto-hide error message after 5 seconds
          setTimeout(() => {
            setShowError(false);
          }, 5000);
        },
      );
    
  };

  return (
    <>
      <SEO
        title="Contact Us - Nerdware Technologies"
        description="Get in touch with Nerdware Technologies for web development, mobile apps, and digital solutions. We're here to help you succeed."
        keywords="contact, web development, mobile apps, digital solutions, Nerdware Technologies"
        url="/contact"
      />
    <main>
      {/* Hero Section */}
      <section className="page-header bg-primary text-white py-5 mb-5">
        <Container>
          <Row>
            <Col>
              <h1 className="display-4">Contact Us</h1>
              <p className="lead">Ready to start your project? Get in touch with us today.</p>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Contact Content */}
      <section className="contact-content py-5">
        <Container>
          <Row>
            {/* Contact Form */}
            <Col lg={8} className="mb-5 mb-lg-0">
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-5">
                  {showSuccess && (
                    <Alert 
                      variant="success" 
                      dismissible 
                      onClose={() => setShowSuccess(false)}
                      className="rounded-3"
                    >
                      🎉 Message sent successfully! We'll respond within 24 hours.
                    </Alert>
                  )}
                  
                  {showError && (
                    <Alert 
                      variant="danger" 
                      dismissible 
                      onClose={() => setShowError(false)}
                      className="rounded-3"
                    >
                      ❌ Failed to send message. Please try again or contact us directly.
                    </Alert>
                  )}
                  <h2 className="mb-4">Send us a Message</h2>
                  <Form ref={form} onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Full Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            required
                            placeholder="Your full name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email Address *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            required
                            placeholder="your@email.com"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            placeholder="Your phone number"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Subject *</Form.Label>
                          <Form.Control
                            type="text"
                            name="subject"
                            required
                            placeholder="Message subject"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group className="mb-4">
                      <Form.Label>Message *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        required
                        placeholder="Tell us about your project..."
                      />
                    </Form.Group>
                    
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg" 
                      disabled={submitting}
                      className="position-relative"
                    >
                      {submitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            
            {/* Contact Information */}
            <Col lg={4}>
              <div className="contact-info">
                <h3 className="mb-4">Get in Touch</h3>
                
                <Card className="border-0 shadow-sm mb-4">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-start">
                      <FaMapMarkerAlt className="text-primary me-3 mt-1" size={20} />
                      <div>
                        <h5 className="mb-1">Our Address</h5>
                        <p className="mb-0 text-muted">
                          Isaac Salat Road<br />
                          Innovation District<br />
                          Kericho, Kenya
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                
                <Card className="border-0 shadow-sm mb-4">
                  <Card.Body className="p-4">
                                        <div className="d-flex align-items-start">
                      <FaPhone className="text-primary me-3 mt-1" size={20} />
                      <div>
                        <h5 className="mb-1">Call Us</h5>
                        <p className="mb-0 text-muted">
                          +254 707 263 447<br />
                          +254 723 753 014
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="border-0 shadow-sm mb-4">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-start">
                      <FaEnvelope className="text-primary me-3 mt-1" size={20} />
                      <div>
                        <h5 className="mb-1">Email Us</h5>
                        <p className="mb-0 text-muted">
                          info@nerdwaretechnologies.com<br />
                          support@nerdwaretechnologies.com
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-start">
                      <FaClock className="text-primary me-3 mt-1" size={20} />
                      <div>
                        <h5 className="mb-1">Working Hours</h5>
                        <p className="mb-0 text-muted">
                          Monday – Friday: 9:00 AM – 6:00 PM<br />
                          Saturday: 10:00 AM – 4:00 PM
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
    </>
  );
};

export default Contact;
