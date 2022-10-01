import React from "react"
import Slider from "react-slick"
import { StaticImage } from "gatsby-plugin-image"
import { ArrowLeft, ArrowRight } from "../Icons"
import "./index.css"

function PrevArrow(carouselProps) {
  const { className, onClick } = carouselProps

  return (
    <button type="button" className={className} onClick={onClick}>
      <ArrowLeft />
    </button>
  )
}

function NextArrow(carouselProps) {
  const { className, onClick } = carouselProps

  return (
    <button type="button" className={className} onClick={onClick}>
      <ArrowRight />
    </button>
  )
}

const ImagesCarousel = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    accessibility: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

  return (
    <div styleName="carousel-container">
      <Slider {...settings}>
        <StaticImage src="../../images/IMG_20201003_162157.jpg" alt="please include an alt" />
        <StaticImage src="../../images/IMG_3963.jpg" alt="hair washing chairs" />
        <StaticImage src="../../images/IMG_20201003_162325.jpg" alt="hair salon main entry" />
        <StaticImage src="../../images/IMG_3955.jpg"  alt="hair salon reception view"  />
        <StaticImage src="../../images/IMG_3936.jpg" alt="hair salon 3 mirrors"  />
        <StaticImage src="../../images/IMG_3967.jpg" alt="hair salon shelves view"  />
        <StaticImage src="../../images/IMG_20201003_162906.jpg" alt="hair salon main entry view" />
        <StaticImage src="../../images/IMG_20201003_163024.jpg" alt="hair salon chairs and mirrors" /> 
      </Slider>
    </div>
  )
}

export default ImagesCarousel
