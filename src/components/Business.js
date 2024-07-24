import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col,Button } from 'react-bootstrap'; // Assuming you're using React Bootstrap
import axios from 'axios'; // For making HTTP requests
import Header from './Header';

const BusinessCard = ({ business }) => {
  const { user, companyName, industry, website, description } = business;

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{companyName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{industry}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <strong>Website:</strong> <a href={website} target="_blank" rel="noopener noreferrer">{website}</a>
        </Card.Text>
        <Button variant="primary" block>Contact {user.username}</Button>
      </Card.Body>
    </Card>
  );
};



const BusinessesPage = () => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/business/all'); // Replace with your actual API endpoint
        setBusinesses(response.data);
      } catch (error) {
        console.error('Error fetching businesses:', error);
      }
    };

    fetchBusinesses();
  }, []);

  return (
    <Container>
      <Header />
      <h1 className="mt-4 mb-4">Businesses List</h1>
      <Row>
        {businesses.map((business) => (
          <Col key={business._id} md={4} className="mb-4">
            <BusinessCard business={business} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BusinessesPage;