import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-scroll';


import './navBar.css';

function BasicExample() {
  return (
<Navbar expand="lg" className="bg-body-tertiary navbar-light">
  <Container>
        <Navbar.Brand href="#home" className='navbar-brand'><img src='/assets/banner/logo.webp' alt='bentonita certificada' className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link activeClass="active" to="propiedades" smooth={true} duration={1200} className='link'>Propiedades</Link>
            <Link activeClass="active" to="documental" smooth={true} duration={1200} className='link'>Documental</Link>
{/*             <Link activeClass="active" to="propiedades" smooth={true} duration={1200} className='link'>Usos</Link>
 */}            <Link activeClass="active" to="contacto" smooth={true} duration={1200} className='link'>Contacto</Link>
             {/* <NavDropdown title="Usos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Alimentación Animal</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Absorbente Micotoxinas
              </NavDropdown.Item>
            </NavDropdown>  */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;