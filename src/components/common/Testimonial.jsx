import { Card } from 'react-bootstrap';

const Testimonial = ({ testimonial }) => {
  return (
    <Card className="testimonial-card h-100 border-0 shadow-sm">
      <Card.Body className="p-4">
        <div className="testimonial-content mb-3">
          <p className="mb-0 quote-text">"{testimonial.feedback}"</p>
        </div>
        <div className="d-flex align-items-center">
          <div 
            className="testimonial-avatar"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundImage: `url(${testimonial.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              marginRight: '15px'
            }}
          ></div>
          <div>
            <h5 className="mb-0 fw-bold">{testimonial.name}</h5>
            <small className="text-muted">{testimonial.role}</small>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Testimonial;