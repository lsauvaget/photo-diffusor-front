import React, { Component } from 'react';
import './App.css';
import Gallery from './gallery/gallery.js';
import withMediaFromSocket from './withMediaFromSocket.js';

const GalleryWithMedia = withMediaFromSocket(Gallery);

class App extends Component {
    render() {
        return (
            <div className="App">
                <GalleryWithMedia />
                </div>
        );
    }
}

export default App;
