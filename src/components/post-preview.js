import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import ReadMore from "../components/read-more"

const PostPreview = ({ post }) => (
  <article
    css={css`
      display: flex;
      margin-top: 0;
      padding-bottom: 1rem;

      :first-of-type {
        margin-top: 1rem;
      }
    `}
  >
    <div>
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <ReadMore to={post.slug}>read this post &rarr;</ReadMore>
    </div>
  </article>
)

export default PostPreview
