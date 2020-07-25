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
  "darkolivegreen",
  "sienna",
  "maroon",
  "olive",
  "darkslateblue",
  "green",
  "teal",
  "steelblue",
  "yellowgreen",
  "darkblue",
  "limegreen",
  "goldenrod",
  "darkseagreen",
  "purple",
  "red",
  "darkturquoise",
  "darkorange",
  "mediumvioletred",
  "lime",
  "mediumspringgreen",
  "crimson",
  "sandybrown",
  "mediumpurple",
  "pink",
  "blue",
]

const technologies = [
  "React Native",
  "React",
  "socket.io",
  "Redux",
  "Leaflet",
  "JavaScript",
  "Sass",
  "jQuery",
  "HTML/CSS",
  "D3",
  "Travis CI",
  "Node.js",
  "Express",
  "MongoDB",
  "Vue",
  "Mocha",
  "Chai",
  "Jest",
  "React Testing Library",
  "Test-Driven Development",
  "Git",
  "Project Development",
  "AWS",
  "React Native Testing Library",
  "React Router",
  "External APIs",
  "Greensock",
  "SVG",
  "Gatsby",
  "Expo",
  "GraphQL",
  "Figma",
  "Netlify",
  "React Navigation",
]

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
          margin: 0 0.2em 0.2em 0;
          border-radius: 0.4em;
          color: white;
          background-color: ${color};
          &:last-of-type {
            margin-right: 0;
          }
        `}
        key={tag}
      >
        {tag}
      </div>
    )
  })
}

export default Tags
