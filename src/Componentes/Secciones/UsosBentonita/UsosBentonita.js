//styles
import '../UsosBentonita/usosBentonita.css'
//components
import CarruselDesktop from '../Carruseles/CarruselDesktop/CarruselDesktop';
import CarruselMobile from '../Carruseles/CarruselMobile/CarruselMobile';


const UsosBentonita = () => {
    return (
        <section id='usos'>
            <div className='container-usos'>
             <div>
            <h3 className='title-usos'>Diferentes usos del mineral</h3>
            <p className='description-usos'>Las características especiales de la bentonita sódica (expansión, absorción de agua, viscosidad, tixotropía) permiten el uso de este recurso en un amplio rango de sectores industriales y aplicaciones.</p>
            </div>
            <div className='container-usos-data'>
               
                <div id='carrusel-mobile'>
                    <CarruselMobile />
                </div>
                <div id='carrusel-desktop' >
                <CarruselDesktop />
                </div>
            </div>
            </div>
        </section>
    );
};

export default UsosBentonita;