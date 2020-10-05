import React from "react"
import PropTypes from "prop-types"
import { Element } from "react-scroll"
import Header from "root/components/Header"
import ImagesCarousel from "root/components/ImagesCarousel"
import Footer from "root/components/Footer"
import Typography from "root/components/Typography"
import QuotesCarousel from "react-quotes-carousel"
import withQuery from "./withQuery"

import "./index.css"

const IndexPage = ({ data }) => {
  const quotes = [
    {
      author: "Tânia Rocha",
      company: "",
      image: data.tania.image.fluid.src,
      quote:
        "O meu cabelo já não conhece outra cabeleireira, se não a Susana. Alinha em todos os meus desvaneios e grandes mudanças, sempre com conselhos quando os devaneios podem prejudicar a saude do meu cabelo.",
    },
    {
      author: "Diana Pereira",
      company: "",
      image: data.tania.image.fluid.src,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac elit congue, ornare nulla sed, malesuada augue. Mauris nec blandit nisl. Praesent efficitur scelerisque tristique. Ut justo leo, tincidunt quis velit nec, feugiat auctor quam.",
    },
    {
      author: "Marta Rocha",
      company: "",
      image: data.tania.image.fluid.src,
      quote:
        "Maecenas varius cursus sodales. Etiam faucibus nisi sed dui laoreet malesuada. Curabitur semper nunc venenatis, pretium leo vitae, iaculis dui.",
    },
  ]

  console.log(data)

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
          <Element name="about" styleName="section-about">
            <div styleName="title">
              <Typography weight="bold" variant="h2">
                A opinião dos nossos clientes
              </Typography>
            </div>
            <div styleName="content">
              <QuotesCarousel styleName="quotes" quotes={quotes} />
            </div>
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
