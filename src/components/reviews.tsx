import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { useResponsive } from "ahooks"

const ReviewsList = () => {
  const { md } = useResponsive()

  const {
    allMdx: { nodes },
  } = useStaticQuery<GatsbyTypes.ReviewsQuery>(graphql`
    query Reviews {
      allMdx {
        nodes {
          id
          excerpt
          body
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            author
            slug
            title
            logo {
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
    <div
      className="grid grid-cols-1 md:grid-cols-2 md:col-gap-10 md:row-gap-12 grid-flow-row m-auto lg:m-0 lg:mr-6"
      style={{
        maxWidth: 670,
      }}
    >
      {nodes.map(node => {
        return (
          <Link to={node.frontmatter?.slug ?? ""}>
            <div className="flex md:flex-col border-t border-solid border-gray-500 md:border-none py-5 md:py-0">
              <div
                className="md:border-solid md:border md:border-gray-400 flex items-center justify-center md:mb-4"
                style={{
                  height: md ? "70px" : "106px",
                  minWidth: md ? "auto" : "100px",
                }}
              >
                <Img
                  fluid={node.frontmatter?.logo?.childImageSharp?.fluid}
                  imgStyle={{ objectFit: "contain" }}
                  style={{ maxWidth: 140, maxHeight: 40, width: "100%" }}
                />
              </div>
              <div className="pl-4">
                {!md && (
                  <div className="text-gray-900 font-semibold text-lg">
                    {node.frontmatter?.title}
                  </div>
                )}
                <div
                  className="text-gray-900 overflow-hidden mb-2 text-base leading-tight md:leading-normal"
                  style={{
                    ...(md
                      ? {}
                      : {
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          display: "-webkit-box",
                          overflow: "hidden",
                        }),
                  }}
                >
                  {node.excerpt}
                </div>
                <div className="text-blue-600">Read More</div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ReviewsList
