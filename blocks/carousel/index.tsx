import React, { FC } from 'react'
import { Carousel as BSCarousel } from 'react-bootstrap';
import ICarousel from './ICarousel';

const Carousel: FC<ICarousel> = (carousel) => {
    return (
        <BSCarousel fade>
            {carousel.slides.map((slide, index) => {
                return (
                    <BSCarousel.Item key={index}>
                        <img className="d-block w-100" src={slide.image} />
                        <BSCarousel.Caption>
                            <h3>{slide.title}</h3>
                            <p>Something</p>
                        </BSCarousel.Caption>
                    </BSCarousel.Item>
                )
            })}
        </BSCarousel>
      );
}

export default Carousel