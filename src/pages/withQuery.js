import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    tania: file(relativePath: { eq: "tania.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 1000, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

function QueryComponent() {
  return (
    <StaticQuery query={query} render={data => <Component data={data} />} />
  )
}


export default QueryComponent;