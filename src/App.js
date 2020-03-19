import React, { Component } from 'react';
import Gallery from "react-photo-gallery"
import { photos } from  "./photos"
import NavBar, { ElementsWrapper } from 'react-scrolling-nav';

class App extends Component {
    render() {
        const navbarItems = [{
            label: "Item 1",
            target: "item-1"
        }, {
            label: "Item 2",
            target: "item-2"
        }, {
            label: "Item 3",
            target: "item-3"
        }, {
            label: "Item 4",
            target: "item-4"
        }, {
            label: "Item 5",
            target: "item-5"
        }, {
            label: "Item 6",
            target: "item-6"
        }, ]
        return (
                        <Gallery photos={photos} direction={"column"} />
        );
    }
}

export default App;