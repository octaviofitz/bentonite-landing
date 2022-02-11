import '../CompraProductos/compraProductos.css'
import { Button } from 'react-bootstrap';

const CompraProductos = () => {
    return (
        <section className='compra-productos'>
            <div className='container-compra-productos'>
                <div className='container-data-general'>
                <h3 className='compra-productos-title'>Comprar productos</h3>
            <p className='compra-productos-data'>Realizamos distribución de <b> productos a base de bentonita.</b></p>
            <p className='compra-productos-data'> ¿Te interesa vender nuestros productos en tu país?</p>
            <p className='compra-productos-data'>¡Contactanos!</p>
                </div>
                <div className='container-video-boton'>
                <iframe id='video-rubicat' height="315" src="https://www.youtube.com/embed/JX1jSK4-eIw?controls=0" title="Rubicat Arena" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <a href="https://api.whatsapp.com/send?phone=+541132762324&text=Hola, estoy interesado en adquirir productos a base de bentonita." target='_blank' rel="noreferrer noopener"><Button variant="secondary" size="lg" className='button-compra-productos'>
                 Comprar
             </Button></a>
                </div>
            
            
             </div>
        </section>
    );
};

export default CompraProductos;