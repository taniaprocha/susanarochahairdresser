import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Element } from "react-scroll"
import Header from "root/components/Header"
import ImagesCarousel from "root/components/ImagesCarousel"
import Footer from "root/components/Footer"
import Typography from "root/components/Typography"
import Quotes from "root/components/Quotes"
import withQuery from "./withQuery"

import "./index.css"

const IndexPage = ({ data }) => {
  return (
    <>
      <Header />
      <main styleName="main">
        <div styleName="container">
          <Element name="photos" styleName="section-photos">
            <ImagesCarousel />
          </Element>
          <Element name="services" styleName="section-services">
            <div styleName="title">
              <Typography color="black" weight="bold" variant="h2">
                Serviços
              </Typography>
            </div>
            <div styleName="content">
              <div>
                <Typography color="black" variant="h3">
                  Corte de senhora e homem
                </Typography>
                <Typography color="black" variant="h3">
                  Corte de menino e menina
                </Typography>
                <Typography color="black" variant="h3">
                  Coloração
                </Typography>
                <Typography color="black" variant="h3">
                  Brushing
                </Typography>
                <Typography color="black" variant="h3">
                  Madeiras
                </Typography>
              </div>
              <div>
                <Typography color="black" variant="h3">
                  Brushing
                </Typography>
                <Typography color="black" variant="h3">
                  Ondulação
                </Typography>
                <Typography color="black" variant="h3">
                  Descoloração
                </Typography>
                <Typography color="black" variant="h3">
                  Alisamento
                </Typography>
              </div>
            </div>
            <div styleName="end">
              <Typography color="black" variant="h3">
                ... ou outro desafio que queiras propôr!
              </Typography>
            </div>
          </Element>
          <Element name="quotes" styleName="section-about">
            <Quotes />
          </Element>
        </div>
      </main>
      <Footer />
    </>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    tania: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default withQuery(IndexPage)
