/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { themeconfig } from '../../assets/styling/themeConfig';
import Header from "../header/header"
import "./layout.css"

const theme = themeconfig
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Container maxWidth="lg" style={{ marginTop: `12rem` }}>
          <Button variant='contained'>Okay</Button>
          <main>{children}</main>
        </Container>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
