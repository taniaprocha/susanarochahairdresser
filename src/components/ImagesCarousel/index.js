import React from "react"
import PropTypes from "prop-types"
import Slider from "react-slick"
import Img from "gatsby-image/withIEPolyfill"
import { ArrowLeft, ArrowRight } from "../Icons"
import withQuery from "./withQuery"
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
        <Img
          alt="hair salon with bright light"
          fluid={data.image1.image.fluid}
        />
        <Img alt="hair washing chairs" fluid={data.image2.image.fluid} />
        <Img alt="hair salon main entry" fluid={data.image3.image.fluid} />
        <Img alt="hair salon reception view" fluid={data.image4.image.fluid} />
        <Img alt="hair salon 3 mirrors" fluid={data.image5.image.fluid} />
        <Img alt="hair salon shelves view" fluid={data.image6.image.fluid} />
        <Img alt="hair salon main entry view" fluid={data.image7.image.fluid} />
        <Img
          alt="hair salon chairs and mirrors"
          fluid={data.image8.image.fluid}
        />
      </Slider>
    </div>
  )
}

ImagesCarousel.propTypes = {
  data: PropTypes.shape({
    image1: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    image2: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    image3: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    image4: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    image5: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    image6: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    image7: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    image8: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default withQuery(ImagesCarousel)
