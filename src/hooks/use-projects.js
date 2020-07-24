import { graphql, useStaticQuery } from "gatsby"

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { fields: frontmatter___priority }
      ) {
        nodes {
          frontmatter {
            title
            slug
            tags
            github
            livesite
            demo
            date
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
          body
        }
      }
    }
  `)
  console.log(data)
  return data.allMdx.nodes.map(project => ({
    title: project.frontmatter.title,
    slug: project.frontmatter.slug,
    image: project.frontmatter.image,
    body: project.body,
    tags: project.frontmatter.tags,
    github: project.frontmatter.github,
    livesite: project.frontmatter.livesite,
    demo: project.frontmatter.demo,
    date: project.frontmatter.date,
  }))
}

export default useProjects
