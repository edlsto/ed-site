import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import ReadMore from "../components/read-more"
import Image from "gatsby-image"
import Tags from "../components/tags"

const Project = ({ project }) => {
  console.log(project)
  return (
    <article
      css={css`
        display: flex;
        margin-top: 0;
        margin-bottom: 2rem;

        :first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <Image
        fixed={project.image.sharp.fixed}
        alt={project.title}
        css={css`
          border: 1px solid black;
          margin-right: 1em;
        `}
        imgStyle={{ objectFit: "contain" }}
        style={{ width: "200px" }}
      ></Image>
      <div>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            margin-bottom: 1em;
          `}
        >
          <h3>{project.title}</h3>
          <div
            css={css`
              display: flex;
              align-items: flex-start;
              margin-top: 0;
            `}
          >
            <Tags tags={project.tags} />
          </div>
        </div>
        <p>{project.excerpt}</p>
      </div>
    </article>
  )
}

export default Project
