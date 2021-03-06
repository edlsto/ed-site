import React from "react"
import Helmet from "react-helmet"
import useSiteMetadata from "../hooks/use-sitemetadata"
import Header from "./header"
import { Global, css } from "@emotion/core"
import favicon from "../images/peace.png"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

const Layout = ({ children, bg }) => {
  const { title, description } = useSiteMetadata()
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          html,
          body {
            overflow-x: hidden;
            margin: 0;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
            font-size: 18px;
            line-height: 1.4;
            background: ${bg};
            /* remove margin for the main div that Gatsy mounts into */
            > div {
              margin-top: 0;
            }

            a {
              color: #222;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: #222;
              line-height: 1.1;
              + * {
                margin-top: 0.5rem;
              }
            }
            strong {
              color: #222;
            }

            li {
              margin-top: 0.25rem;
            }

            p {
              margin-bottom: 1rem;
            }

            h1 {
              margin-bottom: 1rem;
            }

            ul {
              margin-bottom: 1rem;
            }

            .deckgo-highlight-code-carbon {
              margin-bottom: 1em;
            }

            --deckgo-highlight-code-font-size: 14px;
            --deckgo-highlight-code-carbon-toolbar-display: none;
          }
        `}
      />
      <Helmet lang="en">
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header siteTitle={title} />
      <main
        css={css`
          margin: 2rem auto 4rem;
          max-width: 90vw;
          width: 750px;
        `}
      >
        {children}
      </main>
    </>
  )
}

export default Layout
