import SEO from '../components/common/SEO'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { FaLaptopCode, FaMobileAlt, FaSearch, FaCheck, FaChartBar, FaRobot } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom web applications tailored to client needs.',
      icon: <FaLaptopCode className="service-icon" size={50} />,
      features: [
        'Responsive Web Design',
        'E-commerce Solutions',
        'Content Management Systems',
        'Custom Web Applications',
        'API Development & Integration',
        'Database Design & Optimization'
      ]
    },
    {
      id: 2,
      title: 'Mobile Development',
      description: 'Custom mobile apps to help businesses stand out.',
      icon: <FaMobileAlt className="service-icon" size={50} />,
      features: [
        'iOS App Development',
        'Android App Development',
        'Cross-platform Solutions',
        'UI/UX Design',
        'App Store Optimization',
        'Maintenance & Support'
      ]
    },
    {
      id: 3,
      title: 'Search Engine Optimization (SEO)',
      description: 'Services to improve search engine rankings and provide a competitive edge.',
      icon: <FaSearch className="service-icon" size={50} />,
      features: [
        'On-page SEO Optimization',
        'Keyword Research & Analysis',
        'Content Strategy',
        'Technical SEO Audit',
        'Local SEO',
        'Performance Monitoring'
      ]
    },
    {
      id: 4,
      title: 'Data Analysis',
      description: 'Turn data into insights to drive strategic decision-making.',
      icon: <FaChartBar className="service-icon" size={50} />,
      features: [
        'Data Cleaning & Preprocessing',
        'Dashboard & Report Generation',
        'Descriptive & Predictive Analytics',
        'KPI Monitoring',
        'Custom Data Visualizations',
        'Business Intelligence Integration'
      ]
    },
    {
      id: 5,
      title: 'Automation',
      description: 'Optimize operations by automating repetitive tasks.',
      icon: <FaRobot className="service-icon" size={50} />,
      features: [
        'Workflow Automation',
        'Process Mapping & Scripting',
        'Integration with External Tools',
        'Task Scheduling & Monitoring',
        'Custom Bot Development',
        'Efficiency & Cost Analysis'
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Our Services"
        description="Explore our comprehensive digital solutions designed to help your business thrive."
        keywords="web development, mobile apps, SEO, data analysis, automation"
        url="/services"
      />
    <main>
      {/* Hero Section */}
      <section className="page-header bg-primary text-white py-5 mb-5">
        <Container>
          <Row>
            <Col>
              <h1 className="display-4">Our Services</h1>
              <p className="lead">Comprehensive digital solutions to help your business thrive.</p>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Services Content */}
      <section className="services-content py-5">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2>What We Offer</h2>
              <p>
                At Nerdware System Technologies, we provide comprehensive digital solutions 
                designed to help your business succeed in today's competitive marketplace.
              </p>
            </Col>
          </Row>
          
          <Row>
            {services.map((service, index) => (
              <Col key={service.id} lg={4} md={6} className="mb-5">
                <Card className="service-detail-card h-100 border-0 shadow">
                  <Card.Body className="p-4">
                    <div className="text-center mb-4">
                      <div className="icon-wrapper mb-3">
                        {service.icon}
                      </div>
                      <Card.Title as="h3" className="service-title">{service.title}</Card.Title>
                      <Card.Text className="service-description">
                        {service.description}
                      </Card.Text>
                    </div>
                    
                    <ListGroup variant="flush">
                      {service.features.map((feature, idx) => (
                        <ListGroup.Item key={idx} className="border-0 px-0 py-2">
                          <FaCheck className="text-success me-2" size={14} />
                          {feature}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          
          {/* Process Section */}
          <Row className="mt-5">
            <Col lg={12} className="text-center mb-5">
              <h2>Our Process</h2>
              <p>We follow a structured approach to ensure successful project delivery.</p>
            </Col>
            <Col md={3} className="mb-4 text-center">
              <div className="process-step">
                <div className="step-number">1</div>
                <h4>Discovery</h4>
                <p>We understand your business needs and goals.</p>
              </div>
            </Col>
            <Col md={3} className="mb-4 text-center">
              <div className="process-step">
                <div className="step-number">2</div>
                <h4>Planning</h4>
                <p>We create a detailed project plan and timeline.</p>
              </div>
            </Col>
            <Col md={3} className="mb-4 text-center">
              <div className="process-step">
                <div className="step-number">3</div>
                <h4>Development</h4>
                <p>We build your solution using best practices.</p>
              </div>
            </Col>
            <Col md={3} className="mb-4 text-center">
              <div className="process-step">
                <div className="step-number">4</div>
                <h4>Launch</h4>
                <p>We deploy and provide ongoing support.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
    </>
  );
};

export default Services;