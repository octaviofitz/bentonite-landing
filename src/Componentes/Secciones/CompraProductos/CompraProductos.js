import '../CompraProductos/compraProductos.css'
import { Button } from 'react-bootstrap';

const CompraProductos = () => {
    return (
        <section className='compra-productos'>
            <h3 className='compra-productos-title'>Comprar productos a base de bentonita</h3>
            <p className='compra-productos-data'>Realizamos distribución de productos a base de bentonita.</p>
            <p className='compra-productos-data'> ¿Te interesa vender nuestros productos en tu país?</p>
            <p className='compra-productos-data'>¡Contactanos!</p>
            <a href="https://api.whatsapp.com/send?phone=+541132762324&text=Hola, estoy interesado en adquirir productos a base de bentonita." target='_blank'><Button variant="secondary" size="lg" className='button-compra-productos'>
                 Enviar mensaje
             </Button></a>
        </section>
    );
};

export default CompraProductos;