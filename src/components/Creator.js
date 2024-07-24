import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col,Button } from 'react-bootstrap'; // Assuming you're using React Bootstrap
import axios from 'axios'; // For making HTTP requests
import Header from './Header';


const CreatorCard = ({ creator }) => {
  const { user, bio, skills, portfolio, socialLinks } = creator;

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={portfolio[0]}  sizes='(20vw, 20vh)'/>
      <Card.Body>
        <Card.Title>{user.username}</Card.Title>
        <Card.Text>{bio}</Card.Text>
        <Card.Text><strong>Skills:</strong> {skills.join(', ')}</Card.Text>
        <Card.Text>
          <strong>Social Links:</strong>
          <ul className="list-unstyled">
            {Object.entries(socialLinks).map(([key, value]) => (
              <li key={key}>
                <a href={value} target="_blank" rel="noopener noreferrer">{key}</a>
              </li>
            ))}
          </ul>
        </Card.Text>
        <Button variant="primary" block>Contact {user.username}</Button>
      </Card.Body>
    </Card>
  );
};



const CreatorsPage = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    // Fetch creators from backend API
    const fetchCreators = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/creator/all'); // Replace with your actual API endpoint
        setCreators(response.data);
      } catch (error) {
        console.error('Error fetching creators:', error);
      }
    };

    fetchCreators();
  }, []);

  return (
    <Container>
     <Header/>
      <h1 className="mt-4 mb-4">Creators List</h1>
      <Row>
         <Row>
        {creators.map((creator) => (
          <Col key={creator._id} md={4} className="mb-4">
            <CreatorCard creator={creator} />
          </Col>
        ))}
      </Row>
      </Row>
    </Container>
  );
};

export default CreatorsPage;
