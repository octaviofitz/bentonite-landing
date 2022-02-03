import '../Informacion/informacion.css'

const Informacion = () => {
    return (
        <section>
            <div className='container-seccion-informacion'>
            <div className='container-informacion'>
            <img src='/assets/landing/bentonita.jpg' alt='informacion-bentonita' className='img-informacion' />
            </div>
            <div className='container-data-informacion'>
                <h3 className='title-informacion'>La mejor bentonita del mercado</h3>
                <p className='data-informacion'>Nuestro compromiso con la calidad es integral, desde la explotación sustentable del recurso hasta la satisfacción total del cliente con nuestros productos y servicios.</p>
                <p className='data-informacion'>Más de 30 años en el mercado nos avalan.</p>
            </div>
            </div>
        </section>
    );
};

export default Informacion;