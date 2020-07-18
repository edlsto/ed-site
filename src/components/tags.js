import React from "react"
import { css } from "@emotion/core"

const colors = [
  "#8a4baf",
  "#ffb238",
  "#bc027f",
  "#0d96f2",
  "#00bdb6",
  "#fed038",
  "#fa2915",
  "#37b635",
  "#78757a",
]

const technologies = ["React Native", "React", "socket.io", "Redux", "Leaflet"]

const Tags = ({ tags }) => {
  return tags.map(tag => {
    let color
    if (technologies.indexOf(tag) !== -1) {
      color = colors[technologies.indexOf(tag)]
    } else {
      color = colors[8]
    }
    return (
      <div
        css={css`
          margin-top: 0;
          padding: 0.2em 0.4em;
          margin-right: 0.2em;
          border-radius: 0.4em;
          color: white;
          background-color: ${color};
          &:last-of-type {
            margin-right: 0;
          }
        `}
      >
        {tag}
      </div>
    )
  })
}

export default Tags
