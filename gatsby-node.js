const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      articles: allMdx(filter: {
        fileAbsolutePath: {
          regex: "/content/articles/"
        }
      }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      reviews: allMdx(filter: {
        fileAbsolutePath: {
          regex: "/content/reviews/"
        }
      }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  result.data.reviews.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/reviews/${slug}`,
      component: path.resolve('src/templates/ReviewTemplate.tsx'),
      context: {
        slug
      }
    })
  })

  result.data.articles.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/articles/${slug}`,
      component: path.resolve('src/templates/ArticleTemplate.tsx'),
      context: {
        slug
      }
    })
  })
}
