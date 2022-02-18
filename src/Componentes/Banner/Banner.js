//styles
import '../Banner/banner.css'
import { Button, Nav} from 'react-bootstrap';

const Banner = () => {
    return (
        <header id='inicio'>
            <div className='banner'>
            <h1 className='title-banner'>Bentonita</h1>
            <h2 className='subtitle-banner'>Venta de bentonita por mayor</h2>
            <Nav.Link href="#contacto"><Button variant="secondary" size="lg" className='button-compra-bentonita'>
                 CONSULTAR
             </Button></Nav.Link>
            </div>
        </header>
    );
};

export default Banner;