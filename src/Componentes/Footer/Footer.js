import '../Footer/footer.css'

const Footer = () => {
    return (
        <footer className='footer'> 
        <div className='container-footer'>
        <div>
            <p className='footer-title'>Bentonita</p>
            </div>
            <div>
            <div className='footer-container-lista'>
                <li className='footer-lista'>Inicio</li>
                <li className='footer-lista'>Propiedades</li>
                <li className='footer-lista'>Contacto</li>
                <li className='footer-lista'>Usos</li>
            </div>
            </div>
            <div>
            <div className='footer-container-iconos'>
                <li className='footer-iconos'><i className="fab fa-whatsapp"></i></li>
                <li className='footer-iconos'><i className="fas fa-globe-americas"></i></li>
                <li className='footer-iconos'><i className="fas fa-map-marker-alt"></i></li>
            </div>
            </div>
            </div>
            
            <p className='footer-copyright'>Todos los derechos reservados - 2022</p>
        </footer>
    );
};

export default Footer;