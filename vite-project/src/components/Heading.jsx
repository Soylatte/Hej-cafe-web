import { Link ,useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Heading() {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
    <Navbar bg="light" data-bs-theme="light">
        <Container className='container'>
          <Navbar.Brand as={Link} to='/'>Hej</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{
              handleNavigate('./about')
            }}>ABOUT</Nav.Link>
            <Nav.Link onClick={()=>{
              handleNavigate('./menu')
            }}>MENU</Nav.Link>
            <Nav.Link onClick={()=>{
              handleNavigate('./regulars')
            }}>REGULARS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}

export default Heading;