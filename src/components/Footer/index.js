import React from "react"

import "./index.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <div className="footer-title">Localização</div>
          <div className="footer-street">Rua Artur de Castro 98</div>
          <div className="footer-code">4900-592 Viana do Castelo</div>
        </div>

        <div className="footer-column">
          <div className="footer-title">Telefone</div>
          <div className="footer-phone">+351 258 827207</div>
        </div>

        <div className="footer-column">
          <div className="footer-title">Segue-nos</div>
          <a
            target="_blank"
            className="footer-facebook"
            href="https://www.facebook.com/susanarochacabeleireiros"
          >
            <img className="facebook-img" src="/facebook.svg"></img>
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
