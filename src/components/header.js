import * as React from "react"
import PropTypes from "prop-types"
import Box from '@mui/material/Box';


import ResponsiveAppBar from "./navbar/navbar"
import Alerts from "./alert/alert"

const Header = ({ siteTitle }) => (
  <Box style={{ position: `fixed`, top: 0, right: 0, left: 0, zIndex: 1030 }}>
    <Alerts title="Hati-hati dengan segala jenis penipuan. LandX tidak memiliki grup Telegram! Akun resmi Customer Service LandX adalah 0811 9562 878"/>
    <ResponsiveAppBar/>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
