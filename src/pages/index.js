import React, { Component } from "react";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Header from "../components/Header";

import './index.css';

class IndexPage extends Component{
  render(){
    return (
    <>
      <Header></Header>
      <main>
        <div className="main">
          <Element name="photos" className="section">
            Fotos
          </Element>
          <Element name="services" className="section">
            Serviços
          </Element>
          <Element name="where" className="section">
            Onde estamos
          </Element>
        </div>
      </main>
      <footer>
        © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>);
  }
}

export default IndexPage;
