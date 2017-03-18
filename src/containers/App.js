import React from 'react';
import '../libs/socket.js';
import {connect} from 'react-redux';

import Gallery from './GalleryWithMedia.js';
import LightboxWithActions from './LightboxWithActions.js';
import FilmStripWithActions from './FilmStripWithActions.js';
import './App.css';

const mapStateToProps = (state) => {
    return {
        selectedMedium: state.selectedMedium,
        lightboxFullScreen: state.lightboxFullScreen
    }
};

const App = ({selectedMedium, lightboxFullScreen}) =>
    <div className="App">
        {selectedMedium && 
            <div className="App__lightbox">
                <LightboxWithActions />
            </div>}
        {!lightboxFullScreen && 
            <div className="App__filmStrip">
                <FilmStripWithActions />
            </div>
        }
        <div className="App__gallery">
            <Gallery />
        </div>
    </div>



export default connect(mapStateToProps)(App);
