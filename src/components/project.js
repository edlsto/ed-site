import React from "react"
import { css } from "@emotion/core"
import Image from "gatsby-image"
import Tags from "../components/tags"

const Project = ({ project }) => {
  return (
    <article
      css={css`
        display: flex;
        margin-top: 0;
        margin-bottom: 2rem;
        @media (max-width: 600px) {
          flex-direction: column;
        }

        :first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <Image
        fixed={project.image.sharp.fixed}
        alt={project.title}
        css={css`
          margin-right: 1em;
        `}
        imgStyle={{ objectFit: "contain" }}
        style={{ width: "375px" }}
      ></Image>
      <div>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            margin-bottom: 1em;
            @media (max-width: 600px) {
              flex-direction: column;
            }
          `}
        >
          <h3>{project.title}</h3>
          <div
            css={css`
              display: flex;
              align-items: flex-start;
              margin-top: 0;
              @media (max-width: 600px) {
                margin-top: 1em;
              }
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
