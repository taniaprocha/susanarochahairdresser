import React from "react"

import Typography from "../Typography"

import "./index.css"

const Footer = () => {
  return (
    <footer styleName="footer">
      <div styleName="footer-content">
        <div styleName="footer-column">
          <div styleName="footer-title">
            <Typography>Localização</Typography>
          </div>
          <div styleName="footer-street">Rua Artur de Castro 98</div>
          <div styleName="footer-code">4900-592 Viana do Castelo</div>
        </div>

        <div styleName="footer-column">
          <div styleName="footer-title">Telefone</div>
          <div styleName="footer-phone">+351 258 827207</div>
        </div>

        <div styleName="footer-column">
          <div styleName="footer-title">Segue-nos</div>
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
