import React from "react"
import { Element } from "react-scroll"
import Header from "../components/Header"
import ImagesCarousel from "../components/ImagesCarousel"

import "./index.css"

const IndexPage = () => {
  return (
    <>
      <Header></Header>
      <main>
        <div className="main">
          <Element name="photos" className="section-photos">
            <ImagesCarousel />
          </Element>
          <Element name="services" className="section">
            Serviços
          </Element>
          <Element name="where" className="section">
            Onde estamos
            <div>Rua Artur de Castro 98</div>
          </Element>
        </div>
      </main>
      <footer>
        © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

export default IndexPage
