import React from 'react'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const ThemeCarousel = () => (
  <div className={'carousel-wrapper'}>
    <Carousel arrows>
      <div className={'slide grayscale'}>
        <h1>Grayscale</h1>
      </div>
      <div className={'slide sepia'}>
        <h1>Sepia</h1>
      </div>
      <div className={'slide hue'}>
        <h1>hue</h1>
      </div>
    </Carousel>
  </div>

)

export default ThemeCarousel

