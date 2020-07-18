import { graphql, useStaticQuery } from "gatsby"

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/ed-site/projects/" } }) {
        nodes {
          frontmatter {
            title
            slug
            tags
            image {
              sharp: childImageSharp {
                fixed(height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `)
  return data.allMdx.nodes.map(project => ({
    title: project.frontmatter.title,
    slug: project.frontmatter.slug,
    image: project.frontmatter.image,
    excerpt: project.excerpt,
    tags: project.frontmatter.tags,
  }))
}

export default useProjects
