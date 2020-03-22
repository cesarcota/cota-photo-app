import React from "react"
import PhotoGallery, {settings} from "../../Gallery"

const style = {
  marginTop: "50px"
}


const Portraits = () => {
  return (
    <div style={style}>
      <PhotoGallery albumId={settings.albuns.portraits} />
    </div>
  )
}

export default Portraits