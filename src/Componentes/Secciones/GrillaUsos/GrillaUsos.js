//styles
import '../GrillaUsos/grillaUsos.css'

const usos = [
    { titulo: 'Industria Animal', img: 'assets/usosCaroussel/industriaAnimal.webp', alt: 'industria animal bentonita' },
    { titulo: 'Construcción', img: 'assets/usosCaroussel/construccion.webp', alt: 'construccion bentonita' },
    { titulo: 'Arena Sanitaria', img: 'assets/usosCaroussel/arenaSanitaria.webp', alt: 'arena sanitaria bentonita' },
    { titulo: 'Cosmética', img: 'assets/usosCaroussel/makeup.webp', alt: 'cosmetica bentonita' },
    { titulo: 'Alimento', img: 'assets/usosCaroussel/alimento.webp', alt: 'alimento bentonita' },
];

// Grilla de usos para computadora (en celular y tablet se usan los carruseles)
const GrillaUsos = () => {
    return (
        <div className='grilla-usos'>
            {usos.map((uso) => (
                <figure className='card-uso' key={uso.titulo}>
                    <img src={uso.img} alt={uso.alt} className='img-uso' loading='lazy' />
                    <figcaption className='titulo-uso'>{uso.titulo}</figcaption>
                </figure>
            ))}
        </div>
    );
};

export default GrillaUsos;
