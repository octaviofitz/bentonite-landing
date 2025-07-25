//styles
import '../Documental/documental.css'
import { ReactYouTubeLite } from 'react-youtube-lite';

const Documental = () => {
    return (
        <section className='documental'>    
          
            <div className='container-documental'>      
                
                <div className='texto-container' id='documental'>
                <h1 className='titulo-documental'>DOCUMENTAL BENTONITA</h1>
                      <p className='texto-documental'>Con el objetivo de mostrar el detrás de escena de nuestro trabajo, realizamos un documental que recorre todo el proceso que atraviesa la bentonita en nuestra planta: desde su extracción y tratamiento, hasta el envasado y la logística para llegar a nuestros clientes. Una mirada auténtica al recorrido completo del producto.</p>  
                </div>

                <div className='container-video-documental'>
                <ReactYouTubeLite 
                url="https://www.youtube.com/watch?v=LXJ5RciRPPU"
                noCookie= {true}
                title="Documental de Bentonita - Minerales patagónicos"
                />
                </div>

            </div>
             
     </section>

    )
};

export default Documental;