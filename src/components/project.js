import React from "react"
import { css } from "@emotion/core"
import Image from "gatsby-image"
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
            @media (max-width: 600px) {
              margin-top: 1em;
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
        <Image
          fixed={project.image.sharp.fixed}
          alt={project.title}
          css={css`
            margin: 0 1em 0 0;
            @media (max-width: 600px) {
              margin: 1em 0 0 0;
            }
          `}
          imgStyle={{ objectFit: "contain" }}
        ></Image>
        <div
          css={css`
            margin-top: 1em;
          `}
        >
          <MDXRenderer>{project.body}</MDXRenderer>
        </div>
      </div>
      <div
        css={css`
          .link {
            margin-right: 1em;
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
