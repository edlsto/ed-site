import React, { forwardRef } from "react"
import { css } from "@emotion/core"

const Star = React.forwardRef((props, ref) => (
  <svg
    ref={ref}
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 100 100"
    xmlSpace="preserve"
    fill="#FFFFFF"
    css={css`
      width: 40px;
      left: ${props.marginLeft};
      margin-top: 13em;
      position: absolute;
      margin-top: ${props.marginTop};
    `}
  >
    <path
      d="M34.9,67.9c-0.3,0-0.6-0.2-0.6-0.5L31,42.1L18,52.8c-0.1,0.1-0.3,0.1-0.4,0.1c-0.2,0-0.3-0.1-0.4-0.2
	c-0.2-0.2-0.2-0.6,0-0.8L28,38.8L2.6,35.6C2.3,35.5,2,35.3,2,35s0.2-0.6,0.5-0.6L27.8,31L17.1,18c-0.2-0.3-0.2-0.6,0-0.8
	c0.1-0.1,0.3-0.2,0.4-0.2s0.3,0,0.4,0.1L31,27.8l3.3-25.3c0-0.3,0.3-0.5,0.6-0.5s0.6,0.2,0.6,0.5l3.3,25.3L52,17.1
	c0.1-0.1,0.3-0.1,0.4-0.1c0.2,0,0.3,0.1,0.4,0.2c0.2,0.2,0.2,0.6,0,0.8L42.1,31l25.2,3.3c0.3,0,0.5,0.3,0.5,0.6s-0.2,0.6-0.5,0.6
	L42,38.9L52.8,52c0.2,0.3,0.2,0.6,0,0.8c-0.1,0.1-0.3,0.2-0.4,0.2c-0.1,0-0.3,0-0.4-0.1L38.8,42l-3.3,25.3
	C35.5,67.6,35.3,67.9,34.9,67.9z"
    />
  </svg>
))

export default Star