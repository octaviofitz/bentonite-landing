//styles
import '../Footer/footer.css'
//scroll
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className='footer'> 
        <div className='container-footer'>
        <div>
            <p className='footer-title'>BENTONITA</p>
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
                <li className='footer-iconos'> <a href="https://api.whatsapp.com/send?phone=+541132762324&text=Hola, vengo aquí a través de la web de bentonita" target='_blank' rel="noreferrer noopener"><i className="fab fa-whatsapp"></i></a></li>
                <li className='footer-iconos'><a href='https://www.rubicat.com.ar' target='_blank' rel="noreferrer noopener"><i className="fas fa-globe-americas"></i></a></li>
                <li className='footer-iconos'><a href='https://www.google.com/maps/place/Rubicat/@-34.7842268,-58.4247492,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcd30f9cec06ed:0x462185e1b045681f!8m2!3d-34.7842312!4d-58.4225605' target='_blank' rel="noreferrer noopener"><i className="fas fa-map-marker-alt"></i></a></li>
            </div>
            </div>
            </div>
            
            <div className='footer-container-derechos-web'>
            <p className='footer-copyright'>© Todos los derechos reservados - 2023</p>
            <a href='https://www.galide.com.ar' target='_blank' rel="noreferrer noopener"><p className='web'>Web desarrollada por <span className='galide'>GALIDÉ</span></p></a>
          
            </div>
        </footer>
    );
};

export default Footer;