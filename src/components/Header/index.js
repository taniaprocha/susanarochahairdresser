import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Image from "./image";

import './index.css';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="brand">
        <Image />
      </div>
      <div className="services">
          <Link to="#section-services" className="link">Serviços</Link>
          <Link to="#section-where" className="link">Onde estamos</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
