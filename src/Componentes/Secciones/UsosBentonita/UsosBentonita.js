import '../UsosBentonita/usosBentonita.css'

const UsosBentonita = () => {
    return (
        <section>
            <div className='container-usos'>
             <div>
            <h2 className='title-usos'>Usos de la Bentonita</h2>
            <p className='description-usos'>Las características especiales de la bentonita (expansión, absorción de agua, viscosidad, tixotropía) permiten el uso de este material en un amplio rango de sectores industriales y aplicaciones.</p>
            </div>
            <div className='container-usos-data'>
                <div className='cards-usos'>
                    <img src='/assets/usos/gato1.svg' alt='usos1' className='img-card-usos'/>
                    <h3 className='title-cards-usos'>Arena sanitaria aglutinante</h3>
                </div>

                <div className='cards-usos'>
                    <img src='/assets/usos/construccion.svg' alt='usos2' className='img-card-usos'/>
                    <h3 className='title-cards-usos'>Construcción</h3>
                </div>

                <div className='cards-usos'>
                    <img src='/assets/usos/maquillaje.svg' alt='usos3' className='img-card-usos'/>
                    <h3 className='title-cards-usos'>Cosmética</h3>
                </div>

            </div>
            </div>
        </section>
    );
};

export default UsosBentonita;