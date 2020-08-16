import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import loadable from "@loadable/component"
import { graphql } from "gatsby"
import MainLayout from "../components/layout"

const StickyBanner = loadable(() => import("../components/StickyBanner"))

const ArticleTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, cover, date, author },
      body,
    },
  } = data

  return (
    <MainLayout>
      <div className="px-5 m-auto max-w-screen-lg">
        <div>
          <h1 className="text-2xl font-semibold py-5 m-0">{title}</h1>
        </div>
        <div className="border-t border-b border-solid border-gray-400 md:h-12 flex items-center">
          {date}
          <span className="px-2 text-xs">●</span>
          By {author}
        </div>
        <div className="underline text-right py-5">Advertising Disclosure</div>
        <div className="flex justify-between relative">
          <div className="max-w-screen-sm">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
          <StickyBanner />
        </div>
      </div>
    </MainLayout>
  )
}

export const query = graphql`
  query GetSingleArticle($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        slug
        author
        cover {
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

export default ArticleTemplate
