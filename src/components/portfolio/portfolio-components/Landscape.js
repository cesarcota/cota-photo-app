import React from "react"
import PhotoGallery from "../../Gallery"

import {connect} from "react-redux"
import PropTypes from "prop-types"

const style = {
  marginTop: "50px"
}

const Landscape = (props) => {
  if (props.photos.length> 0) {
    return (
      <div style={style}>
        <PhotoGallery photos={props.photos} />
      </div>
    )
  } 

  return (
    <div style={style} >  no data</div>
  )
}

const mapStateToProps = (state) => {
  return {
    photos: state.data.landscape
  }
}

Landscape.propTypes = {
  photos: PropTypes.array
}

export default connect(mapStateToProps, null)(Landscape)