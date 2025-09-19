import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

const CheckoutStep2 = ({ nextStep, prevStep, updateCheckoutData, data }) => {
  const [payment, setPayment] = useState(data || {
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCheckoutData({ payment });
    nextStep();
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <h4 className="mb-4">Payment Information</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              type="text"
              name="cardNumber"
              value={payment.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Card Holder Name</Form.Label>
            <Form.Control
              type="text"
              name="cardName"
              value={payment.cardName}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </Form.Group>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control
                  type="text"
                  name="expiryDate"
                  value={payment.expiryDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>CVV</Form.Label>
                <Form.Control
                  type="text"
                  name="cvv"
                  value={payment.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="d-flex justify-content-between">
            <Button variant="outline-secondary" onClick={prevStep}>
              Back
            </Button>
            <Button type="submit" variant="primary">
              Continue to Review
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CheckoutStep2;