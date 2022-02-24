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
      src="assets/usosCaroussel/construccion.jpg"
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
      src="assets/usosCaroussel/petroleo.jpg"
      alt="Petroleo bentonita"
      id='img-carrusel-mobile'
    />
    <Carousel.Caption>
      <h5 className='titulo-carrusel'>Petróleo</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img   
    className='d-block w-100'
      src="assets/usosCaroussel/arenaSanitaria.jpg"
      alt="arena sanitaria bentonita"
      id='img-carrusel-mobile'
    />
    <Carousel.Caption>
      <h5 className='titulo-carrusel'>Arena sanitaria</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className='d-block w-100'
      src="assets/usosCaroussel/makeup.jpg"
      alt="cosmetica bentonita"
      id='img-carrusel-mobile'
    />
    <Carousel.Caption>
      <h5 className='titulo-carrusel'>Cosmética</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className='d-block w-100'
      src="assets/usosCaroussel/alimento.jpg"
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