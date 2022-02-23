import React from 'react';
import '../CarruselDesktop/carruselDesktop.css'
import { Carousel } from 'react-bootstrap';

function CarruselDesktop() {
    return (
        <div>
  <Carousel>
  <Carousel.Item interval={3000}>
    <img
      src="assets/usosCaroussel/construccion.jpg"
      alt="construccion bentonita"
      id='img-carrusel-desktop'
    />
    <Carousel.Caption>
      <h5 className='titulo-carrusel'>Construcción</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      src="assets/usosCaroussel/petroleo.jpg"
      alt="petroleo bentonita"
      id='img-carrusel-desktop'
    />
    <Carousel.Caption>
      <h5 className='titulo-carrusel'>Petróleo</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img   
      src="assets/usosCaroussel/arenaSanitaria.jpg"
      alt="arena sanitaria bentonita"
      id='img-carrusel-desktop'
    />
    <Carousel.Caption>
      <h5 className='titulo-carrusel'>Arena sanitaria</h5>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item interval={3000}>
    <img   
      src="assets/usosCaroussel/makeup.jpg"
      alt="cosmetica bentonita"
      id='img-carrusel-desktop'
    />
    <Carousel.Caption>
      <h5 className='titulo-carrusel'>Cosmética</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      src="assets/usosCaroussel/alimento.jpg"
      alt="alimento bentonita"
      id='img-carrusel-desktop'
    />
    <Carousel.Caption>
      <h5 className='titulo-carrusel'>Alimento</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
}

export default CarruselDesktop;



