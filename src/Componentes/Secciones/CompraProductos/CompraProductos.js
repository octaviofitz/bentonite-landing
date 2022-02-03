import '../CompraProductos/compraProductos.css'
import { Button } from 'react-bootstrap';

const CompraProductos = () => {
    return (
        <section className='compra-productos'>
            <h3 className='compra-productos-title'>Comprar productos a base de bentonita</h3>
            <p className='compra-productos-data'>Contamos con distribución de productos a base de bentonita. ¿Te interesa distribuir nuestros productos en tu país?</p>
            <p className='compra-productos-data'>¡Contactanos!</p>
            <Button variant="secondary" size="lg" className='button-compra-productos'>
                 Enviar mensaje
             </Button>
        </section>
    );
};

export default CompraProductos;