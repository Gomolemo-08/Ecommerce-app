import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow">
            <Card.Body className="p-5">
              <h2 className="text-center mb-4">User Profile</h2>
              <div className="text-center mb-4">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '100px', height: '100px' }}>
                  <span className="text-white fs-3">{user?.name?.charAt(0)}</span>
                </div>
              </div>
              
              <Row className="mb-3">
                <Col sm={4}>
                  <strong>Name:</strong>
                </Col>
                <Col sm={8}>
                  {user?.name}
                </Col>
              </Row>
              
              <Row className="mb-3">
                <Col sm={4}>
                  <strong>Email:</strong>
                </Col>
                <Col sm={8}>
                  {user?.email}
                </Col>
              </Row>
              
              <Row className="mb-3">
                <Col sm={4}>
                  <strong>Account Type:</strong>
                </Col>
                <Col sm={8}>
                  <span className={`badge ${user?.role === 'admin' ? 'bg-danger' : 'bg-secondary'}`}>
                    {user?.role}
                  </span>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;