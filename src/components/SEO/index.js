import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function SEO({ title, description, keywords }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta nane="google-site-verification" content="inZRMYQC7zg-bvzN1d7vtxCnPKMaJ11rbolNFtKNTic" />
      <link
        href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
}

export default SEO
