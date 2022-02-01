import '../Propiedades/propiedades.css'

const Propiedades = () => {
    return (
        <section className='propiedades'>
            <div>
            <h2 className='title-propiedades'>Propiedades de la Bentonita</h2>
            </div>
            <div className='cards-propiedades'>

                <div>
                    <img src='/assets/propiedades/propiedad1.png' alt='propiedad1' className='img-card'/>
                    <h3 className='title-cards'>Absorción</h3>
                    <span className='data-cards'>La bentonita, con predominio de cationes de sodio permite que el agua penetre a través de las plaquetas, provocando hinchazón</span>
                </div>

                <div>
                    <img src='/assets/propiedades/propiedad2.png' alt='propiedad2' className='img-card'/>
                    <h3 className='title-cards'>Impermeabilización</h3>
                    <span className='data-cards'>Cuando el agua es absorbida por la bentonita, se forma un gel semisólido con fuerte resistencia a la presión hidrostática.</span>
                </div>

                <div>
                    <img src='/assets/propiedades/propiedad1.png' alt='propiedad1' className='img-card'/>
                    <h3 className='title-cards'>Viscocidad</h3>
                    <span className='data-cards'>Cuando la bentonita se dispersa en agua, se forman suspensiones coloidales altamente estables con alta viscosidad y tixotropía.</span>
                </div>

            </div>
            
        </section>
    );
};

export default Propiedades;