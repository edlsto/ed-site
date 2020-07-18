import React from "react"
import { css } from "@emotion/core"

const Tags = ({ tags }) => {
  return tags.map(tag => (
    <div
      css={css`
        margin-top: 0;
      `}
    >
      {tag}
    </div>
  ))
}

export default Tags
