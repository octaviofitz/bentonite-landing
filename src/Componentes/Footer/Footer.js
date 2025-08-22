//styles
import '../Footer/footer.css'
//scroll
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className='footer'> 
        <div className='container-footer'>
        <div>
            <img src='/assets/banner/logo.webp' alt='bentonita certificada' className='logo' />
            </div>
            <div>
            <div className='footer-container-lista'>
              <Link activeClass="active" to="inicio" smooth={true} duration={1200}>  <li className='footer-lista'>Inicio</li> </Link>
              <Link activeClass="active" to="propiedades" smooth={true} duration={1200}>  <li className='footer-lista'>Propiedades</li> </Link>
              <Link activeClass="active" to="documental" smooth={true} duration={1200}>  <li className='footer-lista'>Documental</li> </Link>
              <Link activeClass="active" to="contacto" smooth={true} duration={1200}>  <li className='footer-lista'>Contacto</li> </Link>
            </div>
            </div>
            <div>
            <div className='footer-container-iconos'>
                <li className='footer-iconos'> <a href="https://api.whatsapp.com/send?phone=+5491138069397&text=Hola, vengo aquí a través de la web de bentonita" target='_blank' rel="noreferrer noopener"><i className="fab fa-whatsapp"></i></a></li>
                <li className='footer-iconos'><a href='http://minerpat.com.ar/inicio.html' target='_blank' rel="noreferrer noopener"><i className="fas fa-globe-americas"></i></a></li>
                <li className='footer-iconos'><a href='https://www.google.com/maps/place/Minerales+Patagonicos+SA/@-38.9239238,-67.9654662,17z/data=!3m1!4b1!4m6!3m5!1s0x960a3097711add75:0x8a27f215744e886d!8m2!3d-38.9239238!4d-67.9654662!16s%2Fg%2F119typ5ln?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D' target='_blank' rel="noreferrer noopener"><i className="fas fa-map-marker-alt"></i></a></li>
            </div>
            </div>
            </div>
            
            <p className='footer-copyright'>Todos los derechos reservados - 2025</p>
        </footer>
    );
};

export default Footer;