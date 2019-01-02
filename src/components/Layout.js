import React from 'react'
import styled from 'styled-components/macro'
import Header from './Header'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 40rem;
  padding: 1.5rem 1rem;
`

const Layout = ({ title, children }) => {
  return (
    <Container>
      <Header>{title}</Header>
      {children}
      <footer>© 2019</footer>
    </Container>
  )
}

export default Layout
