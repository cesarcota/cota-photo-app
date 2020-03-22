import React from "react"
import PhotoGallery, {settings} from "../../Gallery"

const style = {
  marginTop: "50px"
}


const Reports = () => {
  return (
    <div style={style}>
      <PhotoGallery albumId={settings.albuns.reports} />
    </div>
  )
}

export default Reports