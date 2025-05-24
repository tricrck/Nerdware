import LazyImage from '../components/common/LazyImage';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { useState } from 'react';
import SEO from '../components/common/SEO'
const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'A comprehensive e-commerce solution that increased customer conversion by 75%.',
      client: 'Timothy Talam',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://raw.githubusercontent.com/nerdwareke/Nerdware-Website/refs/heads/main/media/images/valpo_graduate.png',
      link: 'https://github.com/nerdwareke'
    },
    {
      id: 2,
      title: 'Rental Management App',
      category: 'mobile',
      description: 'Mobile app to streamline tenant-landlord connections for rental units.',
      client: 'Susan Chepkemoi',
      technologies: ['React Native', 'Firebase', 'Google Maps API'],
      image: 'https://raw.githubusercontent.com/nerdwareke/Nerdware-Website/refs/heads/main/media/images/valpo_graduate.png',
      link: 'https://github.com/nerdwareke'
    },
    {
      id: 3,
      title: 'SEO Optimization Project',
      category: 'seo',
      description: 'Comprehensive SEO strategy that improved rankings and increased business orders.',
      client: 'Elijah Khajira - EllyHill',
      technologies: ['SEO Tools', 'Analytics', 'Content Strategy'],
      image: 'https://raw.githubusercontent.com/nerdwareke/Nerdware-Website/refs/heads/main/media/images/valpo_graduate.png',
      link: 'https://github.com/nerdwareke'
    },
    {
      id: 4,
      title: 'Online Shoe Store',
      category: 'web',
      description: 'E-commerce app for online shoe sales with order and delivery features.',
      client: 'Jescinta C',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Payment Gateway'],
      image: 'https://raw.githubusercontent.com/nerdwareke/Nerdware-Website/refs/heads/main/media/images/valpo_graduate.png',
      link: 'https://github.com/nerdwareke'
    },
    {
      id: 5,
      title: 'Cloud Kids Mashinani',
      category: 'web',
      description: 'Educational platform aimed at creating societal impact through technology.',
      client: 'Nerdware Initiative',
      technologies: ['React', 'Django', 'PostgreSQL', 'AWS'],
      image: 'https://raw.githubusercontent.com/nerdwareke/Nerdware-Website/refs/heads/main/media/images/valpo_graduate.png',
      link: 'https://github.com/nerdwareke'
    },
    {
      id: 6,
      title: 'Business Analytics Dashboard',
      category: 'web',
      description: 'Custom analytics dashboard for business intelligence and reporting.',
      client: 'Corporate Client',
      technologies: ['D3.js', 'Python', 'Flask', 'Chart.js'],
      image: 'https://raw.githubusercontent.com/nerdwareke/Nerdware-Website/refs/heads/main/media/images/valpo_graduate.png',
      link: 'https://github.com/nerdwareke'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'seo', label: 'SEO Projects' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <>
    <SEO
      title="Our Portfolio"
      description="Explore our recent projects and success stories in web development, mobile apps, and SEO."
      keywords="portfolio, web development, mobile apps, SEO, projects"
      url="/portfolio"/>
    <main>
      {/* Hero Section */}
      <section className="page-header bg-primary text-white py-5 mb-5">
        <Container>
          <Row>
            <Col>
              <h1 className="display-4">Our Portfolio</h1>
              <p className="lead">Explore our recent projects and success stories.</p>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Portfolio Content */}
      <section className="portfolio-content py-5">
        <Container>
          {/* Filter Buttons */}
          <Row className="justify-content-center mb-5">
            <Col lg={8}>
              <div className="portfolio-filters text-center">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    className={`btn ${filter === category.key ? 'btn-primary' : 'btn-outline-primary'} mx-2 mb-2`}
                    onClick={() => setFilter(category.key)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </Col>
          </Row>
          
          {/* Portfolio Grid */}
          <Row>
            {filteredProjects.map((project) => (
              <Col key={project.id} lg={4} md={6} className="mb-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <Card className="portfolio-card h-100 border-0 shadow-sm">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="portfolio-image rounded-top w-100 h-auto"
                  />
                  <Card.Body className="p-4">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <Badge bg="primary" className="mb-2">
                        {project.category.toUpperCase()}
                      </Badge>
                    </div>
                    <Card.Title as="h3" className="h5">{project.title}</Card.Title>
                    <Card.Text className="text-muted mb-3">
                      {project.description}
                    </Card.Text>
                    <div className="mb-3">
                      <small className="text-muted">Client: {project.client}</small>
                    </div>
                    <div className="portfolio-technologies">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} bg="light" text="dark" className="me-1 mb-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
                </a>
              </Col>
            ))}
          </Row>
          
          {filteredProjects.length === 0 && (
            <Row>
              <Col className="text-center">
                <p>No projects found for the selected category.</p>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </main>
    </>
  );
};

export default Portfolio;