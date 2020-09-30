import React from "react"
import { Element } from "react-scroll"
import Header from "../components/Header"
import ImagesCarousel from "../components/ImagesCarousel"
import Footer from "../components/Footer"

import "./index.css"

const IndexPage = () => {
  return (
    <>
      <Header></Header>
      <main className="main">
        <div className="container">
          <Element name="photos" className="section-photos">
            <ImagesCarousel />
          </Element>
          <Element name="services" className="section-services">
            Serviços
          </Element>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default IndexPage
