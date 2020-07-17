import React from "react"
import { Link, graphql } from "gatsby"
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PHero = props => (
  <p
    css={css`
      margin-bottom: 1rem;
      color: #222;
    `}
    {...props}
  />
)

const H1Hero = props => (
  <h1
    css={css`
      margin-bottom: 1.5rem;
    `}
    {...props}
  />
)

const H3Hero = props => (
  <h3
    css={css`
      margin-bottom: 1.5rem;
      font-weight: normal;
      line-height: 1.5;
      color: gray;
    `}
    {...props}
  />
)

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <H1Hero className="hero">Hi! I'm Ed.</H1Hero>

    <div
      className="text-image-container"
      css={css`
        display: flex;
      `}
    >
      <div
        className="text-container"
        css={css`
          margin-right: 1em;
        `}
      >
        <H3Hero className="hero">
          I'm a developer. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor
        </H3Hero>
        <PHero className="hero">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </PHero>
        <PHero className="hero">
          Purus in massa tempor nec feugiat nisl. Risus nullam eget felis eget.
          Justo laoreet sit amet cursus sit amet.
        </PHero>
        <PHero className="hero">
          Lorem ipsum dolor sit amet, <code>consectetur</code> adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </PHero>
      </div>
      <div>
        <Img
          css={css`
            border-radius: 1em;
          `}
          fixed={data.file.childImageSharp.fixed}
        />
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "ed.jpg" }) {
      childImageSharp {
        fixed(width: 200, height: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default IndexPage
