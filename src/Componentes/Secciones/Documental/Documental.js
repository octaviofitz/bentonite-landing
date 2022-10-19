//styles
import '../Documental/documental.css'
import { ReactYouTubeLite } from 'react-youtube-lite';

const Documental = () => {
    return (
        <section className='documental'>    
            <div className='container-documental'>
                
                <div className='texto-container' id='documental'>
                <h1 className='titulo-documental'>DOCUMENTAL BENTONITA</h1>
                      <p className='texto-documental'>Con el fin de retratar el detrás de escena, realizamos un documental en el cual se pueden observar todos los procesos que atraviesa la bentonita en nuestra planta: desde su extracción hasta el traslado para que la reciban los diferentes clientes</p>  
                </div>

                <div className='container-video-documental'>
                <ReactYouTubeLite 
                url="https://www.youtube.com/watch?v=LXJ5RciRPPU"
                noCookie= {true}
                title="Do"
                />
                </div>

            </div>
             
     </section>

    )
};

export default Documental;