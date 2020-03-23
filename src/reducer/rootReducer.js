import { combineReducers } from "redux"
import photosUrlReducer from "./photosUrlReducer"

const rootReducer = combineReducers({
  data: photosUrlReducer
})

export default rootReducer