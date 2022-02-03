import { Navbar, Container, Nav } from 'react-bootstrap';
import '../NavBar/navBar.css'

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand href="#home" className='logo'>Bentonita</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Propiedades</Nav.Link>
      <Nav.Link href="#deets">Usos</Nav.Link>
      <Nav.Link href="#deets">Contacto</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default NavBar;