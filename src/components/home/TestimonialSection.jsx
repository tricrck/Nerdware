import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Testimonial from '../common/Testimonial';

const TestimonialSection = () => {
  const { testimonials } = useSelector((state) => state.testimonials);

  return (
    <section className="testimonials-section py-5">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-description">
              Don't just take our word for it. See what our clients have to say about working with us.
            </p>
          </Col>
        </Row>
        
        <Row>
          {testimonials.map((testimonial) => (
            <Col key={testimonial.id} md={6} lg={3} className="mb-4">
              <Testimonial testimonial={testimonial} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialSection;