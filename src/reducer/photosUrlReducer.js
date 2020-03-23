import {
  FETCTH_PHOTOS_URL_ERROR, 
  FETCTH_PHOTOS_URL_PENDING, 
  FETCTH_PHOTOS_LANDSCAPE,
  FETCTH_PHOTOS_PORTRAITS,
  FETCTH_PHOTOS_REPORTS
} from "../actions/types"

export const initialState = {
  pending: false,
  landscape: [],
  portrait: [],
  reports: [],
  error: null
}

function photosUrlReducer(state = initialState, action) {
  switch(action.type) {
  case FETCTH_PHOTOS_URL_PENDING: 
    return {
      ...state,
      pending: true
    }
  case FETCTH_PHOTOS_LANDSCAPE:
    return {
      ...state,
      pending: false,
      landscape: action.payload
    }
  case FETCTH_PHOTOS_PORTRAITS:
    return {
      ...state,
      pending: false,
      portrait: action.payload
    }
  case FETCTH_PHOTOS_REPORTS:
    return {
      ...state,
      pending: false,
      reports: action.payload
    }
  case FETCTH_PHOTOS_URL_ERROR:
    return {
      ...state,
      pending: false,
      error: action.error
    }
  default: 
    return state
  }
}

export default photosUrlReducer