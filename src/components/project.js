import React from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import Tags from "../components/tags"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Project = ({ project }) => {
  return (
    <article
      css={css`
        display: flex;
        margin-top: 0;
        margin-bottom: 4rem;
        flex-direction: column;
        justify-content: center;

        :first-of-type {
          margin-top: 1rem;
        }

        .date {
          font-size: 0.7em;
          margin-left: 0.5em;
          font-weight: normal;
          color: gray;
        }
      `}
    >
      <div
        className="title-tags-container"
        css={css`
          display: flex;
          justify-content: space-between;
          margin-bottom: 1em;
          @media (max-width: 600px) {
            flex-direction: column;
          }
        `}
      >
        <h3
          css={css`
            line-height: auto;
          `}
        >
          {project.title}
          <span className="date">{project.date}</span>
        </h3>
        <div
          css={css`
            display: flex;
            align-items: flex-start;
            margin-top: 0;
            max-width: 50%;
            flex-wrap: wrap;
            justify-content: flex-end;

            @media (max-width: 600px) {
              margin-top: 1em;
              max-width: 100%;
              justify-content: flex-start;
            }
          `}
        >
          <Tags tags={project.tags} />
        </div>
      </div>

      <div
        className="image-text-container"
        css={css`
          display: flex;
          @media (max-width: 600px) {
            flex-direction: column;
          }
        `}
      >
        <div
          css={css`
            margin: 0 1em 0 0;
            flex: 0 0 50%;
            @media (max-width: 600px) {
              margin: 1em 0 0 0;
            }
          `}
        >
          <Img fluid={project.image.sharp.fluid} alt={project.title}></Img>
        </div>
        <div
          css={css`
            margin-top: 1em;
          `}
        >
          <MDXRenderer>{project.body}</MDXRenderer>
        </div>
      </div>
      <div
        className="links-container"
        css={css`
          margin-top: 1em;
          display: flex;
          justify-content: center;
          .link {
            margin-left: 3em;
          }
          .link:first-of-type {
            margin-left: 0;
          }
        `}
      >
        {project.github && (
          <a className="link" href={project.github}>
            Repo
          </a>
        )}
        {project.livesite && (
          <a className="link" href={project.livesite}>
            Site
          </a>
        )}
        {project.demo && (
          <a className="link" href={project.demo}>
            Demo
          </a>
        )}
      </div>
    </article>
  )
}

export default Project
