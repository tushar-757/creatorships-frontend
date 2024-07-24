import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


function Header() {

  const navigate = useNavigate();
  const goToPage = (page) => {
        switch (page) {
            case 'home':
                navigate('/home');
                break;
                case 'creator':
                navigate('/creator');
                break;
            case 'business':
                navigate('/business');
                break;
             case 'partnership':
                navigate('/partnership');
                break;
            default:
                break;
        }
    }
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">CreatorShip</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => goToPage('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => goToPage('creator')}>Creator</Nav.Link>
            <Nav.Link onClick={() => goToPage('business')}>Business</Nav.Link>
            <Nav.Link onClick={() => goToPage('partnership')}>Partnership</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;