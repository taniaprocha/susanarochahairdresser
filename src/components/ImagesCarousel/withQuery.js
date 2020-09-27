import React from "react"
import { StaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    image1: file(relativePath: { eq: "IMG_3967.JPG" }) {
      image: childImageSharp {
        fluid(maxWidth: 1000, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    image2: file(relativePath: { eq: "IMG_3963.JPG" }) {
      image: childImageSharp {
        fluid(maxWidth: 1000, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    image3: file(relativePath: { eq: "IMG_3974.JPG" }) {
      image: childImageSharp {
        fluid(maxWidth: 1000, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    image4: file(relativePath: { eq: "IMG_3955.JPG" }) {
      image: childImageSharp {
        fluid(maxWidth: 1000, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    image5: file(relativePath: { eq: "IMG_3936.JPG" }) {
      image: childImageSharp {
        fluid(maxWidth: 1000, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Component => () => {
  return (
    <StaticQuery query={query} render={data => <Component data={data} />} />
  )
}
