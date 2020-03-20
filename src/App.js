import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import NavBar from './components/navbar/Navbar'
import GlobalStyle from './styles/Global'
import CustomRoute from "./route/CustomRoute"

class App extends Component {
    state = {
        navbarOpen: false
      }
    
      handleNavbar = () => {
        this.setState({ navbarOpen: !this.state.navbarOpen });
      }


    render() {
        return (
            <Router>
                <>
                <GlobalStyle />
                <NavBar
                    navbarState={this.state.navbarOpen}
                    handleNavbar={this.handleNavbar}
                    />
                </>
                <CustomRoute/>
           </Router>
        );
    }
}

export default App;

