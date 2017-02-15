import React, { Component } from 'react';
import './App.css';
import Gallery from './gallery/gallery.js';

import configs from '../configs';
import io from 'socket.io-client';
const socket = io(configs.socketUrl);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            media: []
        };
        socket.on('init', (imgs) => {
            this.setState({
                media: [...this.state.media, ...imgs]
            });
        });
    }

    render() {
        return (
            <div className="App">
                <Gallery media={this.state.media}/>
                </div>
        );
    }
}

export default App;
