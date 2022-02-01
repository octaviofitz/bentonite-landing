import '../CompraBentonita/compraBentonita.css'
import { Button } from 'react-bootstrap';

const CompraBentonita = () => {
    return (
        <section className='compra-bentonita'>
            <h3 className='compra-bentonita-title'>Comprar Bentonita</h3>
            <p className='compra-bentonita-data'>Nos encontramos en Argentina </p>
            <p className='compra-bentonita-data'>Contamos con distribución de productos desarrollados a base de bentonita en toda la región. ¿Te interesa distribuir nuestros productos en tu país?</p>
            <p className='compra-bentonita-data'>¡Contactanos!</p>
            <Button variant="secondary" size="lg" className='button-compra-bentonita'>
                 Enviar mensaje
             </Button>
        </section>
    );
};

export default CompraBentonita;