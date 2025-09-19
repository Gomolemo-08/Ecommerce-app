import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>ShopEasy</h5>
            <p>Your one-stop shop for all your needs. Quality products at affordable prices.</p>
          </Col>
          <Col md={2} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">Products</a></li>
              <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          <Col md={2} className="mb-4">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">FAQ</a></li>
              <li><a href="#" className="text-white text-decoration-none">Returns</a></li>
              <li><a href="#" className="text-white text-decoration-none">Shipping</a></li>
              <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Newsletter</h5>
            <p>Subscribe to our newsletter for updates on new products and special offers.</p>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Your email address" />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </Col>
        </Row>
        <hr className="my-4" />
        <div className="text-center">
          <p>&copy; 2023 ShopEasy. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;