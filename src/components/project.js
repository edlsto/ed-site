import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import ReadMore from "../components/read-more"
import Image from "gatsby-image"

const Project = ({ project }) => {
  console.log(project)
  return (
    <article
      css={css`
        display: flex;
        margin-top: 0;
        padding-bottom: 1rem;

        :first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <Link
        css={css`
          margin: 1rem 1rem 0 0;
          width: 100px;
        `}
      >
        <Image
          fluid={project.image.sharp.fluid}
          css={css`
            margin-top: 0;
          `}
          alt={project.title}
        ></Image>
      </Link>
      <div>
        <h3>{project.title}</h3>
        <p>{project.excerpt}</p>
      </div>
    </article>
  )
}

export default Project
