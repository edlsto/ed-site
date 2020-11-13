import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/posts/" } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        nodes {
          frontmatter {
            title
            slug
            date(formatString: "MMMM D, YYYY")
          }
          excerpt
        }
      }
    }
  `)
  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    date: post.frontmatter.date,
    excerpt: post.excerpt,
  }))
}

export default usePosts
