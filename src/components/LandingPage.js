// LandingPage.js or your component file
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Import your custom CSS file
import Header from './Header';

const LandingPage = () => {
     const navigate = useNavigate();
    const goToPage = (page) => {
        switch (page) {
            case 'login':
                navigate('/login');
                // window.location.href = '/login';
                break;
            case 'register':
                navigate('/register');
                break;
            case 'landing':
                navigate('/home');
                break;
            default:
                break;
        }
    }
  return (
    <div className="wrapper" >
      <header>
        <Header/>
        <Container>
             <Row className="align-items-center justify-content-between">
                <Col>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS49dYQJgpQumvYC8MXSHmYVNPTShBW0JFtxg&s"
                    alt="Creatorships Logo"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                </Col>
                <Col className="text-right">
                <Button variant="primary" onClick={() => goToPage('login')}>Login</Button>{' '}
                <Button variant="outline-primary" onClick={() => goToPage('register')}>Register</Button>
                </Col>
            </Row>
        </Container>
      </header>

      <section className="hero-section">
        <Container>
          <Row>
            <Col>
              <h1>Empowering Creators and Businesses</h1>
              <p>Turn attention into long-term returns with Creatorships.</p>
              <br/>
              <Button variant="primary" onClick={() => goToPage('landing')}>Get Started</Button>
            </Col>
            <Col>
              {/* Hero image or illustration */}
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS49dYQJgpQumvYC8MXSHmYVNPTShBW0JFtxg&s" alt="Hero Image" />
            </Col>
          </Row>
        </Container>
      </section>
       <br/>
      <section className="features-section">
        <Container>
          <Row>
            <Col>
              <h2>Key Features</h2>
              <ul>
                <li>Create equity-based partnerships</li>
                <li>Analytics dashboard for insights</li>
                <li>Manage partnerships efficiently</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
<br/>
<br/>
      <footer>
        <Container>
          <Row>
            <Col>
              <p>Contact Us: contact@creatorships.com</p>
            </Col>
            <Col className="text-right">
              <ul>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default LandingPage;
