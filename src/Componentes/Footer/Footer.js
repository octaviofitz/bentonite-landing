import '../Footer/footer.css'
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className='footer'> 
        <div className='container-footer'>
        <div>
            <p className='footer-title'>Bentonita</p>
            </div>
            <div>
            <div className='footer-container-lista'>
              <Link activeClass="active" to="inicio" smooth={true} duration={1200}>  <li className='footer-lista'>Inicio</li> </Link>
              <Link activeClass="active" to="propiedades" smooth={true} duration={1200}>  <li className='footer-lista'>Propiedades</li> </Link>
              <Link activeClass="active" to="contacto" smooth={true} duration={1200}>  <li className='footer-lista'>Contacto</li> </Link>
                <Link activeClass="active" to="usos" smooth={true} duration={1200}>  <li className='footer-lista'>Usos</li> </Link>
            </div>
            </div>
            <div>
            <div className='footer-container-iconos'>
                <li className='footer-iconos'> <a href="https://api.whatsapp.com/send?phone=+541132762324&text=Hola😁" target='_blank'><i className="fab fa-whatsapp"></i></a></li>
                <li className='footer-iconos'><a href='http://www.rubicat.com.ar' target='_blank'><i className="fas fa-globe-americas"></i></a></li>
                <li className='footer-iconos'><a href='https://www.google.com/maps/place/Rubicat/@-34.7842268,-58.4247492,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcd30f9cec06ed:0x462185e1b045681f!8m2!3d-34.7842312!4d-58.4225605' target='_blank'><i className="fas fa-map-marker-alt"></i></a></li>
            </div>
            </div>
            </div>
            
            <p className='footer-copyright'>Todos los derechos reservados - 2022</p>
        </footer>
    );
};

export default Footer;