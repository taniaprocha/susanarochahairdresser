import React from "react"
import { Link } from "react-scroll"
import Image from "./image"
import SEO from "../components/SEO"

import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <SEO title="SusanaRochaCabeleireiros" description="" keywords="" />
      <div className="container">
        <div className="brand">
          <Image />
        </div>
        <div className="services">
          <Link
            className="link"
            activeClass="active"
            to="photos"
            spy={true}
            smooth={true}
            offset={-70}
            duration={100}
          >
            Fotos
          </Link>
          <Link
            className="link"
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={100}
          >
            Serviços
          </Link>
          <Link
            className="link"
            activeClass="active"
            to="where"
            spy={true}
            smooth={true}
            offset={-70}
            duration={100}
          >
            Onde estamos
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
