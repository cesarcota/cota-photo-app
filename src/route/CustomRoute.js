import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "../components/home/Home"
import Contact from "../components/contact/Contact"
import Portfolio from "../components/portfolio/Portfolio"
import Reports from "../components/portfolio/portfolio-components/Reports"
import Landscape from "../components/portfolio/portfolio-components/Landscape"
import Portraits  from "../components/portfolio/portfolio-components/Portraits"


import { paths } from "./paths"


const CustomRoute = () => {
  return (

    <Switch>
      <Route exact path={paths.home} component={Home} />
      <Route path={paths.contact} component={Contact} />
      <Route exact path={paths.portfolio.root} component={Portfolio} />
      <Route  path={paths.portfolio.landscape} component={Landscape} />
      <Route  path={paths.portfolio.portraits} component={Portraits} />
      <Route  path={paths.portfolio.reports} component={Reports} />
    </Switch>
  )
}

export default CustomRoute