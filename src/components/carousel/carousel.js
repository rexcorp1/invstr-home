import * as React from "react"
import PropTypes from "prop-types"
import { Box } from '@mui/material'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"
import "./carousel.scss"


const Carousel = ({ show, datas }) => {
    const settings = {
        dots: true,
        arrows: false,
        slidesToShow: show,
        autoplay: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      };

    return(
        <Slider {...settings}>
            <Box className="card-border">
                <Box className="card-body">Satu</Box>
            </Box>
            <Box className="card-border">
                <Box className="card-body">Dua</Box>
            </Box>
            <Box className="card-border">
                <Box className="card-body">Tiga</Box>
            </Box>
            <Box className="card-border">
                <Box className="card-body">Tiga</Box>
            </Box> 
        </Slider>
    )
}

Carousel.defaultProps = {
    show: 4,
}

Carousel.propTypes = {
    show: PropTypes.number,
    datas: PropTypes.array.isRequired
}

export default Carousel

