import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Products = () => {
  const { addItem } = useCart();
  
  // Complete product data with all 6 products
  const products = [
    { 
      id: 1, 
      name: "Wireless Headphones", 
      price: 99.99, 
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Electronics"
    },
    { 
      id: 2, 
      name: "Running Shoes", 
      price: 79.99, 
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Footwear"
    },
    { 
      id: 3, 
      name: "Smart Watch", 
      price: 199.99, 
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Electronics"
    },
    { 
      id: 4, 
      name: "Coffee Maker", 
      price: 49.99, 
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Home & Kitchen"
    },
    { 
      id: 5, 
      name: "Backpack", 
      price: 39.99, 
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Fashion"
    },
    { 
      id: 6, 
      name: "Fitness Tracker", 
      price: 59.99, 
      image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Electronics"
    }
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Our Products</h2>
      <Row>
        {products.map(product => (
          <Col md={6} lg={4} className="mb-4" key={product.id}>
            <Card className="h-100 card-product">
              <Link to={`/product/${product.id}`}>
                <Card.Img 
                  variant="top" 
                  src={product.image} 
                  className="product-img"
                  style={{ objectFit: 'cover', height: '250px', cursor: 'pointer' }}
                />
              </Link>
              <Card.Body className="d-flex flex-column">
                <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                  <Card.Title>{product.name}</Card.Title>
                </Link>
                <div className="mb-2">
                  <span className="badge bg-secondary">{product.category}</span>
                </div>
                <Card.Text className="text-muted fs-5 fw-bold">
                  ${product.price}
                </Card.Text>
                <div className="d-flex gap-2 mt-auto">
                  <Button 
                    variant="primary" 
                    className="flex-grow-1"
                    onClick={() => addItem(product)}
                  >
                    <i className="bi bi-cart-plus me-2"></i> Add to Cart
                  </Button>
                  <Button 
                    variant="outline-primary"
                    as={Link}
                    to={`/product/${product.id}`}
                  >
                    <i className="bi bi-eye"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;