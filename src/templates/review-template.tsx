import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import MainLayout from "../components/layout"
import StickyBanner from "../components/StickyBanner"

const ReviewTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, logo, date, author },
      body,
    },
  } = data
  return (
    <MainLayout>
      <div
        className="px-5 m-auto"
        style={{
          maxWidth: 1024,
        }}
      >
        <div className="flex md:h-40 flex-col md:flex-row md:my-6">
          <div className="py-8 md:py-0 flex justify-center md:items-center border-b md:border-none border-solid border-gray-400 w-full md:w-48 md:justify-start">
            <Img
              fluid={logo.childImageSharp.fluid}
              style={{
                maxWidth: 140,
                maxHeight: 64,
                width: "100%",
              }}
            />
          </div>
          <div className="flex items-center md:border-l border-solid border-gray-300 md:pl-10 w-full">
            <h1 className="text-2xl md:text-4xl font-semibold py-5 md:py-0 m-0">
              {title}
            </h1>
          </div>
        </div>
        <div className="border-t border-b border-solid border-gray-400 md:h-12 flex items-center">
          <span>{date}</span> <span className="px-2 text-xs">●</span>{" "}
          <span>By {author}</span>
        </div>
        <div className="underline text-right py-5">Advertising Disclosure</div>
        <div className="flex justify-between relative">
          <div
            style={{
              maxWidth: 610,
            }}
          >
            <MDXRenderer>{body}</MDXRenderer>
          </div>
          <StickyBanner />
        </div>
      </div>
    </MainLayout>
  )
}

export const query = graphql`
  query GetSingleReview($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        slug
        author
        logo {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`
export default ReviewTemplate
