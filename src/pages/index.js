import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1
      css={css`
        font-size: 200px;
      `}
    >
      Hi!
    </h1>
    <h2>I'm Ed.</h2>
    <p>I'm a developer.</p>
  </Layout>
)

export default IndexPage
