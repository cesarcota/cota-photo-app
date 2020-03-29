import React from "react"
import PhotoGallery from "../../Gallery"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import { Spinner } from "react-bootstrap"

const style = {
  container: {
    marginTop: "55px"
  },
  spinner: {
    marginTop: "25%",
    marginLeft: "50%",
    alignContent: "center"  ,
  }
}

const Portraits = (props) => {
  if (props.photos.length> 0) {
    return (
      <div style={style.container}>
        <PhotoGallery photos={props.photos} />
      </div>
    )
  } 

  return (
    <div style={style.spinner} >
      <Spinner size="lg" animation="border" />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    photos: state.data.portrait
  }
}

Portraits.propTypes = {
  photos: PropTypes.array
}

export default connect(mapStateToProps, null)(Portraits)