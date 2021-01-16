import React, { useState } from 'react'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const ThemeCarousel = () => {
  const [value, setValue] = useState(0)

  const onChange = value => {
    setValue(value)
    if (value === 0) {
      document.body.removeAttribute('class')
      document.body.classList.add('theme-purple')
    } else if (value === 1) {
      document.body.removeAttribute('class')
      document.body.classList.add('theme-grayscale')
    } else if (value === 2) {
      document.body.removeAttribute('class')
      document.body.classList.add('theme-volcano')
    } else if (value === 3) {
      document.body.removeAttribute('class')
      document.body.classList.add('theme-futuristic')
    } else if (value === 4) {
      document.body.removeAttribute('class')
      document.body.classList.add('theme-bio')
    }
  }
  return (
    <div className={'carousel-wrapper'}>
      <Carousel arrows onChange={onChange}>
        <div className={'slide'}>
          <h1>purple haze</h1>
        </div>
        <div className={'slide'}>
          <h1>monochrome</h1>
        </div>
        <div className={'slide'}>
          <h1>volcano</h1>
        </div>
        <div className={'slide'}>
          <h1>futuristic</h1>
        </div>
        <div className={'slide'}>
          <h1>bio</h1>
        </div>
      </Carousel>
    </div>
  )
}

export default ThemeCarousel

