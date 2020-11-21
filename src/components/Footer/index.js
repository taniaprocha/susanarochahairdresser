import React from "react"

import Typography from "../Typography"

import "./index.css"

const Footer = () => {
  return (
    <footer styleName="footer">
      <div styleName="footer-content">
        <div styleName="footer-column">
          <div styleName="footer-title">
            <Typography weight="semibold" variant="h3">
              Localização
            </Typography>
          </div>
          <div styleName="footer-street">
            <Typography variant="h3">4900-592 Viana do Castelo</Typography>
            <Typography variant="h3">Rua Artur de Castro 98</Typography>
          </div>
          <div styleName="footer-code"></div>
        </div>

        <div styleName="footer-column">
          <div styleName="footer-title">
            <Typography weight="semibold" variant="h3">
              Telefone
            </Typography>
          </div>
          <div styleName="footer-phone">
            <Typography variant="h3">+351 258 827207</Typography>
          </div>
        </div>

        <div styleName="footer-column">
          <div styleName="footer-title">
            <Typography weight="semibold" variant="h3">
              Segue-nos
            </Typography>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            styleName="footer-facebook"
            href="https://www.facebook.com/susanarochacabeleireiros"
          >
            <img
              alt="SR logo"
              styleName="facebook-img"
              src="/facebook.svg"
            ></img>
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
