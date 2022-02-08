import '../Banner/banner.css'
import { Button } from 'react-bootstrap';


const Banner = () => {
    return (
        <header id='inicio'>
            <div className='banner'>
            <h1 className='title-banner'>Bentonita</h1>
            <h2 className='subtitle-banner'>Fina bentonita patagónica</h2>
            <a href="https://api.whatsapp.com/send?phone=+541132762324&text=Hola, estoy interesado en adquirir bentonita." target='_blank' rel="noreferrer noopener"><Button variant="secondary" size="lg" className='button-compra-bentonita'>
                 COMPRAR
             </Button></a>
            </div>
        </header>
    );
};

export default Banner;