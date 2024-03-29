//styles
import '../Certificacion/certificacion.css'

const Certificacion = () => {
    return (
        <section>
            <div className='container-certificacion'>
                <div>
                    <h3 className='titulo-certificacion'>CERTIFICACIÓN</h3>
                </div>
                <div className='container-certificacion-imagenes'> 
                <img src='/assets/certificacion/iram.png' alt='iram' className='img-certificacion' id='img-iram'/>
                <img src='/assets/certificacion/senasa2.webp' alt='senasa' className='img-certificacion' />
                </div>
            </div>
        </section>
    );
};

export default Certificacion;