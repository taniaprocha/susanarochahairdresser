import React, { Component } from "react";
import { Link } from 'react-scroll'
import Image from "./image";

import './Header.css';

class Header extends Component{
  render(){
    return(
      <header className="header">
        <div className="container">
          <div className="brand">
            <Image />
          </div>
          <div className="services">
              <Link className="link" activeClass="active" to="photos" spy={true} smooth={true} offset={-70} duration={100}>
                Fotos
              </Link>
              <Link className="link" activeClass="active" to="services" spy={true} smooth={true} offset={-70} duration={100}>
                Serviços
              </Link>
              <Link className="link" activeClass="active" to="where" spy={true} smooth={true} offset={-70} duration={100}>
                Onde estamos
              </Link>
          </div>
        </div>
      </header>);
  }
}

export default Header;
