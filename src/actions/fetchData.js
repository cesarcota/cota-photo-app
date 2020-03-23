import {
  fetchPhotosUrlSuccess, 
  fetchPhotosUrlPending, 
  fetchPhotosUrlError, 
  cleanState,
  fetchPhotos
} from "./action"

import {
  FETCTH_PHOTOS_LANDSCAPE,
  FETCTH_PHOTOS_PORTRAITS,
  FETCTH_PHOTOS_REPORTS
} from "./types"

export const settings = {
  apiKey: "a562199b25b405de930467dda1be29a0",
  userId: "127203421%40N05"
}

export const albuns = {
  reports: {
    id: "72157713565681836",
    action: FETCTH_PHOTOS_REPORTS
  },
  portraits:  {
    id: "72157713571173278",
    action: FETCTH_PHOTOS_PORTRAITS
  },
  landscape: {
    id: "72157713571181303",
    action: FETCTH_PHOTOS_LANDSCAPE
  }
}

const getAlbumUrl = (albumId) => {

  return  "https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=" +
   settings.apiKey  + "&photoset_id=" + albumId + 
   "&user_id=" + settings.userId +"&format=json&nojsoncallback=1&extras=url_o,o_dim,url_l,l_dim"
}



const  fetchData = (album) => {
  return dispatch => {
    console.log("fetching data", album)
    dispatch(fetchPhotosUrlPending)
    fetch(

      getAlbumUrl(album.id),
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

        console.log(" success response")

        dispatch(fetchPhotos({data: list, type: album.action}))
        return list
      }).catch(error => {
        dispatch(fetchPhotosUrlError(error))
      })
  }
}

export default fetchData