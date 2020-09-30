import React from "react"
import PropTypes from "prop-types"
import Slider from "react-slick"
import Img from "gatsby-image/withIEPolyfill"

import withQuery from "./withQuery"
import "./index.css"

const ImagesCarousel = ({ data }) => {
  console.log(data)

  const settings = {
    className: "carousel",
    dots: true,
    infinite: true,
    autoplay: true,
    accessibility: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  // centerMode : true

  return (
    <div className="carousel-containuer">
      <Slider {...settings}>
        <Img alt="one" fluid={data.image1.image.fluid} />
        <Img alt="two" fluid={data.image2.image.fluid} />
        <Img alt="three" fluid={data.image3.image.fluid} />
        <Img alt="four" fluid={data.image4.image.fluid} />
        <Img alt="five" fluid={data.image5.image.fluid} />
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
  }).isRequired,
}

export default withQuery(ImagesCarousel)
