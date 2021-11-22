import React from "react"
import Typography from "../Typography"

import "./index.css"

// eslint-disable-next-line func-names
const Footer = function() {
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
          <div styleName="footer-code" />
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
          <div styleName="footer-facebook">
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/susanarochacabeleireiros">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.4542 0H1.54583C0.691833 0 0 0.691833 0 1.54583V26.4553C0 27.3082 0.691833 28 1.54583 28H14.9567V17.157H11.3073V12.9313H14.9567V9.81517C14.9567 6.1985 17.1652 4.22917 20.3922 4.22917C21.938 4.22917 23.2657 4.34467 23.653 4.396V8.176L21.4153 8.17717C19.6607 8.17717 19.3212 9.01133 19.3212 10.234V12.9325H23.506L22.9612 17.1582H19.3212V28H26.4565C27.3082 28 28 27.3082 28 26.4542V1.54583C28 0.691833 27.3082 0 26.4542 0V0Z"
                fill="white"
              />
            </svg>
          </a>
          </div>
        </div>
      </div>
      <div styleName="develop">
        <Typography variant="body">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/tanisharocha/"
          >
            Desenvolvido por Tânia Rocha
          </a>
        </Typography>
      </div>
    </footer>
  )
}

export default Footer
