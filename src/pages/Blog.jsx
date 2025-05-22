// src/pages/Blog.jsx
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Explore the latest trends and technologies shaping the future of web development.',
      category: 'Web Development',
      author: 'Nerdware Team',
      date: '2025-01-15',
      readTime: '5 min read',
      image: 'https://wpengine.com/wp-content/uploads/2022/07/WP-Trends_1200x627.jpeg'
    },
    {
      id: 2,
      title: 'Mobile App Development: Native vs Cross-Platform',
      excerpt: 'A comprehensive guide to choosing between native and cross-platform mobile development.',
      category: 'Mobile Development',
      author: 'Nerdware Team',
      date: '2025-01-10',
      readTime: '7 min read',
      image: 'https://wpengine.com/wp-content/uploads/2024/12/WPE-IMG-2025CustomerAppreciation-Header-1200x627@2x-1200x628.jpg'
    },
    {
      id: 3,
      title: 'SEO Best Practices for 2025: What You Need to Know',
      excerpt: 'Stay ahead of the competition with these essential SEO strategies and techniques.',
      category: 'SEO',
      author: 'Nerdware Team',
      date: '2025-01-05',
      readTime: '6 min read',
      image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXddMprqyNik3Dk4_teie9XDsuzawCt415QD1pPkZBha9nfLWEdpTBIj_cJpKNvvNYrX6k0pg6_ieipJzRe9tcEtvbouEru5fgIYbZvBC-pRGEssFFLfiVq0ttgek0ytkjuQAWoY?key=OZDzELczZk3knDZbwKB3zg'
    },
    {
      id: 4,
      title: 'Building Scalable Web Applications with Modern Technologies',
      excerpt: 'Learn how to build applications that can grow with your business needs.',
      category: 'Web Development',
      author: 'Nerdware Team',
      date: '2024-12-28',
      readTime: '8 min read',
      image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXdOUWan6kMQeG0h-CEvBnRPw-hnk5T0E8XA9VOKHmgNfeh7k_RcaJftRNDzv6Q8vKv_Wqb94ZN8yqMYVF019FLv37XuLVMZoR5-Dwdrc_BVZyI-cHgYdyLgqnLHiqZuVl_9zpRTXg?key=OZDzELczZk3knDZbwKB3zg'
    },
    {
      id: 5,
      title: 'The Impact of AI on Custom Software Development',
      excerpt: 'Discover how artificial intelligence is revolutionizing software development processes.',
      category: 'Technology',
      author: 'Nerdware Team',
      date: '2024-12-20',
      readTime: '6 min read',
      image: 'https://wpengine.com/wp-content/uploads/2024/11/WPE-IMG-WPEngine-RISEArtEvent-BlogHeader-1200x627-1-1200x628.png'
    },
    {
      id: 6,
      title: 'Cloud Computing: Benefits for Small and Medium Businesses',
      excerpt: 'Understanding how cloud computing can transform your business operations.',
      category: 'Cloud Computing',
      author: 'Nerdware Team',
      date: '2024-12-15',
      readTime: '5 min read',
      image: 'https://wpengine.com/wp-content/uploads/2025/02/uk-anniversary-feature.png'
    }
  ];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="page-header bg-primary text-white py-5 mb-5">
        <Container>
          <Row>
            <Col>
              <h1 className="display-4">Our Blog</h1>
              <p className="lead">Stay updated with the latest insights, trends, and tips from our experts.</p>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Blog Content */}
      <section className="blog-content py-5">
        <Container>
          <Row>
            {blogPosts.map((post) => (
              <Col key={post.id} lg={4} md={6} className="mb-5">
                <Card className="blog-card h-100 border-0 shadow-sm">
                  <Card.Img 
                    variant="top" 
                    src={post.image} 
                    alt={post.title}
                    className="blog-image"
                  />
                  <Card.Body className="p-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <Badge bg="primary">{post.category}</Badge>
                      <small className="text-muted">{post.readTime}</small>
                    </div>
                    <Card.Title as="h3" className="h5 mb-3">{post.title}</Card.Title>
                    <Card.Text className="text-muted mb-3">
                      {post.excerpt}
                    </Card.Text>
                    <div className="blog-meta d-flex justify-content-between align-items-center">
                      <small className="text-muted">By {post.author}</small>
                      <small className="text-muted">{formatDate(post.date)}</small>
                    </div>
                  </Card.Body>
                  <Card.Footer className="bg-transparent border-0 px-4 pb-4 pt-0">
                    <button className="btn btn-outline-primary btn-sm">Read More</button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
          
          {/* Newsletter Signup */}
          <Row className="mt-5">
            <Col lg={8} className="mx-auto text-center">
              <div className="newsletter-signup bg-light p-5 rounded">
                <h3>Stay Updated</h3>
                <p className="mb-4">Subscribe to our newsletter to get the latest insights and updates.</p>
                <div className="d-flex justify-content-center">
                  <div className="input-group" style={{maxWidth: '400px'}}>
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Enter your email"
                      aria-label="Email address"
                    />
                    <button className="btn btn-primary" type="button">Subscribe</button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Blog;