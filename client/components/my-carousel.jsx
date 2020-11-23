import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function MyCarousel(props) {
  function firstClick() {
    props.setView('details', { productId: 14 });
  }
  function secondClick() {
    props.setView('details', { productId: 13 });
  }
  function thirdClick() {
    props.setView('details', { productId: 10 });
  }

  return (
    <div className="container mb-5">
      <Carousel className="border-radius15">
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 carousel-img"
            onClick={firstClick}
            src="/images/VarmiloVA87MKoi.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="row justify-content-center">
            <h3 className="text-light bg-dark mycarousel-caption">Varmilo VA87 Koi</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 carousel-img"
            onClick={secondClick}
            src="/images/VarmiloVA87MBeijingOpera.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="row justify-content-center">
            <h3 className="text-light bg-dark mycarousel-caption">Varmilo VA87 Beijing Opera</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 carousel-img"
            onClick={thirdClick}
            src="/images/DuckyxMKCreatorMechaMiniRGB.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="row justify-content-center">
            <h3 className="text-light bg-dark mycarousel-caption">Ducky MKCreator Mecha Mini RGB</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MyCarousel;
