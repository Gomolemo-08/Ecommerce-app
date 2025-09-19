import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Image, Button, Badge, Alert } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

// Move products array outside the component to make it static
const products = [
  { 
    id: 1, 
    name: "Wireless Headphones", 
    price: 99.99, 
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    ],
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation. Perfect for music lovers and professionals.",
    features: ["Noise Cancellation", "30-hour battery", "Bluetooth 5.0", "Comfortable ear cushions"],
    inStock: 15,
    reviews: [
      { user: "Alex Johnson", rating: 5, comment: "Best headphones I've ever owned!" },
      { user: "Maria Garcia", rating: 4, comment: "Great sound quality, comfortable for long periods." }
    ]
  },
  { 
    id: 2, 
    name: "Running Shoes", 
    price: 79.99, 
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    ],
    category: "Footwear",
    description: "Comfortable running shoes with extra cushioning for long runs. Designed for maximum performance.",
    features: ["Lightweight", "Breathable mesh", "Extra cushioning", "Durable sole"],
    inStock: 20,
    reviews: [
      { user: "Tom Wilson", rating: 5, comment: "Perfect for my daily runs!" },
      { user: "Sarah Miller", rating: 4, comment: "Very comfortable, but runs a bit small." }
    ]
  },
  { 
    id: 3, 
    name: "Smart Watch", 
    price: 199.99, 
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    ],
    category: "Electronics",
    description: "Feature-rich smartwatch with health monitoring, notifications, and long battery life.",
    features: ["Heart rate monitor", "Sleep tracking", "Water resistant", "7-day battery"],
    inStock: 8,
    reviews: [
      { user: "James Taylor", rating: 5, comment: "Excellent features and battery life!" },
      { user: "Lisa Brown", rating: 4, comment: "Great watch, but the app could be better." }
    ]
  },
  { 
    id: 4, 
    name: "Coffee Maker", 
    price: 49.99, 
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    ],
    category: "Home & Kitchen",
    description: "Programmable coffee maker with thermal carafe to keep your coffee hot for hours.",
    features: ["Programmable", "Thermal carafe", "12-cup capacity", "Auto-shutoff"],
    inStock: 12,
    reviews: [
      { user: "Robert Davis", rating: 5, comment: "Makes perfect coffee every time!" },
      { user: "Jennifer Wilson", rating: 4, comment: "Good coffee maker, but carafe could be better." }
    ]
  },
  { 
    id: 5, 
    name: "Backpack", 
    price: 39.99, 
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    ],
    category: "Fashion",
    description: "Durable backpack with multiple compartments, laptop sleeve, and water-resistant material.",
    features: ["Laptop compartment", "Water-resistant", "Multiple pockets", "Comfortable straps"],
    inStock: 18,
    reviews: [
      { user: "Michael Clark", rating: 5, comment: "Perfect for school and travel!" },
      { user: "Emily Rodriguez", rating: 4, comment: "Good quality, but could use more color options." }
    ]
  },
  { 
    id: 6, 
    name: "Fitness Tracker", 
    price: 59.99, 
    images: [
      "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    ],
    category: "Electronics",
    description: "Activity tracker with heart rate monitoring, sleep tracking, and smartphone notifications.",
    features: ["Step counter", "Heart rate monitor", "Sleep tracking", "Smartphone notifications"],
    inStock: 10,
    reviews: [
      { user: "David Martinez", rating: 5, comment: "Great value for the price!" },
      { user: "Jessica Lee", rating: 4, comment: "Accurate tracking, but battery life could be better." }
    ]
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Find the product by ID
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]); // Now only depends on id, not products

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    navigate('/cart');
  };

  if (!product) {
    return (
      <Container className="py-5">
        <Alert variant="danger">
          <Alert.Heading>Product Not Found</Alert.Heading>
          <p>The product you are looking for does not exist.</p>
          <Button variant="primary" onClick={() => navigate('/products')}>
            Back to Products
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <div className="mb-4">
            <Image 
              src={product.images[selectedImage]} 
              fluid 
              className="rounded shadow main-product-image"
              style={{ height: '400px', objectFit: 'cover', width: '100%' }}
            />
          </div>
          <div className="d-flex gap-2">
            {product.images.map((img, index) => (
              <div 
                key={index} 
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
                style={{ cursor: 'pointer' }}
              >
                <Image 
                  src={img} 
                  thumbnail 
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </Col>
        <Col md={6}>
          <Badge bg="secondary" className="mb-2">{product.category}</Badge>
          <h1>{product.name}</h1>
          <h3 className="text-primary mb-3">${product.price}</h3>
          
          <div className="mb-4">
            <h5>Description</h5>
            <p>{product.description}</p>
          </div>
          
          <div className="mb-4">
            <h5>Features</h5>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-4">
            <h5>Quantity</h5>
            <div className="d-flex align-items-center">
              <Button 
                variant="outline-secondary" 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <span className="mx-3 fs-5">{quantity}</span>
              <Button 
                variant="outline-secondary" 
                onClick={() => setQuantity(quantity + 1)}
                disabled={quantity >= product.inStock}
              >
                +
              </Button>
              <span className="ms-3 text-muted">
                {product.inStock} available in stock
              </span>
            </div>
          </div>
          
          <div className="d-grid gap-2">
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleAddToCart}
              disabled={product.inStock === 0}
            >
              {product.inStock > 0 ? `Add ${quantity} to Cart` : 'Out of Stock'}
            </Button>
            <Button variant="outline-secondary" onClick={() => navigate('/products')}>
              Back to Products
            </Button>
          </div>
        </Col>
      </Row>
      
      {/* Reviews Section */}
      <Row className="mt-5">
        <Col>
          <h4>Customer Reviews</h4>
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((review, index) => (
              <div key={index} className="card mb-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title">{review.user}</h5>
                    <div>
                      {[...Array(5)].map((_, i) => (
                        <i 
                          key={i} 
                          className={`bi ${i < review.rating ? 'bi-star-fill text-warning' : 'bi-star'}`}
                        ></i>
                      ))}
                    </div>
                  </div>
                  <p className="card-text">{review.comment}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;