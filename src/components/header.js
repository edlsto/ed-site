import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const Header = ({ siteTitle }) => (
  <header
    css={css`
      display: flex;
      justify-content: space-between;
      padding: 2rem calc((100vw - 750px - 0.5rem) / 2) 3rem;
      align-items: center;
    `}
  >
    <NavLink
      to="/"
      css={css`
        color: royalblue;
        font-weight: bold;
        font-size: 1.5rem;
      `}
    >
      {siteTitle}
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/projects" activeClassName="current-page">
        Projects
      </NavLink>
      <NavLink to="/resume" activeClassName="current-page">
        Resume
      </NavLink>
      <NavLink to="/blog" activeClassName="current-page">
        Blog
      </NavLink>
    </nav>
  </header>
)

export default Header
