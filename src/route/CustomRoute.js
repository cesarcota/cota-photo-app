import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "../components/home/Home"
import Contact from "../components/contact/Contact"
import Portfolio from "../components/portfolio/Portfolio"
import Weddings from "../components/portfolio/portfolio-components/Weddings"
import Landscape from "../components/portfolio/portfolio-components/Landscape"
import Baptism  from "../components/portfolio/portfolio-components/Baptism"
import Photoshoots from "../components/portfolio/portfolio-components/Photoshoots"


import { paths } from "./paths"


const CustomRoute = () => {
  return (

    <Switch>
      <Route exact path={paths.home} component={Home} />
      <Route path={paths.contact} component={Contact} />
      <Route exact path={paths.portfolio.root} component={Portfolio} />
      <Route  path={paths.portfolio.weddings} component={Weddings} />
      <Route  path={paths.portfolio.landscape} component={Landscape} />
      <Route  path={paths.portfolio.photoshoot} component={Photoshoots} />
      <Route  path={paths.portfolio.baptism} component={Baptism} />
    </Switch>
  )
}

export default CustomRoute