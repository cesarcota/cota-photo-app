import React, { Component } from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { paths } from "../../route/paths"

class CoustomNavBar extends Component {

constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {

    return(
      
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
      <Navbar.Brand style={{marginLeft: "100"}} href={paths.home}>César Miguel Cota</Navbar.Brand>
      <Navbar.Toggle  aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  id="basic-navbar-nav">
        <Nav   className="ml-auto">
          <Nav.Link  style={{marginRight: "20"}} href={paths.home}>Home</Nav.Link>
          <div onMouseEnter={this.handleOpen}
              onMouseLeave={this.handleClose}>

            <NavDropdown show={this.state.isOpen}  style={{marginRight: "20"}} title="Portfolio" id="basic-nav-dropdown">
              <NavDropdown.Item href={paths.portfolio.portraits}>Retratos</NavDropdown.Item>
              <NavDropdown.Item href={paths.portfolio.reports}>Reportagens</NavDropdown.Item>
              <NavDropdown.Item href={paths.portfolio.landscape}>Paisagem</NavDropdown.Item>
            </NavDropdown>
          </div>
          <Nav.Link style={{marginRight: "20"}} href={paths.contact}>Contactos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
   )
  }
}

export default CoustomNavBar