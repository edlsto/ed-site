import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import ReadMore from "../components/read-more"
import useProjects from "../hooks/use-projects"
import Project from "../components/project"

const Projects = () => {
  const projects = useProjects()

  return (
    <Layout>
      <h1>My projects</h1>
      <p>Here are my projects</p>
      {projects.map(project => (
        <Project key={project.slug} project={project} />
      ))}
      <ReadMore to="/">&larr; back to home</ReadMore>
    </Layout>
  )
}

export default Projects
