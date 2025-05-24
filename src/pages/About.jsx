import { Container, Row, Col, Image } from 'react-bootstrap';
import SEO from '../components/common/SEO'
import LazyImage from '../components/common/LazyImage';
const About = () => {
  return (
    <>
      <SEO
        title="About Us - Our Story & Mission"
        description="Learn about Nerdware Technologies' journey, mission, and the expert team behind innovative web development solutions."
        keywords="about nerdware, web development team, company mission, technology experts"
        url="/about"
      />
    <main>
      {/* Hero Section */}
      <section className="page-header bg-primary text-white py-5 mb-5">
        <Container>
          <Row>
            <Col>
              <h1 className="display-4">About Us</h1>
              <p className="lead">Learn more about Nerdware System Technologies and our story.</p>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* About Content */}
      <section className="about-content py-5">
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <LazyImage
                src="/nerdware.png"
                alt="About Nerdware System Technologies"
                className="rounded"
              />
            </Col>
            <Col lg={6}>
              <h2>Our Story</h2>
              <p>
                At Nerdware System Technologies, we're passionate about technology and innovation. 
                Founded with a vision to translate knowledge into innovative applications, 
                we've been working with businesses to create digital solutions that make a difference.
              </p>
              <p>
                Our team of experienced developers, designers, and digital strategists work together 
                to deliver high-quality solutions tailored to our clients' unique needs. We believe in 
                pushing technologies to the limits to create applications that have significant societal and economic impacts.
              </p>
            </Col>
          </Row>
          
          <Row className="mt-5">
            <Col lg={12} className="text-center mb-4">
              <h2>Our Mission & Vision</h2>
            </Col>
            <Col md={6} className="mb-4">
              <div className="about-card p-4 h-100 border-0 shadow-sm rounded">
                <h3 className="h4">Our Mission</h3>
                <p className="mb-0">
                  To deliver innovative technological solutions that solve real-world problems 
                  and empower businesses to achieve their digital transformation goals through 
                  cutting-edge technology and exceptional service.
                </p>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="about-card p-4 h-100 border-0 shadow-sm rounded">
                <h3 className="h4">Our Vision</h3>
                <p className="mb-0">
                  Our vision is to translate knowledge into innovative applications that will have 
                  significant societal and economic impacts, making technology accessible and 
                  beneficial for everyone.
                </p>
              </div>
            </Col>
          </Row>
          
          <Row className="mt-5">
            <Col lg={12} className="text-center mb-4">
              <h2>Our Values</h2>
            </Col>
            <Col md={4} className="mb-4">
              <div className="text-center">
                <h4>Innovation</h4>
                <p>We constantly explore new technologies and approaches to provide the best solutions.</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="text-center">
                <h4>Quality</h4>
                <p>We deliver high-quality solutions that exceed expectations and stand the test of time.</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="text-center">
                <h4>Partnership</h4>
                <p>We work closely with our clients as partners to understand their needs and goals.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
    </>
  );
};

export default About;