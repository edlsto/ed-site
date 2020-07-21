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
import Moon from "../components/moon"
import gsap, { CSSPlugin } from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"

import { nominalTypeHack } from "prop-types"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

gsap.registerPlugin(MotionPathPlugin)

const plugins = [CSSPlugin, MotionPathPlugin]

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

// const opacity = keyframes`
//   from {
//         transform: translateX(-50px);

//     opacity: 0;
//     color: lightgray;
//   }

//   20% {
//     transform: translateX(-10px);
//   }

//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// `

// const animationSmallText = keyframes`
// from {
//   opacity: 0
// }
//   50% {
//         transform: translateX(-50px);

//     opacity: 0;
//     color: lightgray;
//   }

//   80% {
//     transform: translateX(-10px);
//   }

//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// `

class IndexPage extends Component {
  constructor(props) {
    super(props)
    // reference to the DOM node
    this.sun = null
    this.cloud = null
    this.star = null
    this.star1 = null
    this.star2 = null
    this.moon = null
    this.state = {
      opacity: 0,
    }

    // reference to the animation
  }

  darkenBackground = amount => {
    this.setState({ opacity: amount.progress * 0.3 })
  }

  lightenBackground = amount => {
    console.log(amount.progress)
    let opacity
    if (amount.progress > 0.5) {
      opacity = 0
    } else {
      opacity = ((1 - amount.progress) * 0.3 - 0.15) * 1.67
    }
    this.setState({ opacity: opacity })
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
      onUpdate: self => this.darkenBackground(self),
    })
    ScrollTrigger.create({
      trigger: ".scene-three",
      start: "top 800px",
      end: "bottom 550px",
      onUpdate: self => this.lightenBackground(self),
    })

    let tl = gsap.timeline({})
    tl.from(".hero-title", 1, {
      x: -20,
      opacity: 0,
      ease: "power3.inOut",
    })
    tl.from(
      ".hero-subtitle",
      1,
      {
        x: -20,
        opacity: 0,
        ease: "power3.inOut",
      },
      "-=.75"
    )
    tl.fromTo(
      this.sun,
      1,
      {
        y: 300,
        ease: "back.out(1.7)",
      },
      {
        y: 0,
        ease: "back.out(1.7)",
      },
      "-=.5"
    )
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
    tl2.fromTo(
      this.moon,
      1,
      {
        x: -800,
        y: 1400,
      },
      {
        motionPath: {
          path: [
            { x: -800, y: 1400 },
            { x: -500, y: 700 },
            { x: 0, y: 0 },
          ],
        },
      },
      "-=1.5"
    )
    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scene-two",
        start: "top 400px",
        end: "bottom 100px",
        toggleActions: "play pause resume reset",
      },
    })

    tl3.from(".hero-two-title", 1, { x: "-20px", opacity: 0 }, "-=1.5")
    tl3.from(".hero-two-subtitle", 1, { x: "-20px", opacity: 0 }, "-=1")
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
            className="hero-title"
            // css={css`
            //   animation: ${opacity} 1s ease-in-out 1;
            // `}
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
              `}
            >
              <H3Hero
                className="hero-subtitle"
                css={css`
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
            flex-direction: row;
            /* justify-content: center; */
            padding-top: 100px;
            flex-wrap: wrap;
            /* background: red; */
            align-items: flex-start;
          `}
        >
          <div
            className="illustration-two"
            css={css`
              align-self: flex-start;
            `}
          >
            <Star
              ref={div => (this.star = div)}
              marginLeft="66%"
              marginTop="90px"
            />
            <Star
              ref={div => (this.star1 = div)}
              marginLeft="85%"
              marginTop="50px"
            />
            <Star
              ref={div => (this.star2 = div)}
              marginLeft="81%"
              marginTop="110px"
            />
            <Moon ref={div => (this.moon = div)} />
          </div>
          <div
            css={css`
              align-self: center;
              text-align: right;
            `}
          >
            <H1Hero
              css={css`
                color: white;
              `}
              className="hero-two-title"
            >
              I ❤️ front-end technology
            </H1Hero>
            <H3Hero
              className="hero-two-subtitle"
              css={css`
                color: white;
              `}
            >
              I have experience in React and React Native
            </H3Hero>
          </div>
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
