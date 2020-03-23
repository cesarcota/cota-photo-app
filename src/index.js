import React from "react"
import { render } from "react-dom"

import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"

import App from "./App"
import rootReducer from "./reducer/rootReducer"
import fetchData, {albuns} from "./actions/fetchData"
  
const store = createStore(rootReducer, applyMiddleware(thunk))

store.dispatch(fetchData(albuns.landscape))
store.dispatch(fetchData(albuns.portraits))
store.dispatch(fetchData(albuns.reports))

render(
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById("app"))
