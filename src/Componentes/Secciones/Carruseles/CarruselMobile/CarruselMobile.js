//styles
import '../CarruselMobile/carruselMobile.css'
import { Carousel } from 'react-bootstrap';

function CarruselMobile() {
    return (
        <div>
             <Carousel>
  <Carousel.Item interval={3000}>
    <img
        className='d-block w-100'
      src="assets/usosCaroussel/construccion.webp"
      alt="Construccion bentonita"
      id='img-carrusel-mobile'
    />
    <Carousel.Caption>
      <h5 className='titulo-carrusel'>Construcción</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
       className='d-block w-100'
      src="assets/usosCaroussel/industriaAnimal.webp"
      alt="nutricion animal bentonita"
      id='img-carrusel-mobile'
    />
    <Carousel.Caption>
      <h5 className='titulo-carrusel'>Nutrición Animal</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img   
    className='d-block w-100'
      src="assets/usosCaroussel/arenaSanitaria.webp"
      alt="arena sanitaria bentonita"
      id='img-carrusel-mobile'
    />
    <Carousel.Caption>
      <h5 className='titulo-carrusel'>Arena Sanitaria</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className='d-block w-100'
      src="assets/usosCaroussel/peletizado.webp"
      alt="peletizado bentonita"
      id='img-carrusel-mobile'
    />
    <Carousel.Caption>
      <h5 className='titulo-carrusel'>Peletizado</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className='d-block w-100'
      src="assets/usosCaroussel/alimento.webp"
      alt="alimento bentonita"
      id='img-carrusel-mobile'
    />
    <Carousel.Caption>
      <h5 className='titulo-carrusel'>Alimento</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
        </div>
    );
}

export default CarruselMobile;