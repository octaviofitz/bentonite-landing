import { Navbar, Container, Nav } from 'react-bootstrap';
import '../NavBar/navBar.css'

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand href="#inicio" className='logo'>Bentonita</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Nav.Link href="#propiedades">Propiedades</Nav.Link>
      <Nav.Link href="#usos">Usos</Nav.Link>
      <Nav.Link href="#contacto">Contacto</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default NavBar;