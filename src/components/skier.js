import React, { Component } from "react"
import gsap, { CSSPlugin } from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { css } from "@emotion/core"

gsap.registerPlugin(MotionPathPlugin, CSSPlugin)

class Skier extends Component {
  constructor(props) {
    super(props)
    this.skier = null
    this.path = null
  }

  componentDidMount() {
    gsap.to(this.skier, {
      duration: 8,
      repeat: 12,
      repeatDelay: 1,
      // yoyo: true,
      ease: "power1.inOut",
      motionPath: {
        path: this.path,
        align: this.path,
        alignOrigin: [0.5, 0.5],
        // autoRotate: true,
      },
    })
  }

  render() {
    return (
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-100 -100 1000.57 1000.55"
      >
        <path
          ref={div => (this.path = div)}
          fill="none"
          d="M250.18.08a162.76,162.76,0,0,0,0,55c2.69,15.36,4.8,26.53,14,35,9.64,8.88,22.16,9.83,36,11,21.33,1.81,24.49-3.82,41-1,18.66,3.19,31.35,13.23,36,17,7.57,6.13,23.35,18.93,27,41,.81,4.89,3.19,20.72-6,36-10.26,17.07-28.11,22.07-35,24-4.72,1.32-7.44,1.53-34,2-34.72.61-38.75.41-45,4-12.87,7.38-18,20.95-21,29-3.22,8.57-9.39,25-2,40,5.22,10.61,14.77,15.61,27,22,12,6.3,14.72,4.78,32,12,17,7.11,25.51,10.66,32,18,9,10.21,15,26.45,11,42a43.69,43.69,0,0,1-11,19c-15.45,16.68-29.81,10.41-51,26-6.11,4.5-18.06,13.28-23,29-6.18,19.66,2.63,37.34,4,40,4.52,8.75,15.08,17.29,36,34,16,12.81,19.87,14.57,24,22,1.44,2.59,9.91,18.45,4,35-5.19,14.53-18.47,21.2-32,28-15.46,7.76-20,5.72-41,13-19.48,6.75-22.56,10.93-45,21-18.64,8.37-32.53,12.66-53,19-39.52,12.23-55.46,13.5-89,22a692.18,692.18,0,0,0-86,28"
          transform="translate(0.01 0)"
        />
        <g ref={div => (this.skier = div)}>
          <path
            fill="black"
            d="M163,7.67a10,10,0,1,0,10,10A10,10,0,0,0,163,7.67ZM163,21a3.33,3.33,0,1,1,3.34-3.33A3.33,3.33,0,0,1,163,21Z"
            transform="translate(0.01 0)"
          />
          <path
            fill="black"
            d="M193.58,42.67,166.34,69.86V60.43L173,53.77V37.21l15.48-15.47L183.76,17,166.45,34.34H136.34V41H153V51l-6.66,6.67V71L129.67,87.67h9.43L153,73.77V60.43l2.77-2.76h3.9V76.53L148.53,87.67H158l45.05-45ZM159.67,51V41h6.67V51Z"
            transform="translate(0.01 0)"
          />
          <polygon
            fill="black"
            stroke="10px"
            points="193.58 23.77 179.68 37.67 179.68 47.1 203.01 23.77 193.58 23.77"
          />
        </g>
      </svg>
    )
  }
}

export default Skier
