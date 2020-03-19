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
        navBarOpen: false
    }

    handleNavBar = () => {
        this.setState({ navBarOpen: !this.state.navBarOpen })
    }


    render() {
        return (
            <>
                <NavBar
                    navbarState={this.state.navBarOpen}
                    handleNavBar={this.handleNavBar}
                />
                <GlobalStyle />
                <div style={style}>

                    <Gallery photos={photos} direction={"column"} />

                </div>
            </>
        );
    }
}

export default App;

