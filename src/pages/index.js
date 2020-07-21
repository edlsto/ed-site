import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import { css, jsx, keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Mountains from "../../assets/mtns.svg"
import Cloud from "../components/cloud"
import Sun from "../components/sun"
import Star from "../components/star"
import gsap, { CSSPlugin } from "gsap"
import { nominalTypeHack } from "prop-types"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

const plugins = [CSSPlugin]

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

class IndexPage extends Component {
  constructor(props) {
    super(props)
    // reference to the DOM node
    this.sun = null
    this.cloud = null
    this.star = null
    this.star1 = null
    this.star2 = null
    this.state = {
      opacity: 0,
    }

    // reference to the animation
  }

  logAmount = amount => {
    this.setState({ opacity: amount.progress * 0.3 })
  }

  componentDidMount() {
    // use the node ref to create the animation
    ScrollTrigger.create({
      trigger: ".scene",
      start: "top 150px",
      end: "bottom 550px",
      pin: this.sun,
    })
    ScrollTrigger.create({
      trigger: ".scene",
      start: "top 100px",
      end: "bottom 550px",
      onUpdate: self => this.logAmount(self),
    })
    let tl = gsap.timeline({ delay: 0.5 })
    tl.from(this.sun, 1, {
      y: 300,
      ease: "back.out(1.7)",
    })
    tl.to(
      this.sun,
      15,
      {
        rotation: 180,
        repeat: -1,
        ease: "none",
      },
      "-=2"
    )
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scene-two",
        start: "top 700px",
        toggleActions: "play pause resume reset",
      },
    })
    tl2.from([this.star], 1, {
      y: "1000px",
      ease: "back.out(1.7)",
    })
    tl2.from(this.star1, 1, { y: "950px", ease: "back.out(1.7)" }, "-=.9")
    tl2.from(this.star2, 1, { y: "900px", ease: "back.out(1.7)" }, "-=.8")

    // tl.from(
    //   this.cloud,
    //   18,
    //   {
    //     x: -1700,
    //     ease: "none",
    //     repeat: -1,
    //   },
    //   "-=2"
    // )
  }
  render() {
    return (
      <Layout bg={`rgba(0, 0, 0, ${this.state.opacity})`}>
        <SEO title="Home" />

        <div
          className="scene"
          css={css`
            height: 700px;
          `}
        >
          <Sun ref={div => (this.sun = div)} className="sun" />
          <Mountains
            css={css`
              position: absolute;
              width: 100%;
              margin-left: 4em;
              margin-top: 8em;
              max-width: 955px;
            `}
          />

          {/* <Cloud ref={div => (this.cloud = div)} /> */}

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
                I'm a developer. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
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
        </div>

        <div
          className="scene-two"
          css={css`
            height: 800px;
            display: flex;
            justify-content: flex-end;
            padding-top: 100px;
            /* background: red; */
            /* align-items: center; */
          `}
        >
          <Star
            ref={div => (this.star = div)}
            marginLeft="90%"
            marginTop="40px"
          />
          <Star
            ref={div => (this.star1 = div)}
            marginLeft="92%"
            marginTop="0px"
          />
          <Star
            ref={div => (this.star2 = div)}
            marginLeft="85%"
            marginTop="30px"
          />
        </div>
        <div
          className="scene-three"
          css={css`
            height: 800px;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <H1Hero>3</H1Hero>
        </div>
      </Layout>
    )
  }
}

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
