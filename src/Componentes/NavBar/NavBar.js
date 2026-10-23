import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';


import './navBar.css';

const LINKS = [
  { to: 'propiedades', texto: 'Propiedades' },
  { to: 'documental', texto: 'Documental' },
  { to: 'marcas', texto: 'Marcas' },
];

function BasicExample() {
  const [expandido, setExpandido] = useState(false);

  const cerrar = () => setExpandido(false);

  return (
<Navbar
  expand="lg"
  expanded={expandido}
  onToggle={setExpandido}
  className='navbar-light navbar-bentonita'
>
  <Container>
        <Navbar.Brand href="#home" className='navbar-brand'><img src='/assets/banner/logo.webp' alt='bentonita certificada' className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle-bentonita' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            {LINKS.map((link) => (
              <Link key={link.to} activeClass="active" to={link.to} spy={true} smooth={true} duration={1200} className='link' onClick={cerrar}>{link.texto}</Link>
            ))}
            <Link to="contacto" smooth={true} duration={1200} className='boton-navbar' onClick={cerrar}>Contacto</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
