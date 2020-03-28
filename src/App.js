import React, { Component } from "react"
import { BrowserRouter as Router} from "react-router-dom"
import CustomRoute from "./route/CustomRoute"
import CoustomNavBar from "./components/navbar/CoustomNavBar"
import "bootstrap/dist/css/bootstrap.min.css"

document.oncontextmenu = function() {
  alert("estas imagens estão protegidas por direitos de autor")
  return false
}


class App extends Component {



  render() {
    return (

      <Router>
        <>
          <CoustomNavBar />
        </>
        <CustomRoute/>
      </Router>
    )
  }
}

export default App

