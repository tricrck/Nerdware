import { Container, Row, Col } from 'react-bootstrap';
import { FaUsers, FaLightbulb, FaCloudDownloadAlt } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Client-Centric Approach',
      description: 'We focus on client satisfaction and understanding client needs.',
      icon: <FaUsers className="feature-icon" size={40} />,
    },
    {
      id: 2,
      title: 'Innovation',
      description: 'We emphasize new ideas and custom solutions to meet your specific needs.',
      icon: <FaLightbulb className="feature-icon" size={40} />,
    },
    {
      id: 3,
      title: 'Cloud Kids Mashinani Initiative',
      description: 'Our project aimed at creating societal impact through technology.',
      icon: <FaCloudDownloadAlt className="feature-icon" size={40} />,
    },
  ];

  return (
    <section className="features-section py-5 bg-light">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-description mb-0">
              At Nerdware System Technologies, we're committed to excellence in everything we do.
            </p>
          </Col>
        </Row>
        
        <Row>
          {features.map((feature) => (
            <Col key={feature.id} md={4} className="mb-4 mb-md-0">
              <div className="feature-item text-center">
                <div className="icon-wrapper mb-3">
                  {feature.icon}
                </div>
                <h3 className="feature-title h4">{feature.title}</h3>
                <p className="feature-description mb-0">
                  {feature.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;