import '../CompraBentonita/compraBentonita.css'
import { Button } from 'react-bootstrap';

const CompraBentonita = () => {
    return (
        <section className='compra-bentonita'>
            <h3 className='compra-bentonita-title'>Comprar Bentonita</h3>
            <p className='compra-bentonita-data'>Más de 30 años en el mercado.</p>
            <p className='compra-bentonita-data'>Contamos con la experiencia y la logística para enviar el producto por vía terrestre, marítima y ferroviaria.</p>
            <p className='compra-bentonita-data'>¡Contactanos!</p>
            <Button variant="secondary" size="lg" className='button-compra-bentonita'>
                 Enviar mensaje
             </Button>
        </section>
    );
};

export default CompraBentonita;