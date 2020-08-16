import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const ArticlesList = () => {
  const {
    allMdx: { nodes },
  } = useStaticQuery<GatsbyTypes.ArticlesQuery>(graphql`
    query Articles {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/articles/" } }) {
        nodes {
          id
          excerpt
          body
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            author
            slug
            title
            cover {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-10 md:row-gap-12 grid-flow-row m-auto lg:m-0 lg:mr-6 max-w-screen-sm">
      {nodes.map(node => {
        return (
          <Link to={node.frontmatter?.slug ?? ""}>
            <div className="flex md:flex-col border-t md:border-none border-solid border-gray-500 py-5 md:p-0 text-gray-900">
              <div className="mr-5 md:m-0 min-w-100 max-w-full md:mb-4">
                <Img fluid={node.frontmatter?.cover?.childImageSharp?.fluid} />
              </div>
              <div>
                <div className="text-lg md:clamp-2 font-semibold leading-tight md:leading-relaxed">
                  {node.frontmatter?.title}
                </div>
                <div className="text-xs my-2 hidden md:block">
                  {node.frontmatter?.date}
                  <span className="px-1">●</span>
                  {node.frontmatter?.author}
                </div>
                <div className="text-base hidden md:block">{node.excerpt}</div>
                <div className="text-blue-600 pt-1 md:pt-4">Read More</div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ArticlesList
