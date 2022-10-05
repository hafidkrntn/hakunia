import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import ClientsAdminPage from '../components/ClientsAdminPage';
import DashboardProduct from '../components/DashboardProduct';
import OrderAdminPage from '../components/OrderAdminPage';
import './AdminDashboard.css';


const AdminDashboard = () => {
  return (
    <Container>
        <Tab.Container defaultActiveKey="products">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="products">Products</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="orders">Orders</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="clients">Clients</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="products">
                            <DashboardProduct />
                        </Tab.Pane>
                        <Tab.Pane eventKey="orders">
                            <OrderAdminPage />
                        </Tab.Pane>
                        <Tab.Pane eventKey="clients">
                            <ClientsAdminPage />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    </Container>
  )
}

export default AdminDashboard