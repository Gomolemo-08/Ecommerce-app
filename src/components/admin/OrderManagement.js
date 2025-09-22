import React from 'react';
import { Card, Table, Badge } from 'react-bootstrap';

const OrderManagement = () => {
  const orders = [
    { id: 1, customer: 'John Doe', date: '2023-04-15', total: 159.99, status: 'Completed' },
    { id: 2, customer: 'Jane Smith', date: '2023-04-14', total: 249.99, status: 'Processing' },
    { id: 3, customer: 'Bob Johnson', date: '2023-04-13', total: 79.99, status: 'Shipped' },
  ];

  const getStatusVariant = (status) => {
    switch (status) {
      case 'Completed': return 'success';
      case 'Processing': return 'warning';
      case 'Shipped': return 'info';
      default: return 'secondary';
    }
  };

  return (
    <div>
      <h2 className="mb-4">Order Management</h2>
      <Card>
        <Card.Body>
          <Table responsive>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>#{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.date}</td>
                  <td>${order.total}</td>
                  <td>
                    <Badge bg={getStatusVariant(order.status)}>
                      {order.status}
                    </Badge>
                  </td>
                  <td>
                    <button className="btn btn-outline-primary btn-sm">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OrderManagement;