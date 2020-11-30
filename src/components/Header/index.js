import React, { useState } from "react"
import { Link } from "react-scroll"
import classNames from "classnames"
import SEO from "root/components/SEO"
import Typography from "root/components/Typography"
import Image from "./image"

import "./index.css"

const Header = () => {
  const [active, setActive] = useState("photos")

  const handleActive = to => {
    setActive(to)
  }

  const getClassNames = type => {
    return classNames("link", {
      active: active === type,
    })
  }

  return (
    <header styleName="root">
      <SEO
        title="SusanaRochaCabeleireiros"
        description="Susana Rocha cabeleireiros website"
      />
      <div styleName="container">
        <div styleName="brand">
          <Image />
        </div>
        <div styleName="services">
          <Link
            styleName={getClassNames("photos")}
            to="photos"
            spy
            smooth={false}
            offset={-70}
            duration={100}
            onSetActive={handleActive}
          >
            <Typography weight="medium" variant="h3">
              Fotos
            </Typography>
          </Link>
          <Link
            styleName={getClassNames("services")}
            to="services"
            spy
            smooth={false}
            offset={-100}
            duration={100}
            onSetActive={handleActive}
          >
            <Typography weight="medium" variant="h3">
              Serviços
            </Typography>
          </Link>
          <Link
            styleName={getClassNames("quotes")}
            to="quotes"
            spy
            smooth={false}
            offset={-300}
            duration={100}
            onSetActive={handleActive}
          >
            <Typography weight="medium" variant="h3">
              Opiniões
            </Typography>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
