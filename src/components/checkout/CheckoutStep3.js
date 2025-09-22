import React from 'react';
import { Card, Button, Row, Col, Table } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';

const CheckoutStep3 = ({ nextStep, prevStep, checkoutData }) => {
  const { items, getCartTotal } = useCart();

  const handleSubmit = () => {
    // In a real app, you would process the order here
    nextStep();
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <h4 className="mb-4">Order Review</h4>
        
        <Row>
          <Col md={6}>
            <h5>Shipping Information</h5>
            <p>
              {checkoutData.shipping.firstName} {checkoutData.shipping.lastName}<br />
              {checkoutData.shipping.address}<br />
              {checkoutData.shipping.city}, {checkoutData.shipping.state} {checkoutData.shipping.zipCode}<br />
              {checkoutData.shipping.country}
            </p>
          </Col>
          <Col md={6}>
            <h5>Payment Information</h5>
            <p>
              Card: **** **** **** {checkoutData.payment.cardNumber?.slice(-4)}<br />
              Name: {checkoutData.payment.cardName}<br />
              Expiry: {checkoutData.payment.expiryDate}
            </p>
          </Col>
        </Row>

        <h5 className="mt-4">Order Items</h5>
        <Table responsive>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="text-end">
          <h5>Total: ${(getCartTotal() * 1.1).toFixed(2)}</h5>
          <small className="text-muted">(Includes 10% tax)</small>
        </div>

        <div className="d-flex justify-content-between mt-4">
          <Button variant="outline-secondary" onClick={prevStep}>
            Back
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Place Order
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CheckoutStep3;