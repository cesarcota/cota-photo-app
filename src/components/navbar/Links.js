import React from "react"
import { paths } from "../../route/paths"

const Links = (props) => {
  return (
    <div style={props.style}>
      <a href={paths.home} onClick={props.handleNavbar}>Home</a>
      <a href={paths.portfolio.root} onClick={props.handleNavbar}>portfolio</a>
      <a href={paths.contact} onClick={props.handleNavbar}>contactos</a>
    </div>
  )
}

export default Links

