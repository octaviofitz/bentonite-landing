//styles
import '../CompraProductos/compraProductos.css'
import { Button } from 'react-bootstrap';
//youtube lite dependencie
import { ReactYouTubeLite } from 'react-youtube-lite';

const CompraProductos = () => {
    return (
        <section className='compra-productos'>
            <div className='container-compra-productos'>
                <div className='container-data-general'>
                <h3 className='compra-productos-title'>COMPRAR PRODUCTOS</h3>
            <p className='compra-productos-data'>Realizamos distribución de <b> productos a base de bentonita.</b></p>
            <p className='compra-productos-data'>¿Te interesa vender nuestros productos en tu región?</p>
            <p className='compra-productos-data'>¡Contactanos!</p>
                </div>
                <div className='container-video-boton'>
                <ReactYouTubeLite 
                url="https://www.youtube.com/embed/JX1jSK4-eIw?controls=0"
                noCookie= {true}
                title="Rubicat Arena"
                />
                <a href="https://api.whatsapp.com/send?phone=+541132762324&text=Hola, estoy interesado en adquirir productos a base de bentonita." target='_blank' rel="noreferrer noopener"><Button variant="secondary" size="lg" className='button-compra-productos'>
                 Comprar
             </Button></a>
                </div>
            
            
             </div>
        </section>
    );
};

export default CompraProductos;