import React from "react"
import PhotoGallery, {settings} from "../Gallery"

const style = {
  marginTop: "50px"
}

const Home = () => {
  return (
    <div style={style}>
      <PhotoGallery albumId={settings.albuns.landscape} />
    </div>
  )
}

export default Home