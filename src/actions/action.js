import {
  FETCTH_PHOTOS_URL_ERROR, 
  FETCTH_PHOTOS_URL_PENDING, 
} from "./types"

export const fetchPhotosUrlPending = () => {
  console.log("dispatch pending")
  return {
    type: FETCTH_PHOTOS_URL_PENDING
  }
}

export const fetchPhotosUrlError = (error) => {
  return {
    type: FETCTH_PHOTOS_URL_ERROR,
    error: error
  }
}

export const fetchPhotos = (data) => {
  return {
    type: data.type,
    payload: data.data
  }
}

