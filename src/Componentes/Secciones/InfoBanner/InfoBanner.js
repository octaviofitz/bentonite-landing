import '../InfoBanner/infoBanner.css'

const InfoBanner = () => {
    return (
        <section>
             <div className='container-data'>
                <p className='texto-explicativo-blanco'> La bentonita es una roca compuesta por más de un tipo de minerales, aunque son las esmectitas sus constituyentes esenciales y las que le confieren sus particulares características.
                </p>
                <p className='texto-explicativo-azul'>Fue descubierta en 1888 y su nombre se debe al lugar donde fueron encontradas, en Fort Benton, Wyoming, Estados Unidos. Desde entonces se ha comercializado por todo el mundo.</p>
                </div>
                <div>
                <p className='texto-explicativo-blanco'>Lo especial de este material es que tiene una gran capacidad de absorción y puede aglutinar bien los contaminantes de todo tipo. Debido a sus propiedades, es utilizada en diferentes sectores de la industria.</p>
            </div>
        </section>
    );
};

export default InfoBanner;