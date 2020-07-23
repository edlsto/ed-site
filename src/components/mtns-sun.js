import React, { Component } from "react"
import { css } from "@emotion/core"
import "./mtns-sun.css"
import gsap, { CSSPlugin } from "gsap"

class MtnsSun extends Component {
  constructor(props) {
    super(props)
    this.sun = null
  }

  componentDidMount() {
    // use the node ref to create the animation
    let tl = gsap.timeline({})
    tl.fromTo(
      this.sun,
      1,
      {
        y: 350,
        // ease: "back.out(1.7)",
      },
      {
        y: 0,
        ease: "power3.out",
      }
    )
    tl.to(
      this.sun,
      15,
      {
        rotation: 180,
        transformOrigin: "50% 50%",
        repeat: -1,
        ease: "none",
      },
      "-=2"
    )
  }

  render() {
    return (
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 594.05 403.15"
      >
        <g className="sun" ref={g => (this.sun = g)} z-index="-1">
          <path
            d="M327.75,19.15a14.4,14.4,0,1,0,14.4,14.4A14.47,14.47,0,0,0,327.75,19.15Z"
            transform="translate(-1.9 -9.6)"
          />
          <g>
            <g>
              <path
                d="M327.75,17.85a.94.94,0,0,1-1-1V12a1,1,0,1,1,2,0v4.9A1,1,0,0,1,327.75,17.85Z"
                transform="translate(-1.9 -9.6)"
              />
              <path
                d="M327.75,56.15a.94.94,0,0,1-1-1v-4.9a1,1,0,0,1,2,0v4.9A.94.94,0,0,1,327.75,56.15Z"
                transform="translate(-1.9 -9.6)"
              />
              <g>
                <path
                  d="M331.75,18.35h-.2a1,1,0,0,1-.7-1.2l1.7-6.8a1,1,0,1,1,1.9.5l-1.7,6.7A1.15,1.15,0,0,1,331.75,18.35Z"
                  transform="translate(-1.9 -9.6)"
                />
                <path
                  d="M322.15,57.55H322a1,1,0,0,1-.7-1.2l1.5-6.8a1,1,0,0,1,1.9.5l-1.7,6.8A.77.77,0,0,1,322.15,57.55Z"
                  transform="translate(-1.9 -9.6)"
                />
              </g>
            </g>
            <g>
              <path
                d="M349.35,34.55h-4.9a1,1,0,0,1,0-2h4.9a1,1,0,0,1,0,2Z"
                transform="translate(-1.9 -9.6)"
              />
              <path
                d="M311.05,34.55h-4.9a1,1,0,0,1,0-2h4.9a.94.94,0,0,1,1,1A1,1,0,0,1,311.05,34.55Z"
                transform="translate(-1.9 -9.6)"
              />
              <g>
                <path
                  d="M350.75,40.15h-.2l-6.8-1.6a1,1,0,0,1,.5-1.9l6.8,1.7a1,1,0,0,1,.7,1.2A1.05,1.05,0,0,1,350.75,40.15Z"
                  transform="translate(-1.9 -9.6)"
                />
                <path
                  d="M311.55,30.55h-.2l-6.8-1.7a1,1,0,1,1,.5-1.9l6.7,1.6a1,1,0,0,1-.2,2Z"
                  transform="translate(-1.9 -9.6)"
                />
              </g>
            </g>
          </g>
          <g>
            <g>
              <path
                d="M336.05,20.05a.9.9,0,0,1-.5-.1,1.11,1.11,0,0,1-.4-1.4l2.5-4.3a1,1,0,1,1,1.8,1l-2.5,4.3A1.05,1.05,0,0,1,336.05,20.05Z"
                transform="translate(-1.9 -9.6)"
              />
              <path
                d="M317,53.25a.9.9,0,0,1-.5-.1,1.11,1.11,0,0,1-.4-1.4l2.5-4.3a1,1,0,0,1,1.8,1l-2.5,4.3A1,1,0,0,1,317,53.25Z"
                transform="translate(-1.9 -9.6)"
              />
              <g>
                <path
                  d="M339.35,22.45a1.08,1.08,0,0,1-.7-.3,1,1,0,0,1,0-1.4l4.8-5a1,1,0,0,1,1.4,1.4l-4.8,5A1.08,1.08,0,0,1,339.35,22.45Z"
                  transform="translate(-1.9 -9.6)"
                />
                <path
                  d="M311.35,51.65a1.08,1.08,0,0,1-.7-.3,1,1,0,0,1,0-1.4l4.8-5a1,1,0,0,1,1.4,1.4l-4.8,5A.91.91,0,0,1,311.35,51.65Z"
                  transform="translate(-1.9 -9.6)"
                />
              </g>
            </g>
            <g>
              <path
                d="M346.45,45.35a.9.9,0,0,1-.5-.1l-4.2-2.5a1,1,0,1,1,1-1.8l4.3,2.5a1.11,1.11,0,0,1,.4,1.4A1.39,1.39,0,0,1,346.45,45.35Z"
                transform="translate(-1.9 -9.6)"
              />
              <path
                d="M313.25,26.25a.9.9,0,0,1-.5-.1l-4.2-2.5a1,1,0,0,1,1-1.8l4.2,2.5a1.11,1.11,0,0,1,.4,1.4A1.05,1.05,0,0,1,313.25,26.25Z"
                transform="translate(-1.9 -9.6)"
              />
              <g>
                <path
                  d="M344.85,51a1.08,1.08,0,0,1-.7-.3l-5-4.8a1,1,0,0,1,1.4-1.4l5,4.8a1,1,0,0,1,0,1.4A.91.91,0,0,1,344.85,51Z"
                  transform="translate(-1.9 -9.6)"
                />
                <path
                  d="M315.65,23a1.08,1.08,0,0,1-.7-.3l-5-4.8a1,1,0,1,1,1.4-1.4l5,4.8a1,1,0,0,1,0,1.4A.78.78,0,0,1,315.65,23Z"
                  transform="translate(-1.9 -9.6)"
                />
              </g>
            </g>
          </g>
          <g>
            <g>
              <path
                d="M342.15,26.05a1.19,1.19,0,0,1-.9-.5,1,1,0,0,1,.4-1.4l4.2-2.5a1,1,0,0,1,1,1.8l-4.2,2.5A4.33,4.33,0,0,0,342.15,26.05Z"
                transform="translate(-1.9 -9.6)"
              />
              <path
                d="M309.15,45.55a1.19,1.19,0,0,1-.9-.5,1,1,0,0,1,.4-1.4l4.2-2.5a1,1,0,0,1,1,1.8l-4.2,2.5A.75.75,0,0,1,309.15,45.55Z"
                transform="translate(-1.9 -9.6)"
              />
              <g>
                <path
                  d="M343.75,29.65a1.2,1.2,0,0,1-1-.7.89.89,0,0,1,.7-1.2l6.7-2a.89.89,0,0,1,1.2.7c.1.6-.1,1.1-.7,1.2l-6.7,2Z"
                  transform="translate(-1.9 -9.6)"
                />
                <path
                  d="M305.05,41.45a1.2,1.2,0,0,1-1-.7.89.89,0,0,1,.7-1.2l6.7-2a.9.9,0,0,1,1.3.6.86.86,0,0,1-.7,1.2l-6.7,2A.37.37,0,0,1,305.05,41.45Z"
                  transform="translate(-1.9 -9.6)"
                />
              </g>
            </g>
            <g>
              <path
                d="M338.75,53.15a1.19,1.19,0,0,1-.9-.5l-2.5-4.2a1,1,0,1,1,1.8-1l2.5,4.2a1,1,0,0,1-.4,1.4A.75.75,0,0,1,338.75,53.15Z"
                transform="translate(-1.9 -9.6)"
              />
              <path
                d="M319.25,20.15a1.19,1.19,0,0,1-.9-.5l-2.5-4.2a1,1,0,0,1,.4-1.4,1.08,1.08,0,0,1,1.4.3l2.5,4.2a1,1,0,0,1-.4,1.4A.55.55,0,0,1,319.25,20.15Z"
                transform="translate(-1.9 -9.6)"
              />
              <g>
                <path
                  d="M334.65,57.25a1.2,1.2,0,0,1-1-.7l-2-6.7a1,1,0,0,1,1.9-.5l2,6.7a.89.89,0,0,1-.7,1.2C334.85,57.15,334.75,57.25,334.65,57.25Z"
                  transform="translate(-1.9 -9.6)"
                />
                <path
                  d="M322.85,18.55a1.2,1.2,0,0,1-1-.7l-2-6.7a1,1,0,0,1,1.9-.5l2,6.7c.3.4,0,1-.6,1.2Z"
                  transform="translate(-1.9 -9.6)"
                />
              </g>
            </g>
          </g>
        </g>
        <g>
          <path
            className="cls-1"
            d="M418.4,127.9c-1.3,1-2.4,2-3.6,3s-2.2,1.7-3.3,2.5-1.9.9-2.9-.2a36.92,36.92,0,0,1-2.9-4c-.9-1.5-1.7-3-2.6-4.5s-1.9-1.5-3.2-.4a57.55,57.55,0,0,0-7.6,8,23.91,23.91,0,0,1-2.2,2.3c-.8.8-1.1.8-2.1.1a20.67,20.67,0,0,1-4.5-4.8c-1.6-2.1-3.1-4.2-4.7-6.4a3,3,0,0,0-3.8-1.1,16.18,16.18,0,0,0-1.8,1,27.86,27.86,0,0,0-7.9,7,19.28,19.28,0,0,1-2.7,3,9,9,0,0,1-1,.9.91.91,0,0,1-1.2,0c-.1-.1-.1-.2-.2-.3-1-1.6-2-3.2-3.1-4.8s-2.2-3.3-3.5-4.9a29.49,29.49,0,0,0-2.5-2.5c.3-.4.5-.9.9-1.4,2.2-3.2,4.4-6.5,6.8-9.7,1.8-2.4,3.7-4.7,5.6-7,3.8-4.5,7.6-9.1,11.1-13.9.5-.7,1.1-1.3,1.6-2l3.9-5.1c.9-1.2,1.9-2.4,3-3.8.8,1.1,1.5,1.9,2.1,2.8,1.7,2.4,3.4,4.9,5.1,7.4l2.4,3.6c2.2,3.1,4.4,6.3,6.6,9.4,1.7,2.4,3.5,4.7,5.3,7.1,2.5,3.4,4.9,6.8,7.3,10.2C414.6,122.2,416.4,124.9,418.4,127.9Z"
            transform="translate(-1.9 -9.6)"
          />
          <path
            className="cls-1"
            d="M312.9,159.5a29.56,29.56,0,0,1-2.4,2.6c-3,2.9-6.1,5.7-9.2,8.5-1.6,1.5-3.4,2.8-5,4.3-.7.6-1.4,1.3-2.1,1.9-2.4,2.2-4.9,4.4-7.4,6.6-1.6,1.4-3.1,2.8-4.7,4.1-1,.9-1.9,1.9-3,2.8-3.4,3-6.9,5.9-10.3,8.9-2.6,2.3-5.2,4.7-7.8,7-1.1,1-2.2,2.1-3.3,3.1a2.44,2.44,0,0,1-2-1.5c-2-4.2-4.1-8.5-6.1-12.7-1.3-2.7-2.8-5.3-3.9-8.1-2.7-6.2-6.1-12-9.2-18a.1.1,0,0,0-.1-.1c-1.2-2.3-1.2-2.3.4-4.5,2.1-2.8,4-5.6,6-8.4,1.6-2.2,3.2-4.4,4.9-6.6l.8-.8c.7.6,1.3,1.2,2,1.8a15,15,0,0,0,5.5,3.1,3.25,3.25,0,0,0,3.6-.8c1.1-1.2,2.3-2.5,3.4-3.8,1.4-1.6,2.8-3.1,4.2-4.7a13,13,0,0,1,1.5-1,11.51,11.51,0,0,1,1.7,1.4c1.6,1.7,3.1,3.5,4.8,5.1a24.84,24.84,0,0,0,3,2.5,1.84,1.84,0,0,0,2.8-.5,79.66,79.66,0,0,1,5.5-6.1A11.32,11.32,0,0,1,291,143a3.44,3.44,0,0,1,3.6.7c2,1.9,4,3.7,6,5.6a17.38,17.38,0,0,1,1.3,1.5c.1.1.1.3.2.4,1.5,1.6,2.8,2.4,4.2-.7Z"
            transform="translate(-1.9 -9.6)"
          />
          <path
            className="cls-1"
            d="M303.7,147.6a3.55,3.55,0,0,1-.9-.4c-2.4-2.2-4.9-4.3-7.2-6.5a4.44,4.44,0,0,0-5.3-1.1,21.39,21.39,0,0,0-8.6,6.2c-.9,1-1.8,2-2.8,3a22.32,22.32,0,0,1-4-3.5c-1.5-1.5-3-3.1-4.5-4.6a4.19,4.19,0,0,0-1.4-.9,1.89,1.89,0,0,0-2.5.5c-.2.2-.3.4-.5.5-2.4,1.7-3.9,4.1-5.7,6.3a29.56,29.56,0,0,1-2.4,2.6,2.27,2.27,0,0,1-2.8.5,13.94,13.94,0,0,1-4.5-3.1c-.2-.2-.3-.5-.5-.7,1.4-1.7,2.9-3.3,4.3-5,2.3-2.8,4.6-5.5,6.9-8.3,1.7-2.1,3.4-4.1,5.2-6.2a2.19,2.19,0,0,0,.3-.5c1.5-2,2.9-4,4.4-6l3.3-4.2,2.8-3.1a8.64,8.64,0,0,1,1.6,1c2.1,1.9,4.2,3.8,6.1,5.9s3.5,4.4,5.2,6.7c2.5,3.3,4.9,6.7,7.1,10.2l4.8,7.8A11.47,11.47,0,0,1,303.7,147.6Z"
            transform="translate(-1.9 -9.6)"
          />
          <path
            className="cls-1"
            d="M210.2,136.7a2.35,2.35,0,0,1,.2.8c-.6-.4-1.2-1-1.8-1.5-.6-.8-1.4-.8-2.2-1a1.82,1.82,0,0,0-1.6.8c-1.7,1.8-3.5,3.5-5.2,5.3s-3,3.5-4.5,5.2l-1.5,1.7a24.23,24.23,0,0,1-4.5-5.1,77.57,77.57,0,0,0-6.5-8.6,5.24,5.24,0,0,0-1.1-1,2.42,2.42,0,0,0-2.9.3,69.09,69.09,0,0,0-6,5c-2.9,2.9-5.6,5.9-8.4,8.9a1.79,1.79,0,0,0-.5.7,5.89,5.89,0,0,1-2.3-2.4c-.9-1.4-2.3-3.7-4.9-8l3.8-7.2c.4-.7.7-1.4,1.1-2.1,1.1-2,2.2-4,3.4-5.9,2-3.2,4.1-6.4,6.1-9.6.9-1.5,1.7-3,2.6-4.5,1.4-2.2,2.8-4.3,4.2-6.5,2.6-4.1,5.3-8.2,7.9-12.3.3-.3.5-.6.8-.9L187,90a3.7,3.7,0,0,1,.5,1.1,86,86,0,0,0,5.8,11.8c1.4,2.5,2.5,5.2,3.7,7.8.8,1.7,1.5,3.5,2.4,5.2,2.2,4.6,4.5,9.1,6.8,13.7.6,1.1,1.4,2.1,2,3.2C208.8,134.1,209.5,135.4,210.2,136.7Z"
            transform="translate(-1.9 -9.6)"
          />
          <path
            className="cls-1"
            d="M590.3,407.1a9.93,9.93,0,0,1,1.4,2.7c-23.7-10.8-51.1-8.5-77-11.6-17.9-2.2-35.4-7-53.4-8.8-24.1-2.5-48.5.4-72.7-.9-15.4-.8-30.7-3.4-46.1-3.6-14.5-.2-29,1.7-43.5,3-40.7,3.6-81.4,6.5-121.9,1.3-20.1-2.6-40.7-5.1-60.4-.5a82.66,82.66,0,0,1-11,2.3,51.54,51.54,0,0,1-11.1-.3q-43-3.6-86.2-3a32.52,32.52,0,0,1-5.4-.2c.7-2,2.5-3.5,2.9-5.6a9.19,9.19,0,0,0,2-3.1c1.3-2.2,2.8-4.3,4.2-6.5l.6-.9c1.4-2.4,2.8-4.8,4.3-7.2,1.1-1.9,2.4-3.6,3.6-5.5,1.6-2.7,3.2-5.4,4.9-8,3.1-4.7,6.1-9.5,9.5-14,1.8-2.3,3.4-4.8,5.2-7.1s3.8-4.6,5.6-7c2.2-2.9,4.5-5.8,6.4-8.9.3-.5.6-.9.9-1.4a11.32,11.32,0,0,1,1-1.3c1.2-1.5,2.4-2.9,3.5-4.4,1.9-2.6,3.7-5.3,5.6-8,1.7-2.5,3.5-4.9,5.2-7.4,1.2-1.8,2.5-3.6,3.7-5.5L79.6,274c2-3.2,4-6.4,6.1-9.6,1.3-2,2.7-3.9,4-5.8l5.4-8.1c1.2-1.8,2.5-3.6,3.7-5.5,1.5-2.5,3-5.1,4.4-7.6,1.8-3.1,3.6-6.1,5.2-9.2,2.1-4,4.1-8.1,6.2-12.1,1.7-3.1,3.5-6.1,5.2-9.2,1.8-3.3,3.6-6.5,5.4-9.8,1.6-3,3.3-6,4.9-9.1.5-1,.9-2,1.4-3a14,14,0,0,0,1-1.6c1.9-4.2,3.8-8.5,5.9-12.5,2.4-4.6,4.8-9.3,7.2-13.9.8-1.5,1.6-2.8,2.4-4.3s1.4-2.8,2.1-4.1c1.2-2.2,2.4-4.5,3.7-6.6a13.44,13.44,0,0,1,1.1-1.4c.2.1.3.3.4.4,1,1.5,1.9,3.1,2.9,4.5.4.5.7,1.1,1.1,1.6.7,1,1.4,2,2.2,3.1s1.6,2.5,3.5,2.3c.2-.3.4-.8.7-1.2a21.28,21.28,0,0,1,1.6-2.5c1.8-2.1,3.6-4.2,5.6-6.2a59.88,59.88,0,0,1,6.1-5.2c1.2-.9,1.6-.9,2.5.3,1.4,1.7,2.7,3.6,4.1,5.4s2.7,3.6,4.1,5.4a25.47,25.47,0,0,0,2.6,3,6.5,6.5,0,0,0,2.2,1.1c.7.2.9-.5,1.2-1a43.79,43.79,0,0,1,6.6-8.3c1.1-1,2.3-2,3.4-2.9a1.94,1.94,0,0,1,2.4-.2c1,.6,2.1,1.2,3.1,1.8a26.25,26.25,0,0,1,7.9,6.9c2.8,3.7,5.6,7.4,8.2,11.2,1.3,1.8,2.4,3.8,3.6,5.7.3.5,1.9,4.3,2.6,4.6.2.2.3.5.5.7,1.6,3,3.2,6,4.7,9l4.2,8.4,3.3,6.9,6.6,13.5a3.37,3.37,0,0,1,.5,1.7,3.67,3.67,0,0,0,.1,1.8c.1.2.3.3.3.5a.52.52,0,0,1-.2.4c-2,2.1-4.1,4.2-6.1,6.3-2.4,2.4-4.8,4.8-7.1,7.2-1.2,1.3-2.5,2.6-3.6,4-2.6,3.1-5.1,6.2-7.6,9.2a4.74,4.74,0,0,1-1,1,1.75,1.75,0,0,0-.6,2.3,1.84,1.84,0,0,0,2.6.6h0a4.26,4.26,0,0,0,1.2-1.1c1.4-1.8,2.6-3.6,4.1-5.4A93,93,0,0,1,245.7,226c2.3-2.1,4.4-4.5,6.6-6.7s4.5-4.3,6.8-6.5c1.5-1.4,2.9-2.8,4.4-4.2l6-5.4c1.1-1,2.2-2,3.4-3,2.1-1.9,4.3-3.7,6.4-5.6,2.3-2,4.6-4.1,6.9-6.1,1.3-1.2,2.6-2.4,3.9-3.5,1-.9,2.1-1.7,3.1-2.6,2.2-1.9,4.4-3.9,6.6-5.9l9.3-8.4c1.6-1.4,3.2-2.9,4.6-4.4.4-.4.9-.8,1.4-1.3.2.2,3-2,2.5-2.5.4-.5.8-1,1.1-1.4,2.1-2.3,4.2-4.7,6.3-7,2.6-2.8,5.2-5.5,7.8-8.3l2.5-2.7c.3-.3.6-.8.9-.8,1.2-.1,1.6-1,2.2-1.8a15.38,15.38,0,0,1,1.2-1.3L345,131a32.32,32.32,0,0,1,5.8-5.3c.8,1.1,1.4,2.2,2.2,3.1,1.8,2,2.8,4.3,4.1,6.5a7.34,7.34,0,0,0,2.8,3c1.3.7,1.7.8,2.7-.3,1.7-1.7,3.3-3.5,4.8-5.3a21.35,21.35,0,0,1,7.5-6.2c2.4-1.2,3.4,2.2,4.5,3.7,1.7,2.2,3.5,4.3,5.3,6.5a8.69,8.69,0,0,0,3.5,2.5,2,2,0,0,0,2.6-.5,53.71,53.71,0,0,0,4.9-5.8c.6-.8,4.8-5.9,5.8-4.2.5.9,1,1.7,1.5,2.6a18.35,18.35,0,0,0,5.1,6.6c1.8,1.4,3,1.2,4.4-.6a12,12,0,0,1,1.1-1.2c1.1-1,2.3-1.9,3.4-2.9a40.81,40.81,0,0,1,3.3-2.5c1.8,3.3,3.5,6.3,5.2,9.4,1.6,2.9,3.1,5.8,4.6,8.7,2,3.9,4.1,7.8,6.1,11.6,1.4,2.7,2.8,5.4,4.2,8,1,1.8,2,3.7,3,5.5,1.3,2.5,2.6,5,4,7.5,2.1,3.7,4,7.5,6.2,11.1,1.6,2.7,3,5.6,4.5,8.4.9,1.7,1.9,3.4,2.8,5.1,1.7,3.2,3.2,6.4,5,9.5,1.9,3.4,4.1,6.6,6.1,9.9a7.55,7.55,0,0,1,1.3,2.3,7.47,7.47,0,0,0,2,3.7,2.41,2.41,0,0,1,.6.8,39.78,39.78,0,0,0,3.4,5.6c1.2,1.8,2.1,3.7,3.2,5.5,1,1.6,2.1,3,3,4.6,2.4,4.3,5.1,8.3,7.8,12.4l6.6,10.2,4.2,6.6c1.4,2.2,3,4.6,4.5,6.9,1.8,2.8,3.6,5.6,5.5,8.4,2.4,3.4,4.9,6.6,7.4,9.9,2,2.6,4,5.1,6,7.7,1.5,1.9,3,3.8,4.4,5.8,2.6,3.8,5.1,7.6,7.5,11.5l11.7,18.6c2.4,3.8,4.7,7.7,7,11.6,1.3,2.2,2.5,4.4,3.8,6.6s2.6,4.5,4,6.6,2.8,4.4,4.3,6.5l6,8.1a22.54,22.54,0,0,1,2.4,3c2.2,3.5,4.3,7.1,6.4,10.6.5.8.9,1.7,1.5,2.6C588,403.5,589.2,405.3,590.3,407.1Z"
            transform="translate(-1.9 -9.6)"
          />
          <path
            className="cls-2"
            d="M591.7,409.9a8.67,8.67,0,0,0-1.4-2.7c-1.1-1.8-2.3-3.6-3.4-5.5-.5-.8-1-1.7-1.5-2.6-2.1-3.6-4.2-7.1-6.4-10.6-.7-1.1-1.7-2-2.4-3-2-2.7-4.1-5.4-6-8.1-1.5-2.1-2.9-4.3-4.3-6.5s-2.7-4.4-4-6.7-2.5-4.4-3.8-6.6c-2.3-3.9-4.6-7.8-7-11.6-3.9-6.2-7.7-12.3-11.7-18.5-2.5-3.9-5-7.7-7.5-11.5-1.4-2-2.9-3.9-4.4-5.8-2-2.6-4-5.1-6-7.7-2.5-3.3-5-6.5-7.4-9.9-1.9-2.7-3.7-5.6-5.5-8.4l-4.5-6.9c-1.5-2.3-2.8-4.4-4.2-6.6l-6.6-10.2c-2.7-4.1-5.4-8.1-7.8-12.4-.9-1.6-2-3.1-3-4.6-1.1-1.8-2.1-3.7-3.2-5.5a46.45,46.45,0,0,1-3.4-5.6,5.55,5.55,0,0,0-.6-.8,7.47,7.47,0,0,1-2-3.7,7.55,7.55,0,0,0-1.3-2.3c-2-3.3-4.2-6.5-6.1-9.9-1.8-3.1-3.3-6.3-5-9.5-.9-1.7-1.9-3.4-2.8-5.1-1.5-2.8-2.9-5.7-4.5-8.4-2.2-3.7-4.1-7.5-6.2-11.1-1.4-2.5-2.7-5-4-7.5-1-1.8-2-3.6-3-5.5-1.4-2.7-2.8-5.4-4.2-8-2-3.9-4-7.8-6.1-11.6-1.5-2.9-3.1-5.8-4.6-8.7-1.7-3.1-3.4-6.2-5.2-9.4-1.2.9-2.3,1.7-3.3,2.5s-2.3,1.9-3.4,2.9a12,12,0,0,0-1.1,1.2c-1.3,1.8-2.5,1.9-4.4.6a18.35,18.35,0,0,1-5.1-6.6c-.5-.9-1-1.7-1.5-2.6-1-1.8-5.2,3.3-5.8,4.2a53.71,53.71,0,0,1-4.9,5.8,2,2,0,0,1-2.6.5,10.72,10.72,0,0,1-3.5-2.5c-1.8-2.1-3.6-4.3-5.3-6.5-1.1-1.4-2.1-4.8-4.5-3.7a21.53,21.53,0,0,0-7.5,6.2,60.38,60.38,0,0,1-4.8,5.3c-1.1,1.1-1.4,1-2.7.3a7.34,7.34,0,0,1-2.8-3c-1.3-2.2-2.4-4.6-4.1-6.5-.8-.9-1.4-2-2.2-3.1a32.32,32.32,0,0,0-5.8,5.3l-5.5,5.7a7.41,7.41,0,0,0-1.2,1.3c-.5.9-1,1.7-2.2,1.8-.3,0-.6.5-.9.8l-2.5,2.7c-2.6,2.8-5.2,5.5-7.8,8.3-2.1,2.3-4.2,4.7-6.3,7a8.54,8.54,0,0,0-1.1,1.4c.5.5-2.3,2.7-2.5,2.5A17.88,17.88,0,0,0,314,164a38.11,38.11,0,0,1-4.6,4.4c-3.2,2.7-6.2,5.6-9.3,8.4-2.2,2-4.4,3.9-6.6,5.9-1,.9-2.1,1.7-3.1,2.6-1.3,1.1-2.6,2.4-3.9,3.5-2.3,2.1-4.6,4.1-6.9,6.1-2.1,1.9-4.3,3.7-6.4,5.6-1.1,1-2.3,2-3.4,3l-6,5.4c-1.5,1.4-3,2.8-4.4,4.2-2.3,2.2-4.6,4.3-6.8,6.5s-4.3,4.6-6.6,6.7a101,101,0,0,0-10.3,11.4c-1.4,1.8-2.7,3.6-4.1,5.4a6.28,6.28,0,0,1-1.2,1.1,1.84,1.84,0,0,1-2.6-.6h0a1.66,1.66,0,0,1,.6-2.3,9.43,9.43,0,0,0,1-1c2.6-3.1,5-6.2,7.6-9.2,1.1-1.4,2.4-2.7,3.6-4,2.4-2.4,4.8-4.8,7.1-7.2,2-2.1,4.1-4.2,6.1-6.3a.52.52,0,0,0,.2-.4.85.85,0,0,0-.3-.5c-.3-.5-.1-1.1-.1-1.8a4.8,4.8,0,0,0-.5-1.7q-3.45-6.75-6.6-13.5l-3.3-6.9c-1.4-2.8-2.7-5.6-4.2-8.4-1.5-3-3.1-6-4.7-9a3,3,0,0,0-.5-.7c-.6-.4-2.3-4.2-2.6-4.6-1.2-1.9-2.3-3.9-3.6-5.7-2.6-3.8-5.4-7.5-8.2-11.2a26.08,26.08,0,0,0-7.9-6.9c-1-.6-2.1-1.2-3.1-1.8a2.31,2.31,0,0,0-2.4.2c-1.2,1-2.3,1.9-3.4,2.9a40.86,40.86,0,0,0-6.6,8.3c-.3.4-.5,1.2-1.2,1a4.59,4.59,0,0,1-2.2-1.1,18.67,18.67,0,0,1-2.6-3c-1.4-1.8-2.7-3.6-4.1-5.4s-2.6-3.6-4.1-5.4c-.9-1.1-1.4-1.2-2.5-.3-2.1,1.6-4.1,3.4-6.1,5.2-2,2-3.8,4.1-5.6,6.2a21.28,21.28,0,0,0-1.6,2.5c-.3.5-.5.9-.7,1.2-1.9.2-2.7-1.1-3.5-2.3s-1.5-2-2.2-3.1l2.1-1.4a5.89,5.89,0,0,0,2.3,2.4c.2-.2.3-.5.5-.7,2.8-3,5.5-6,8.4-8.9,1.8-1.8,4-3.3,6-5a2.42,2.42,0,0,1,2.9-.3,5.24,5.24,0,0,1,1.1,1,92.26,92.26,0,0,1,6.5,8.6,27.42,27.42,0,0,0,4.5,5.1l1.5-1.7c1.5-1.7,2.9-3.5,4.5-5.2s3.5-3.5,5.2-5.3a2.09,2.09,0,0,1,1.6-.8,2.55,2.55,0,0,1,2.2,1,6.55,6.55,0,0,0,1.8,1.5c-.1-.3-.1-.5-.2-.8-.7-1.3-1.4-2.6-2.2-3.9-.6-1.1-1.4-2.1-2-3.2-2.3-4.5-4.5-9.1-6.8-13.7-.8-1.7-1.6-3.4-2.4-5.2-1.2-2.6-2.3-5.3-3.7-7.8a99.28,99.28,0,0,1-5.8-11.8,5.36,5.36,0,0,0-.5-1.1l2.9-.9c.4.9.7,1.9,1.2,2.8,1.7,3.5,3.7,6.9,5.4,10.4,1.4,2.7,2.6,5.5,3.9,8.3,1.6,3.3,3.1,6.6,4.7,9.9,1,2.1,2,4.2,3.1,6.3,1,1.8,2.2,3.4,3.1,5.2a77.4,77.4,0,0,0,5.2,8.3,1.6,1.6,0,0,0,1.3.9,1.11,1.11,0,0,1,1.1,1.1v.2a2.27,2.27,0,0,0,.6,1.6c3.1,4.1,6.3,8.1,9.3,12.3,1.6,2.2,2.9,4.6,4.5,7,.2-.3.5-.5.7-.8,1.6-2.1,3.1-4.3,4.7-6.4,2.7-3.6,5.3-7.2,8-10.8,2.4-3.1,5-6.1,7.5-9.1s5-5.9,7.4-9c2.9-3.8,5.7-7.7,8.5-11.6,1.1-1.6,2.4-3,3.6-4.6.2-.4.5-.9.7-1.3a2.7,2.7,0,0,1,2.7-1.6,2.11,2.11,0,0,1,1.3.5c1.8,1.6,3.6,3.2,5.4,5s3.4,3.4,4.9,5.2a52,52,0,0,1,5.5,6.9c2.2,3.3,4.8,6.4,6.5,10,.4.7.9,1.3,1.3,2,1.6,2.6,3.2,5.2,4.7,7.8a49.17,49.17,0,0,0,5.1,6.9c1.1,1.4,2.1,2.9,3.3,4.5.7-.6,1.3-1.2,1.8-1.7,2-2.2,3.9-4.4,5.9-6.6s3.9-4.3,5.9-6.4c5-5.2,9.3-11,14.1-16.5,1.3-1.5,2.6-2.9,3.8-4.4,1.6-2.2,3.1-4.5,4.8-6.7,2.9-3.9,5.6-8,8.9-11.7,1.5-1.6,2.7-3.4,4.1-5.2,1.6-2,3.3-4,4.9-6.1,2.5-3.3,4.9-6.6,7.4-9.9,1.1-1.5,2.4-2.8,3.5-4.2a9.39,9.39,0,0,0,1.4-2.6,1.63,1.63,0,0,1,1.3-1.1,3.79,3.79,0,0,1,2.9.6c.2.2.6.5.6.8a5,5,0,0,0,1.4,2.9c2.6,4,5.3,8.1,8.1,12,3.5,4.9,7.1,9.8,10.6,14.7,2.5,3.5,5,7.1,7.5,10.6,2.3,3.3,4.5,6.6,6.7,9.7.8.2,2.7,4.3,3,4.9,1.8,3.2,3.7,6.5,5.5,9.8,1.5,2.9,3,5.7,4.5,8.6,2.2,4.2,4.4,8.5,6.6,12.7,1.4,2.5,2.8,5,4.1,7.6.8,1.4,1.5,2.9,2.3,4.4,1.3,2.4,2.6,4.7,3.9,7.1,2.5,4.3,5,8.6,7.4,13,2.8,5,5.2,10.2,8,15.2s5.3,9.9,8.7,14.4c1.2,1.5,2,3.3,3.5,4.6a2.92,2.92,0,0,1,.5,1.4,17.23,17.23,0,0,0,.7,2.1c1.1,1.9,2.4,3.8,3.5,5.7,2.1,3.5,4.2,7.1,6.3,10.7,1.3,2.2,2.7,4.3,4,6.5,1.6,2.4,3.2,4.8,4.7,7.3,4,6.4,8,12.7,12.1,19.1,1.6,2.5,3.3,5,5,7.5,3.5,5.3,7.5,10.2,11.3,15.3s7.6,10.2,11.3,15.4c1.7,2.3,3.2,4.7,4.7,7.1,2.8,4.3,5.5,8.6,8.2,13,3.2,5.3,6.4,10.6,9.5,15.9,2.8,4.7,5.4,9.4,8.3,14a120.7,120.7,0,0,0,9.3,13.2,94.59,94.59,0,0,1,9.8,14.5c2.1,3.9,4.5,7.6,6.8,11.4.4.6.9,1.2,1.3,1.8a2.36,2.36,0,0,1,.1,2.3,1.76,1.76,0,0,1-2.4.6.1.1,0,0,1-.1-.1,3.79,3.79,0,0,1-1.8-2.3C591.8,410,591.8,409.9,591.7,409.9Zm-176.9-279c1.2-1,2.4-1.9,3.6-3-2-3-3.9-5.8-5.8-8.5-2.4-3.4-4.9-6.8-7.3-10.2-1.7-2.4-3.6-4.7-5.3-7.1-2.2-3.1-4.4-6.2-6.6-9.4L391,89.1c-1.7-2.5-3.4-4.9-5.1-7.4-.6-.9-1.3-1.7-2.1-2.8-1.1,1.4-2,2.6-3,3.8l-3.9,5.1c-.5.7-1.1,1.3-1.6,2-3.5,4.8-7.3,9.4-11.1,13.9-1.9,2.3-3.8,4.6-5.6,7-2.3,3.2-4.5,6.4-6.8,9.7-.3.5-.6,1-.9,1.4a19.68,19.68,0,0,1,2.5,2.5c1.2,1.6,2.3,3.2,3.5,4.9s2.1,3.2,3.1,4.8a1,1,0,0,0,1.1.5c.1,0,.2-.1.3-.2a4.3,4.3,0,0,0,1-.9,26.12,26.12,0,0,0,2.7-3,26.57,26.57,0,0,1,7.9-7,16.18,16.18,0,0,1,1.8-1,2.89,2.89,0,0,1,3.8,1.1c1.6,2.1,3.1,4.3,4.7,6.4a22.72,22.72,0,0,0,4.5,4.8c.9.7,1.2.7,2.1-.1a23.91,23.91,0,0,0,2.2-2.3,57.55,57.55,0,0,1,7.6-8c1.3-1.1,2.3-1,3.2.4s1.7,3,2.6,4.5a36.92,36.92,0,0,0,2.9,4c1,1.1,1.8,1,2.9.2s2.4-1.6,3.5-2.5ZM310.5,162.1c.8-.8,1.5-1.7,2.4-2.6l-6.6-8.7c-1.4,3-2.7,2.2-4.2.7a.76.76,0,0,1-.2-.4,17.38,17.38,0,0,0-1.3-1.5c-2-1.9-4-3.7-6-5.6a3.18,3.18,0,0,0-3.6-.7,11.32,11.32,0,0,0-4.5,2.6c-1.9,2-3.7,4-5.5,6.1-.9,1.1-1.8,1.3-2.8.5a18.1,18.1,0,0,1-3-2.5l-4.8-5.1a11.51,11.51,0,0,0-1.7-1.4,13,13,0,0,0-1.5,1c-1.4,1.5-2.8,3.1-4.2,4.7-1.1,1.3-2.2,2.5-3.4,3.8a3.21,3.21,0,0,1-3.6.8,15,15,0,0,1-5.5-3.1c-.7-.6-1.3-1.2-2-1.8a3,3,0,0,0-.8.8c-1.6,2.2-3.2,4.4-4.9,6.6l-6,8.4c-1.6,2.2-1.7,2.1-.4,4.5l.1.1c3.1,6,6.5,11.8,9.2,18,1.2,2.7,2.6,5.4,3.9,8.1,2,4.2,4.1,8.4,6.1,12.7a2.44,2.44,0,0,0,2,1.5c1.1-1,2.2-2.1,3.3-3.1,2.6-2.4,5.1-4.7,7.8-7,3.4-3,6.9-5.9,10.3-8.9,1-.9,2-1.9,3-2.8,1.6-1.4,3.1-2.8,4.7-4.1,2.5-2.2,4.9-4.4,7.4-6.6.7-.6,1.4-1.3,2.1-1.9,1.7-1.4,3.4-2.8,5-4.3C304.4,167.9,307.5,165,310.5,162.1Zm-7.6-14.9a3.55,3.55,0,0,0,.9.4,21,21,0,0,0-1.5-3l-4.8-7.8a116.41,116.41,0,0,0-7.1-10.2c-1.7-2.2-3.4-4.6-5.2-6.7a68.2,68.2,0,0,0-6.1-5.9,14,14,0,0,0-1.6-1c-1,1.1-2,2.1-2.8,3.1l-3.3,4.2c-1.5,2-3,4-4.4,6a2.19,2.19,0,0,0-.3.5c-1.7,2.1-3.5,4.1-5.2,6.2-2.3,2.8-4.6,5.5-6.9,8.3-1.4,1.7-2.9,3.3-4.3,5a3,3,0,0,0,.5.7,13.94,13.94,0,0,0,4.5,3.1,2.3,2.3,0,0,0,2.8-.5,19.47,19.47,0,0,0,2.4-2.6c1.8-2.2,3.3-4.6,5.7-6.3.2-.2.4-.3.5-.5a1.89,1.89,0,0,1,2.5-.5,11,11,0,0,1,1.4.9c1.5,1.5,2.9,3.1,4.5,4.6a22.32,22.32,0,0,0,4,3.5c1-1.1,1.9-2,2.8-3a21.13,21.13,0,0,1,8.6-6.2,4.59,4.59,0,0,1,5.3,1.1,88.08,88.08,0,0,0,7.1,6.6Z"
            transform="translate(-1.9 -9.6)"
          />
          <path
            className="cls-2"
            d="M189.9,89.2l-2.9.9-.6-1.2a6.47,6.47,0,0,0-.8.9c-2.7,4.1-5.3,8.2-7.9,12.3-1.4,2.2-2.8,4.3-4.2,6.5-.9,1.5-1.7,3-2.6,4.5-2,3.2-4.1,6.4-6.1,9.6-1.2,1.9-2.3,4-3.4,5.9-.4.7-.7,1.4-1.1,2.1l-3.8,7.2c2.6,4.3,4,6.7,4.9,8l-2.1,1.4c-.4-.5-.7-1.1-1.1-1.6-1-1.5-1.9-3-2.9-4.5-.1-.2-.3-.3-.4-.4a7.55,7.55,0,0,0-1.1,1.4c-1.2,2.2-2.5,4.4-3.7,6.6-.7,1.4-1.4,2.8-2.1,4.1s-1.7,2.8-2.4,4.3c-2.4,4.6-4.8,9.3-7.2,13.9-2.1,4.1-4,8.4-5.9,12.5-.3.6-.7,1-1,1.6-.5,1-.9,2-1.4,3-1.6,3-3.3,6.1-4.9,9.1-1.8,3.3-3.6,6.5-5.4,9.8-1.7,3.1-3.6,6.1-5.2,9.2-2.1,4-4.1,8.1-6.2,12.1-1.7,3.1-3.4,6.1-5.2,9.2-1.4,2.5-2.9,5.1-4.4,7.6-1.1,1.9-2.4,3.6-3.7,5.5l-5.4,8.1c-1.3,1.9-2.7,3.8-4,5.8-2.1,3.2-4,6.4-6.1,9.6l-7.5,11.7c-1.2,1.9-2.4,3.7-3.7,5.5-1.7,2.5-3.5,5-5.2,7.4-1.8,2.6-3.7,5.3-5.6,8-1.1,1.5-2.4,3-3.5,4.4-.3.4-.7.9-1,1.3l-2.3-1.7c1.2-1.7,2.3-3.4,3.5-5.1,1.7-2.4,3.4-4.6,5.1-7,2.2-3.1,4.3-6.2,6.4-9.4,1.5-2.2,3-4.3,4.4-6.5,1.8-2.7,3.4-5.5,5.1-8.2l6-9.6c.4-.7.9-1.3,1.3-2,2.2-3.2,4.5-6.5,6.7-9.7.9-1.3,1.6-2.7,2.5-4,1.1-1.6,2.3-3.1,3.3-4.8,2.5-4.2,5-8.4,7.4-12.6,2.5-4.4,4.8-9,7.2-13.5,3.1-5.8,6.3-11.6,9.5-17.3,2.1-3.8,4.2-7.7,6.3-11.5,1.3-2.3,2.5-4.6,3.8-7,1.1-2.1,2.1-4.2,3.1-6.3,2.3-4.6,4.5-9.1,6.8-13.7,1.3-2.7,2.6-5.4,4.1-8s2.8-5,4.2-7.4c3.5-6.2,6.8-12.5,10.4-18.7,3-5.1,6.1-10.2,9.2-15.2,1.4-2.4,2.8-4.8,4.3-7.2s3.3-5,4.9-7.5c2-3.1,4.1-6.1,6-9.3a12.68,12.68,0,0,0,1.9-5,1.79,1.79,0,0,1,2.1-1.4c.2,0,.3.1.5.2a2.4,2.4,0,0,1,1.5,1.6C188.8,86,189.3,87.7,189.9,89.2Z"
            transform="translate(-1.9 -9.6)"
          />
          <path
            className="cls-2"
            d="M53.2,312.5c-.3.5-.6.9-.9,1.4-2,3.1-4.2,6-6.4,8.9-1.8,2.4-3.8,4.6-5.6,7s-3.4,4.8-5.2,7.1c-3.4,4.5-6.4,9.3-9.5,14-1.7,2.6-3.2,5.4-4.9,8-1.2,1.9-2.4,3.6-3.6,5.5-1.5,2.4-2.9,4.8-4.3,7.2l-.6.9c-1.4,2.1-2.9,4.2-4.2,6.5-.6,1-1,2.3-2,3.1-.5,2.1-2.2,3.6-2.9,5.6a5,5,0,0,1-1.2-.2v-4a3.45,3.45,0,0,0,.8-.9c1.2-2.8,3.1-5.3,4.7-7.9l2.7-4.5c2.1-3.3,4-6.7,6-10l4.5-7.2c1.9-3.1,3.8-6.2,5.8-9.2,3.3-4.8,6.8-9.6,10.3-14.4,2.2-3,4.4-5.9,6.7-8.8l6.3-8.1c.4-.5.8-1.1,1.2-1.7Z"
            transform="translate(-1.9 -9.6)"
          />
          <path
            className="cls-2"
            d="M3.1,387.7c0,.1-.1.2-.1.3-.1.3-.7.6-1.1.8v-1.4A2.66,2.66,0,0,0,3.1,387.7Z"
            transform="translate(-1.9 -9.6)"
          />
        </g>
      </svg>
    )
  }
}

export default MtnsSun
