import React, { Component } from "react"
import { css } from "@emotion/core"
import gsap from "gsap"

class Moon extends Component {
  constructor(props) {
    super(props)
    this.moon = null
    this.star1 = null
    this.star2 = null
    this.star3 = null
  }

  componentDidMount() {
    let tl1 = gsap.timeline({
      delay: 0,
      repeat: 15,
      onComplete: function () {
        this.restart()
      },
    })
    tl1.to(this.star1, 0, {
      opacity: 1,
    })
    tl1.to(this.star1, 0.8, {
      ease: "power3.inOut",
      transformOrigin: "50% 50%",
      scale: 0.7,
    })

    tl1.to(this.star1, 1.2, {
      ease: "power3.inOut",
      transformOrigin: "50% 50%",
      scale: 1,
    })

    let tl2 = gsap.timeline({
      repeat: 15,
      delay: 0.4,
      onComplete: function () {
        this.restart()
      },
    })
    tl2.to(this.star2, 0, {
      opacity: 1,
    })
    tl2.to(this.star2, 0.8, {
      ease: "power3.inOut",
      transformOrigin: "50% 50%",
      scale: 0.7,
    })

    tl2.to(this.star2, 1.5, {
      ease: "power3.inOut",
      transformOrigin: "50% 50%",
      scale: 1,
    })

    let tl3 = gsap.timeline({
      delay: 0,
      repeat: 15,
      onComplete: function () {
        this.restart()
      },
    })
    tl3.to(this.star3, 0, {
      opacity: 1,
    })
    tl3.to(this.star3, 0.5, {
      ease: "power3.inOut",
      transformOrigin: "50% 50%",
      scale: 0.7,
    })
    tl3.to(this.star3, 1, {
      ease: "power3.inOut",
      transformOrigin: "50% 50%",
      rotation: 180,
    })
    tl3.to(this.star3, 1.6, {
      ease: "power3.inOut",
      transformOrigin: "50% 50%",
      scale: 1,
    })
    let tl4 = gsap.timeline({})
    tl4.fromTo(
      this.moon,
      0.5,
      {
        ease: "power3.inOut",
        opacity: 0,
      },
      {
        ease: "power3.inOut",
        opacity: 1,
      }
    )
  }

  render() {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 218 146.5"
        xmlSpace="preserve"
        css={css`
          width: 100%;
        `}
      >
        <g
          ref={g => (this.moon = g)}
          css={css`
            opacity: 0;
          `}
        >
          <path
            className="cls-1"
            d="M97.63,38.68v.2a4.2,4.2,0,1,1,0-.2Z"
            transform="translate(-4.51 -4.08)"
          />
          <path
            className="cls-1"
            d="M101.43,83.88a4.59,4.59,0,0,1-4.6,4.6,4.65,4.65,0,0,1-4.6-4.6,4.59,4.59,0,0,1,4.6-4.6,4.79,4.79,0,0,1,4.6,4.6Z"
            transform="translate(-4.51 -4.08)"
          />
          <path
            className="cls-1"
            d="M144,73.18a5.85,5.85,0,0,1-5.9,5.9,5.9,5.9,0,0,1,0-11.8,5.66,5.66,0,0,1,4.1,1.7A6,6,0,0,1,144,73.18Z"
            transform="translate(-4.51 -4.08)"
          />
          <path
            className="cls-1"
            d="M157.73,63.08a46,46,0,1,1-46-46A46,46,0,0,1,157.73,63.08Zm-9.6,10a10,10,0,1,0-10,10,9.73,9.73,0,0,0,7-2.9A10.69,10.69,0,0,0,148.13,73.08Zm-16-32.9a3.1,3.1,0,1,0-3.1,3.1A3.12,3.12,0,0,0,132.13,40.18Zm-14.3,57.3a3.1,3.1,0,1,0-3.1,3.1A3.12,3.12,0,0,0,117.83,97.48Zm-4.9-36.4a3.1,3.1,0,1,0-3.1,3.1A3.12,3.12,0,0,0,112.93,61.08ZM105.43,84a8.6,8.6,0,1,0-8.6,8.6A8.73,8.73,0,0,0,105.43,84Zm-12.1-36.7A8.3,8.3,0,1,0,85,39,8.22,8.22,0,0,0,93.33,47.28Zm-13.4,16.9a3.1,3.1,0,1,0-3.1,3.1A3.12,3.12,0,0,0,79.93,64.18Z"
            transform="translate(-4.51 -4.08)"
          />
          <path
            d="M111.73,13.08a50,50,0,1,1-50,50A50,50,0,0,1,111.73,13.08Zm0,96a46,46,0,1,0-46-46A46,46,0,0,0,111.73,109.08Z"
            transform="translate(-4.51 -4.08)"
          />
          <path
            d="M138.13,63.08a10,10,0,0,1,10,10,10.69,10.69,0,0,1-3,7.1,9.91,9.91,0,0,1-7,2.9,10,10,0,0,1,0-20Zm0,16a5.85,5.85,0,0,0,5.9-5.9,6.44,6.44,0,0,0-1.8-4.2,5.66,5.66,0,0,0-4.1-1.7,5.9,5.9,0,0,0,0,11.8Z"
            transform="translate(-4.51 -4.08)"
          />
          <circle cx="124.52" cy="36.1" r="3.1" />
          <circle cx="110.22" cy="93.4" r="3.1" />
          <circle cx="105.32" cy="57" r="3.1" />
          <path
            d="M96.83,75.38a8.6,8.6,0,0,1,8.6,8.6,8.73,8.73,0,0,1-8.6,8.6,8.6,8.6,0,0,1,0-17.2Zm0,13.1a4.59,4.59,0,0,0,4.6-4.6,4.31,4.31,0,0,0-1.4-3.2,4.72,4.72,0,0,0-3.2-1.4,4.59,4.59,0,0,0-4.6,4.6A4.65,4.65,0,0,0,96.83,88.48Z"
            transform="translate(-4.51 -4.08)"
          />
          <path
            d="M101.63,39a8.3,8.3,0,1,1-8.3-8.3A8.22,8.22,0,0,1,101.63,39Zm-4-.1v-.2a4.4,4.4,0,1,0,0,.2Z"
            transform="translate(-4.51 -4.08)"
          />
          <circle cx="72.32" cy="60.1" r="3.1" />
        </g>
        <path
          ref={path => (this.star1 = path)}
          css={css`
            opacity: 0;
          `}
          className="star1"
          d="M201,47.28a.37.37,0,0,1-.39-.33l-2.17-16.59-8.52,7a.4.4,0,0,1-.26.06.32.32,0,0,1-.26-.13.4.4,0,0,1,0-.52l7.08-8.59-16.65-2.1c-.2-.06-.4-.19-.4-.39a.37.37,0,0,1,.33-.39l16.59-2.23-7-8.52a.41.41,0,0,1,0-.53.58.58,0,0,1,.26-.13.39.39,0,0,1,.27.07l8.58,7,2.17-16.58a.4.4,0,0,1,.78,0L203.6,21l8.65-7a.38.38,0,0,1,.26-.07.34.34,0,0,1,.26.13.41.41,0,0,1,0,.53l-7,8.52,16.52,2.16a.4.4,0,0,1,0,.79l-16.59,2.23,7.08,8.58a.41.41,0,0,1,0,.53.49.49,0,0,1-.26.13.38.38,0,0,1-.26-.07L203.6,30.3l-2.17,16.58A.38.38,0,0,1,201,47.28Z"
          transform="translate(-4.51 -4.08)"
        />
        <path
          ref={path => (this.star2 = path)}
          css={css`
            opacity: 0;
          `}
          className="star2"
          d="M173.64,150.3a.37.37,0,0,1-.4-.33l-2.16-16.59-8.52,7a.43.43,0,0,1-.26.06.35.35,0,0,1-.27-.13.4.4,0,0,1,0-.52l7.08-8.59-16.65-2.1c-.19-.06-.39-.19-.39-.39a.36.36,0,0,1,.33-.39L169,126.11l-7-8.52a.41.41,0,0,1,0-.53.53.53,0,0,1,.26-.13c.07,0,.2,0,.26.07l8.59,7,2.16-16.58a.4.4,0,0,1,.79,0L176.19,124l8.66-7c.06-.07.19-.07.26-.07a.34.34,0,0,1,.26.13.41.41,0,0,1,0,.53l-7,8.52,16.52,2.16a.4.4,0,0,1,0,.79l-16.59,2.23,7.08,8.58a.41.41,0,0,1,0,.53.53.53,0,0,1-.26.13c-.07,0-.2,0-.26-.07l-8.66-7.14L174,149.9A.38.38,0,0,1,173.64,150.3Z"
          transform="translate(-4.51 -4.08)"
        />
        <path
          ref={path => (this.star3 = path)}
          css={css`
            opacity: 0;
          `}
          className="star3"
          d="M26.07,113.08a.37.37,0,0,1-.39-.33L23.52,96.16l-8.52,7a.45.45,0,0,1-.27.06.33.33,0,0,1-.26-.13.4.4,0,0,1,0-.52L21.55,94,4.9,91.9c-.2-.06-.39-.19-.39-.39a.36.36,0,0,1,.33-.39l16.58-2.23-7-8.52a.38.38,0,0,1,0-.53.49.49,0,0,1,.26-.13.38.38,0,0,1,.26.07l8.59,7,2.16-16.58a.4.4,0,0,1,.79,0l2.16,16.58,8.65-7a.38.38,0,0,1,.26-.07.37.37,0,0,1,.27.13.41.41,0,0,1,0,.53l-7,8.52,16.52,2.16a.4.4,0,0,1,0,.79L30.73,94.07l7.08,8.58a.41.41,0,0,1,0,.53.56.56,0,0,1-.27.13.38.38,0,0,1-.26-.07L28.63,96.1l-2.16,16.58A.38.38,0,0,1,26.07,113.08Z"
          transform="translate(-4.51 -4.08)"
        />
      </svg>
    )
  }
}

export default Moon
