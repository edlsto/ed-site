import React from "react"
import { Link, graphql } from "gatsby"
import { css, jsx, keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Mountains from "../../assets/mtns.svg"
import Sun from "../../assets/sun.svg"

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
      font-size: 3rem;
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

const opacity = keyframes`
  from {
        transform: translateX(-50px);

    opacity: 0;
    color: lightgray;
  }

  20% {
    transform: translateX(-10px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const animationSmallText = keyframes`
from {
  opacity: 0
}
  50% {
        transform: translateX(-50px);

    opacity: 0;
    color: lightgray;
  }

  80% {
    transform: translateX(-10px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const sunrise = keyframes`
from {
  transform: translateY(400px)
}
  to {
    transform: translateY(0px)
  }
`

const sunSpin = keyframes`

  to {
    transform: rotate(180deg)
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Sun
        css={css`
          width: 8%;
          left: 50%;
          margin-top: 0em;
          position: absolute;
          animation: ${sunrise} 1s ease-in-out 1;
        `}
      />
      <Mountains
        css={css`
          position: absolute;
          width: 100%;
          margin-left: 4em;
          margin-top: 8em;
          max-width: 955px;
        `}
      />
    </div>

    <H1Hero
      className="hero"
      css={css`
        animation: ${opacity} 1s ease-in-out 1;
      `}
    >
      Hi! I'm Ed.
    </H1Hero>

    <div
      className="text-image-container"
      css={css`
        display: flex;
      `}
    >
      <div
        className="text-container"
        css={css`
          margin-right: 3em;
          /* animation: ${animationSmallText} 2s ease-in-out 1; */
        `}
      >
        <H3Hero
          className="hero"
          css={css`
            /* animation: ${opacity} 1s ease-in-out 1; */
            width: 15em;
          `}
        >
          I'm a developer. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor
        </H3Hero>
      </div>
      <div>
        {/* <Img
          css={css`
            border-radius: 1em;
          `}
          fixed={data.file.childImageSharp.fixed}
        /> */}
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
