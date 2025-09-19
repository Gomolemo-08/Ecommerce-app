import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap'; // Removed Card import
import ProductManagement from './ProductManagement';
import OrderManagement from './OrderManagement';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <Container fluid className="py-4">
      <Row>
        <Col md={3} lg={2} className="bg-light sidebar py-3">
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link 
                active={activeTab === 'products'} 
                onClick={() => setActiveTab('products')}
              >
                Products
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                active={activeTab === 'orders'} 
                onClick={() => setActiveTab('orders')}
              >
                Orders
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col md={9} lg={10}>
          {activeTab === 'products' && <ProductManagement />}
          {activeTab === 'orders' && <OrderManagement />}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;