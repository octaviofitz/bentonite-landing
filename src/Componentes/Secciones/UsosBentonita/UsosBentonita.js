import '../UsosBentonita/usosBentonita.css'

const UsosBentonita = () => {
    return (
        <section>
            <div className='container-usos'>
             <div>
            <h2 className='title-usos'>Diferentes usos</h2>
            <p className='description-usos'>Las características especiales de la bentonita (expansión, absorción de agua, viscosidad, tixotropía) permiten el uso de este material en un amplio rango de sectores industriales y aplicaciones.</p>
            </div>
            <div className='container-usos-data'>
                <div className='cards-usos'>
                    <img src='/assets/usos/arenaAglutinante.png' alt='usos1' className='img-card-usos'/>
                    <h3 className='title-cards-usos'>Arena sanitaria</h3>
                </div>

                <div className='cards-usos'>
                    <img src='/assets/usos/construccion.png' alt='usos2' className='img-card-usos'/>
                    <h3 className='title-cards-usos'>Construcción</h3>
                </div>

                <div className='cards-usos'>
                    <img src='/assets/usos/makeup.png' alt='usos3' className='img-card-usos'/>
                    <h3 className='title-cards-usos'>Cosmética</h3>
                </div>
            </div>
            </div>
        </section>
    );
};

export default UsosBentonita;