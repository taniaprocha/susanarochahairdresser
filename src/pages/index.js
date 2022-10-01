import React, { useState } from "react"
import { Element } from "react-scroll"
import Header from "root/components/Header"
import ImagesCarousel from "root/components/ImagesCarousel"
import Footer from "root/components/Footer"
import Typography from "root/components/Typography"
import Quotes from "root/components/Quotes"
import Particles from "react-particles"

import "./index.css"
import { loadSnowPreset } from "tsparticles-preset-snow"

const IndexPage = () => {
  const [loaded, setLoaded] = useState(false);
  const options = {
    preset: "snow",

  };

  const customInit = async engine => {
    // this adds the preset to tsParticles, you can safely use the
    await loadSnowPreset(engine);
    console.log('loaded');
    setLoaded(true);
  }


  return (
    <div styleName="root">
      <div styleName="particles">
        <Particles
          styleName="canvas"
          options={options}
          init={customInit}
          params={{
            particles: {
              number: {
                value: 180,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 5,
                random: true,
              },
              move: {
                direction: "bottom",
                out_mode: "out",
                speed: 1,
                random: false,
                enable: true,
              },
              line_linked: {
                enable: false,
              },
              opacity: {
                random: true,
              },
            },
            retina_detect: true,
          }}
        />
      </div>
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
          <Element name="quotes" styleName="section-quotes">
            <Quotes />
          </Element>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage