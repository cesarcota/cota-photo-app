import React, { Component } from 'react';
import Gallery from 'react-photo-gallery'
import { photos } from './photos'
import NavBar from './components/navbar/Navbar'
import GlobalStyle from './styles/Global'

const style = {
    marginTop: "50px"
}

class App extends Component {
    state = {
        navbarOpen: false
      }
    
      handleNavbar = () => {
        this.setState({ navbarOpen: !this.state.navbarOpen });
      }


    render() {
        return (
            <>
                <GlobalStyle />
                <NavBar
                    navbarState={this.state.navbarOpen}
                    handleNavbar={this.handleNavbar}
                />
                <div style={style}>
                    <Gallery photos={photos} direction={"column"} />
                </div>
            </>
        );
    }
}

export default App;

