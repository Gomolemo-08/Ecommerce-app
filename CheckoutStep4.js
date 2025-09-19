import React from 'react';
import { Card, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const CheckoutStep4 = ({ checkoutData }) => {
  const { clearCart } = useCart();

  React.useEffect(() => {
    // Clear cart when confirmation page is shown
    clearCart();
  }, [clearCart]);

  return (
    <Card className="shadow-sm">
      <Card.Body className="text-center">
        <Alert variant="success">
          <Alert.Heading>Order Confirmed!</Alert.Heading>
          <p>Thank you for your order. Your order number is <strong>#ORD-{Math.floor(Math.random() * 10000)}</strong>.</p>
          <p>You will receive an email confirmation shortly.</p>
        </Alert>

        <div className="my-4">
          <h5>Shipping to:</h5>
          <p>
            {checkoutData.shipping.firstName} {checkoutData.shipping.lastName}<br />
            {checkoutData.shipping.address}<br />
            {checkoutData.shipping.city}, {checkoutData.shipping.state} {checkoutData.shipping.zipCode}<br />
            {checkoutData.shipping.country}
          </p>
        </div>

        <div className="d-flex justify-content-center gap-3">
          <Button as={Link} to="/products" variant="primary">
            Continue Shopping
          </Button>
          <Button as={Link} to="/" variant="outline-primary">
            Back to Home
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CheckoutStep4;