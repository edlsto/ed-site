import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import ReadMore from "../components/read-more"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>

    <MDXRenderer>{post.body}</MDXRenderer>
    <ReadMore to="/blog">&larr; back to all posts</ReadMore>
  </Layout>
)

export default PostTemplate
