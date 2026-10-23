//styles
import '../NuestrasMarcas/nuestrasMarcas.css'

const marcas = [
    {
        nombre: 'Vulgel',
        logo: '/assets/marcas/vulgel.webp',
        rubro: 'Nutrición animal',
        titulo: 'Secuestrante de micotoxinas',
        descripcion: 'Aglutinante natural de alto rendimiento para bovinos y otras especies.',
        url: 'https://secuestrantemicotoxinas.com.ar/',
        color: '#ff3c00',
    },
    {
        nombre: 'Aglupel Eco',
        logo: '/assets/marcas/aglupel.webp',
        rubro: 'Peletizado',
        titulo: 'Aglutinante para pellet',
        descripcion: 'Natural y de alta cohesión, para un pellet más firme y resistente.',
        url: 'https://peletizado.com.ar/',
        color: '#2d3a2c',
    },
    {
        nombre: 'Rubicat',
        logo: '/assets/marcas/rubicat.webp',
        rubro: 'Mascotas',
        titulo: 'Arena sanitaria',
        descripcion: 'Venta de arena sanitaria para gatos elaborada a base de bentonita.',
        url: 'https://rubicat.com.ar/',
        color: '#00909c',
    },
];

const NuestrasMarcas = () => {
    return (
        <section className='nuestras-marcas fondo-azul burbujas' id='marcas'>
            <div className='encabezado-marcas'>
                <span className='etiqueta-seccion'>Desde el yacimiento hasta tu negocio</span>
                <h3 className='title-marcas'>NUESTRAS MARCAS</h3>
                <p className='description-marcas'>Productos a base de bentonita, elaborados por nosotros para cada industria.</p>
            </div>
            <div className='cards-marcas'>
                {marcas.map((marca) => (
                    <a
                        key={marca.nombre}
                        href={marca.url}
                        target='_blank'
                        rel='noreferrer noopener'
                        className='card-marca'
                        style={{ '--color-marca': marca.color }}
                    >
                        <div className='logo-marca-container'>
                            <img src={marca.logo} alt={marca.nombre} className='logo-marca' loading='lazy' />
                        </div>
                        <div className='contenido-marca'>
                            <span className='rubro-marca'>{marca.rubro}</span>
                            <h4 className='titulo-marca'>{marca.titulo}</h4>
                            <p className='data-marca'>{marca.descripcion}</p>
                            <span className='boton-marca'>
                                Visitar sitio <span aria-hidden='true' className='flecha-marca'>→</span>
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default NuestrasMarcas;
