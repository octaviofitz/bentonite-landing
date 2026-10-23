import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';


import './navBar.css';

// Compensa la altura del navbar fijo al hacer scroll a cada sección
const OFFSET = -70;

const LINKS = [
  { to: 'propiedades', texto: 'Propiedades' },
  { to: 'documental', texto: 'Documental' },
  { to: 'marcas', texto: 'Marcas' },
];

function BasicExample() {
  const [expandido, setExpandido] = useState(false);
  const [conScroll, setConScroll] = useState(false);

  // Agrega sombra al navbar cuando se baja de la parte superior
  useEffect(() => {
    const alScrollear = () => setConScroll(window.scrollY > 10);
    alScrollear();
    window.addEventListener('scroll', alScrollear, { passive: true });
    return () => window.removeEventListener('scroll', alScrollear);
  }, []);

  const cerrar = () => setExpandido(false);

  return (
<Navbar
  expand="lg"
  sticky="top"
  expanded={expandido}
  onToggle={setExpandido}
  className={`navbar-light navbar-bentonita ${conScroll ? 'con-scroll' : ''}`}
>
  <Container>
        <Navbar.Brand href="#home" className='navbar-brand'><img src='/assets/banner/logo.webp' alt='bentonita certificada' className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle-bentonita' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            {LINKS.map((link) => (
              <Link key={link.to} activeClass="active" to={link.to} spy={true} smooth={true} offset={OFFSET} duration={1200} className='link' onClick={cerrar}>{link.texto}</Link>
            ))}
            <Link to="contacto" smooth={true} offset={OFFSET} duration={1200} className='boton-navbar' onClick={cerrar}>Contacto</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
