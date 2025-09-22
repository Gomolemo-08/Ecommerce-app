import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Make sure this import is present

const Home = () => {
  const navigate = useNavigate(); // Make sure this hook is used

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 fw-bold mb-4 text-white">Shop the Latest Trends</h1>
              <p className="lead mb-4 text-white">
                Discover amazing products at great prices. ShopEasy brings you the best shopping experience online.
              </p>
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => navigate('/products')} // Make sure this onClick handler is present
              >
                Shop Now
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <Container>
          <Row className="text-center">
            <Col md={4} className="mb-4">
              <i className="bi bi-truck feature-icon"></i>
              <h5>Free Shipping</h5>
              <p className="text-muted">Free shipping on orders over $50</p>
            </Col>
            <Col md={4} className="mb-4">
              <i className="bi bi-arrow-left-right feature-icon"></i>
              <h5>Easy Returns</h5>
              <p className="text-muted">30-day money-back guarantee</p>
            </Col>
            <Col md={4} className="mb-4">
              <i className="bi bi-shield-check feature-icon"></i>
              <h5>Secure Payment</h5>
              <p className="text-muted">All transactions are secure and encrypted</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;