import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import ReadMore from "../components/read-more"

const Resume = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>This is my resume</p>
      <ReadMore to="/">&larr; back to home</ReadMore>
    </Layout>
  )
}

export default Resume
