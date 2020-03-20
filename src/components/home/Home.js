import React from "react"
import { photos } from "../../assets/photos"
import Gallery from "react-photo-gallery"

const style = {
  marginTop: "50px"
}

const Home = () => {
  return (
    <div style={style}>
      <Gallery photos={photos} direction={"column"} />
    </div>
  )
}

export default Home