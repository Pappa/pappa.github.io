import React from 'react'
import Header from './Header'

import { rhythm } from '../utils/typography'

const Layout = ({ title, children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Header>{title}</Header>
      {children}
      <footer>© 2019</footer>
    </div>
  )
}

export default Layout
