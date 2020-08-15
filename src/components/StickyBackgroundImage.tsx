import React from "react"

import styled from "@emotion/core"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const StickyImage = ({ className, style }) => {
  const data = useStaticQuery<GatsbyTypes.StickyImgQuery>(graphql`
    query StickyImg {
      desktop: file(relativePath: { eq: "blue-car.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      className={className}
      style={style}
      fluid={data.desktop?.childImageSharp?.fluid}
    >
      Save Up to 50% on your car insurance
    </BackgroundImage>
  )
}

export default StickyImage
