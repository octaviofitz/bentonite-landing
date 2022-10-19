//styles
import '../Propiedades/propiedades.css'

const Propiedades = () => {
    return (
        <section className='propiedades' id='propiedades'>
            <div>
            <h2 className='title-propiedades'>PROPIEDADES DE LA BENTONITA</h2>
            </div>
            <div className='cards-propiedades'>

                <div className='cards'>
                    <img src='/assets/propiedades/propiedad1.png' alt='absorcion' className='img-card'/>
                    <h3 className='title-cards'>Absorción</h3>
                    <span className='data-cards'>La bentonita, con predominio de cationes de sodio, permite que el agua penetre a través de las plaquetas, provocando hinchazón</span>
                </div>

                <div className='cards'>
                    <img src='/assets/propiedades/piedraAglomerante.png' alt='aglomerante' className='img-card'/>
                    <h3 className='title-cards'>Aglomerante</h3>
                    <span className='data-cards'>Cuando el agua es absorbida por la bentonita, se forma un gel semisólido con fuerte resistencia a la presión hidrostática.</span>
                </div>

                <div className='cards'>
                    <img src='/assets/propiedades/purificacion.png' alt='adsorcion' className='img-card'/>
                    <h3 className='title-cards'>Adsorción</h3>
                    <span className='data-cards'>Realiza un proceso efectivo para el tratamiento de aguas residuales contaminadas. Permite la eliminación de micotoxinas</span>
                </div>

            </div>
            
        </section>
    );
};

export default Propiedades;