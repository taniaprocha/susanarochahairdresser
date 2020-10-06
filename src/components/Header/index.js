import React, { useState } from "react"
import { Link } from "react-scroll"
import classNames from "classnames"
import SEO from "root/components/SEO"
import Typography from "root/components/Typography"
import Image from "./image"

import "./index.css"

const Header = () => {
  const [active, setActive] = useState(null)

  const handleActive = to => {
    setActive(to)
  }

  const handleInactive = () => {
    setActive(null)
  }

  const getClassNames = type => {
    return classNames("link", {
      active: active === type,
    })
  }

  // console.log(active)

  return (
    <header styleName="root">
      <SEO title="SusanaRochaCabeleireiros" description="" keywords="" />
      <div styleName="container">
        <div styleName="brand">
          <Image />
        </div>
        <div styleName="services">
          <Link
            styleName="link"
            activeClass="acive"
            to="photos"
            spy={true}
            smooth={true}
            offset={-70}
            duration={100}
            onSetActive={handleActive}
            onSetInactive={handleInactive}
          >
            <Typography variant="h3">Fotos</Typography>
          </Link>
          <Link
            styleName="link"
            activeClass="acive"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={100}
            onSetActive={handleActive}
            onSetInactive={handleInactive}
          >
            <Typography variant="h3">Serviços</Typography>
          </Link>
          <Link
            styleName="link"
            activeClass="acive"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={100}
            onSetActive={handleActive}
            onSetInactive={handleInactive}
          >
            <Typography variant="h3">Quotes</Typography>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
