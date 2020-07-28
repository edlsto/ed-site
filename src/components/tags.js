import React from "react"
import { css } from "@emotion/core"

const colors = [
  "darkslateblue",
  "firebrick",
  "cadetblue",
  "green",
  "mediumseagreen",
  "rosybrown",
  "rebeccapurple",
  "teal",
  "darkgoldenrod",
  "darkkhaki",
  "peru",
  "steelblue",
  "chocolate",
  "yellowgreen",
  "lightseagreen",
  "indianred",
  "darkblue",
  "indigo",
  "limegreen",
  "goldenrod",
  "purple2",
  "darkseagreen",
  "maroon3",
  "tan",
  "mediumturquoise",
  "mediumaquamarine",
  "darkorchid",
  "red",
  "orangered",
  "darkorange",
  "orange",
  "slateblue",
  "mediumvioletred",
  "mediumblue",
  "lawngreen",
  "turquoise",
  "lime",
  "darkviolet",
  "mediumorchid",
  "mediumspringgreen",
  "blueviolet",
  "springgreen",
  "royalblue",
  "darksalmon",
  "crimson",
  "aqua",
  "deepskyblue",
  "sandybrown",
  "mediumpurple",
  "blue",
  "purple3",
  "lightcoral",
  "greenyellow",
  "tomato",
  "orchid",
  "thistle",
  "lightsteelblue",
  "coral",
  "fuchsia",
  "dodgerblue",
  "palevioletred",
  "khaki",
  "salmon",
  "palegoldenrod",
  "laserlemon",
  "cornflower",
  "plum",
  "lightblue",
  "skyblue",
  "deeppink",
  "mediumslateblue",
  "lightsalmon",
  "wheat",
  "paleturquoise",
  "violet",
  "palegreen",
  "lightskyblue",
  "aquamarine",
  "hotpink",
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
  "Emotion",
  "Vue Router",
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
