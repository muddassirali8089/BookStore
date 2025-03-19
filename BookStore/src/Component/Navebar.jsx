import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'; 
import SignIn from '../assets/SignIn.png'; 
import '../Component/Navebar.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary naveBody" >
      <Container className="custom-container">
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" style={{ width: "185px", height: "51px" }} className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto  d-flex align-items-center  "> {/* Centering links vertically */}
            <Nav.Link href="#home" className="nav-link-gap">Home</Nav.Link>
            <Nav.Link href="#link"className="nav-link-gap">About us</Nav.Link>
            <Nav.Link href="#home"className="nav-link-gap">Courses</Nav.Link>
            <Nav.Link href="#link"className="nav-link-gap">Our service</Nav.Link>
            <Nav.Link href="#link"className="nav-link-gap">Contact us</Nav.Link>
            <Nav.Link href="#link">
              <img src={SignIn} alt="Sign In" style={{ width: "120px", height: "40px" }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
