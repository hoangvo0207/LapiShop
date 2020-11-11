import React from 'react'
import PropTypes from 'prop-types'

Slideshow.propTypes = {
  listImage: PropTypes.array
}

Slideshow.defaultProps = {
  listImage: []
}

function Slideshow(props) {
  return (
    <div>
      <img src="https://cf.shopee.vn/file/fa3d67068acdf6f02fea1b4b429afc83_xxhdpi" alt="slideshow" />
    </div>
  )
}

export default Slideshow

