import React, { Component, useEffect, useRef } from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Moon from "../components/moon"
import gsap from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import MtnsSun from "../components/mtns-sun"

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

let defaultWidth

if (typeof window !== `undefined`) {
  defaultWidth = window.innerWidth
}

gsap.registerPlugin(MotionPathPlugin)

const H1Hero = props => (
  //eslint-disable-next-line
  <h1
    css={css`
      margin-bottom: 1.5rem;
      font-size: 3rem;
    `}
    {...props}
  />
)

const H3Hero = props => (
  //eslint-disable-next-line
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

const Reveal = ({ children }) => {
  const revealRef = useRef(null)

  useEffect(() => {
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scene-two",
        start: "top 300px",
        toggleActions: "play pause resume reset",
      },
    })

    tl2.from(revealRef.current, 1, {
      y: 500,
    })
  }, [])

  return <div ref={revealRef}>{children}</div>
}

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.sun = null
    this.cloud = null

    this.moon = null
    this.state = {
      opacity: 0,
    }
  }

  darkenBackground = amount => {
    this.setState({ opacity: amount.progress * 0.3 })
  }

  lightenBackground = amount => {
    let opacity
    if (amount.progress > 0.5) {
      opacity = 0
    } else {
      opacity = ((1 - amount.progress) * 0.3 - 0.15) * 1.67
    }
    this.setState({ opacity: opacity })
  }

  componentDidMount() {
    let tl = gsap.timeline({})
    tl.fromTo(
      ".hero-title",
      1,
      {
        x: -20,
        opacity: 0,
        ease: "power3.inOut",
      },
      {
        x: 0,
        opacity: 1,
        ease: "power3.inOut",
      }
    )
    tl.fromTo(
      ".hero-subtitle",
      1,
      {
        x: -20,
        opacity: 0,
        ease: "power3.inOut",
      },
      {
        x: 0,
        opacity: 1,
        ease: "power3.inOut",
      },
      "-=.75"
    )

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scene-two",
        start: "top 700px",
        toggleActions: "play pause resume reset",
      },
    })

    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scene-two",
        start: "top 300px",
        end: "bottom 100px",
        toggleActions: "play pause resume reset",
      },
    })

    tl3.from(".hero-two-title", 1, { x: "-20px", opacity: 0.1 }, "-=1.5")
    tl3.from(".hero-two-subtitle", 1, { x: "-20px", opacity: 0.1 }, "-=1")

    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scene-three",
        start: "top 550px",
        end: "bottom 100px",
        toggleActions: "play pause resume reset",
      },
    })

    tl4.from(".hero-three-title", 1, { x: "-20px", opacity: 0.1 }, "-=1.5")
    tl4.from(".hero-three-subtitle", 1, { x: "-20px", opacity: 0.1 }, "-=1")
  }
  render() {
    return (
      <Layout bg={`rgba(0, 0, 0, ${this.state.opacity})`}>
        <SEO title="Home" />

        <div
          className="scene"
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
          `}
        >
          <div
            css={css`
              width: 35%;
              @media (max-width: 600px) {
                width: 100%;
              }
            `}
          >
            <H1Hero
              className="hero-title"
              css={css`
                opacity: 0;
              `}
            >
              Hi! I'm Ed.
            </H1Hero>
            <H3Hero
              className="hero-subtitle"
              css={css`
                opacity: 0;
              `}
            >
              I'm a software developer living in Denver, Colorado. I work in
              React and React Native.
            </H3Hero>
          </div>
          <div
            className="mtns-sun-container"
            css={css`
              margin-top: -14em;
              width: 80%;
              margin-left: auto;
              @media (max-width: 600px) {
                margin-top: 0;
                width: 100%;
              }
            `}
          >
            <MtnsSun />
          </div>
        </div>

        <div
          className="scene-two"
          css={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 10em 0;
            @media (max-width: 600px) {
              flex-direction: column-reverse;
              padding: 5em 0;
            }
          `}
        >
          <Reveal>
            <Moon ref={div => (this.moon = div)} />
          </Reveal>
          <div
            css={css`
              align-self: center;
              text-align: right;
              display: flex;
              flex-wrap: wrap;
              justify-content: flex-end;
              flex: 0 0 50%;
            `}
          >
            <H1Hero css={css``} className="hero-two-title">
              Dev + content
            </H1Hero>
            <H3Hero className="hero-two-subtitle">
              I'm a former content executive and ski-town newspaper/website
              editor who transitioned into software development after attending
              the Turing School of Software and Design. You can see my projects{" "}
              <a
                href="/projects"
                css={css`
                  color: white;
                `}
              >
                here
              </a>
              .
            </H3Hero>
          </div>
        </div>
        <div
          className="scene-three"
          css={css`
            padding: 10em 0;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            @media (max-width: 600px) {
              padding: 5em 0;
            }
          `}
        >
          {" "}
          <div
            css={css`
              align-self: center;
            `}
          >
            <H1Hero
              css={css`
                color: black;
              `}
              className="hero-three-title"
            >
              Hire me!
            </H1Hero>
            <H3Hero
              className="hero-three-subtitle"
              css={css`
                color: black;
              `}
            >
              Check out my <a href="">Github</a>,{" "}
              <a href="">alumni portfolio</a>, my <a href="">resume</a> and my{" "}
              <a href="">blog</a>.
            </H3Hero>
          </div>
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
