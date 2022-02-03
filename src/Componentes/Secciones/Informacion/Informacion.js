import '../Informacion/informacion.css'

const Informacion = () => {
    return (
        <section>
            <div className='container-seccion-informacion'>
            <div className='container-informacion'>
            <img src='/assets/landing/bentonita.jpg' alt='informacion-bentonita' className='img-informacion' />
            </div>
            <div className='container-data-informacion'>
                <h3 className='title-informacion'>Visión</h3>
                <p className='data-informacion'>Somos una empresa líder e innovadora en la producción y comercialización de bentonita sódica natural y sus productos tecnológicos, preservando el recurso mineral y el medio ambiente..</p>
            </div>
            </div>
        </section>
    );
};

export default Informacion;