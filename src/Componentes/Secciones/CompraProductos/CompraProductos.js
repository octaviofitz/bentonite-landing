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
                <h3 className='compra-productos-title'>Distribuimos productos a base de bentonita</h3>
            <p className='compra-productos-data'>¿Querés ofrecerlos en tu zona?</p>
            <p className='compra-productos-data'>Sumate como distribuidor y accedé a precios especiales</p>
            <a href="https://api.whatsapp.com/send?phone=+5492215898698&text=Hola, estoy interesado en adquirir productos a base de bentonita." target='_blank' rel="noreferrer noopener"><Button variant="secondary" size="lg" className='button-compra-productos'>
                 Comprar
             </Button></a>
                </div>
                <div className='container-video-boton'>
                <ReactYouTubeLite 
                url="https://www.youtube.com/embed/JX1jSK4-eIw?controls=0"
                noCookie= {true}
                title="Rubicat Arena"
                />
                </div>
            
            
             </div>
        </section>
    );
};

export default CompraProductos;