import React, { useEffect, useState } from "react"
import Gallery from "react-photo-gallery"


export const settings = {
  apiKey: "a562199b25b405de930467dda1be29a0",
  userId: "127203421%40N05",
  albuns: {
    reports: "72157713565681836",
    portraits: "72157713571173278",
    landscape:"72157713571181303"
  }
}



const getAlbumUrl = (albumId) => {

  return  "https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=" +
   settings.apiKey  + "&photoset_id=" + albumId + 
   "&user_id=" + settings.userId +"&format=json&nojsoncallback=1&extras=url_o,o_dim,url_l,l_dim"
}
   
const PhotoGallery = (props) =>  {
  const [photos, setPhotos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(
      getAlbumUrl(props.albumId),
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/json"
        })
      })
      .then(res => res.json())
      .then(response => {

        let list = []
        let photoList = response.photoset.photo

        photoList.map(item =>{
          let newPhoto =   {
            src: item.url_l,
            width: item.width_l,
            height: item.height_l,
          }       
          list.push(newPhoto)  
        })
        setPhotos(list)
        setIsLoading(false)
      })
      .catch(error => console.log(error))
  }, [])

  

  return(
    <div>
      {isLoading && <p>Wait I`'`m Loading photos for you</p> }
      {!isLoading && <Gallery photos={photos}  direction={"column"}/>}
    </div>
  )

}


export default PhotoGallery