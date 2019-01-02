import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'

const Header = ({ children }) => {
  const headerLinkStyle = {
    boxShadow: `none`,
    textDecoration: `none`,
    color: `inherit`,
  }
  return (
    <h1
      style={{
        ...scale(1.5),
        marginBottom: rhythm(1.5),
        marginTop: 0,
      }}
    >
      <Link style={headerLinkStyle} to={`/`}>
        {children}
      </Link>
    </h1>
  )
}

export default Header
