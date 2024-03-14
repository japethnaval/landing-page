import { SetStateAction, useState } from 'react'
import './carousel.css'

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1,
    )
  }
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1,
    )
  }
  const handleDotClick = (index: SetStateAction<number>) => {
    setCurrentIndex(index)
  }

  return (
    <div className="carousel">
      <div>
        <img key={currentIndex} src={images[currentIndex]} />
      </div>
      <div className="indicator">
        <div className="carousel-btn left-thumb" onClick={handlePrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </div>
        <div className="carousel-btn right-thumb" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </div>

        {images.map((img) => (
          <img className="thumbnail" src={img} />
        ))}
      </div>
    </div>
  )
}

export default Carousel
