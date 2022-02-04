import '../CompraBentonita/compraBentonita.css'
import { Button } from 'react-bootstrap';

const CompraBentonita = () => {
    return (
        <section className='compra-bentonita' id='contacto'>
            <h3 className='compra-bentonita-title'>Comprar Bentonita</h3>
            <p className='compra-bentonita-data'>Contamos con la experiencia y la logística para enviar el producto por vía terrestre, marítima y ferroviaria.</p>
            <p className='compra-bentonita-data'>¡Contactanos!</p>
            <a href="https://api.whatsapp.com/send?phone=+541132762324&text=Hola, estoy interesado en adquirir bentonita." target='_blank'><Button variant="secondary" size="lg" className='button-compra-bentonita'>
                 Enviar mensaje
             </Button></a>
        </section>
    );
};

export default CompraBentonita;