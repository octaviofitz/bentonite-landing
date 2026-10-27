//styles
import '../UsosBentonita/usosBentonita.css'
//components
import CarruselDesktop from '../Carruseles/CarruselDesktop/CarruselDesktop';
import CarruselMobile from '../Carruseles/CarruselMobile/CarruselMobile';
import GrillaUsos from '../GrillaUsos/GrillaUsos';


const UsosBentonita = () => {
    return (
        <section id='usos'>
            <div className='container-usos fondo-celeste burbujas burbujas-claras burbujas-invertidas'>
             <div>
            <h3 className='title-usos'>DIFERENTES USOS DEL MATERIAL</h3>
            <p className='description-usos'>Las características especiales de la bentonita sódica (expansión, absorción de agua, viscosidad, tixotropía) permiten el uso de este recurso en un amplio rango de sectores industriales y aplicaciones.</p>
            </div>
            <div className='container-usos-data'>
               
                <div id='carrusel-mobile'>
                    <CarruselMobile />
                </div>
                <div id='carrusel-desktop' >
                <CarruselDesktop />
                </div>
                <div id='grilla-usos-desktop'>
                    <GrillaUsos />
                </div>
            </div>
            </div>
        </section>
    );
};

export default UsosBentonita;