import React from "react"
import { css } from "@emotion/core"

const colors = [
  '#FF5733', // Reddish
  '#FF6347', // Tomato
  '#FF4500', // Orange Red
  '#FFA07A', // Light Salmon
  '#FFD700', // Gold
  '#FF8C00', // Dark Orange
  '#FFA500', // Orange
  '#FF1493', // Deep Pink
  '#FF69B4', // Hot Pink
  '#FFB6C1', // Light Pink
  '#FFC0CB', // Pink
  '#FF00FF', // Magenta
  '#8A2BE2', // Blue Violet
  '#9400D3', // Dark Violet
  '#9932CC', // Dark Orchid
  '#BA55D3', // Medium Orchid
  '#DA70D6', // Orchid
  '#FF00FF', // Fuchsia
  '#9400D3', // Dark Violet
  '#8A2BE2', // Blue Violet
  '#483D8B', // Dark Slate Blue
  '#6A5ACD', // Slate Blue
  '#7B68EE', // Medium Slate Blue
  '#4169E1', // Royal Blue
  '#0000FF', // Blue
  '#1E90FF', // Dodger Blue
  '#00BFFF', // Deep Sky Blue
  '#87CEEB', // Sky Blue
  '#00CED1', // Dark Turquoise
  '#20B2AA', // Light Sea Green
  '#008B8B', // Dark Cyan
  '#008080', // Teal
  '#2E8B57', // Sea Green
  '#3CB371', // Medium Sea Green
  '#00FF7F', // Spring Green
  '#ADFF2F', // Green Yellow
  '#32CD32', // Lime Green
  '#228B22', // Forest Green
  '#008000', // Green
  '#006400'  // Dark Green
];


const Tags = ({ tags }) => {
  return tags.map((tag, index) => {
    const color = colors[Math.floor(Math.random() * colors.length)]
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
