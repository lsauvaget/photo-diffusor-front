import React from 'react';
import '../libs/socket.js';
import {connect} from 'react-redux';

import Gallery from './GalleryWithMedia.js';
import LightboxWithActions from './LightboxWithActions.js';
import FilmStripWithActions from './FilmStripWithActions.js';
import FlashCodeButton from './FlashCodeButton.js';
import FlashCodeScreen from './FlashCodeScreen.js';
import './App.css';

const mapStateToProps = (state) => {
    return {
        selectedMedium: state.selectedMedium,
        lightboxFullScreen: state.lightboxFullScreen,
        showFlashCode: state.showFlashCode
    }
};

const App = ({selectedMedium, lightboxFullScreen, showFlashCode}) =>
    <div className="App">
        {selectedMedium && 
            <div className="App__lightbox">
                <LightboxWithActions />
            </div>}
        {showFlashCode &&
            <FlashCodeScreen/>
        }
        <div className="App__mobileButton">
            <FlashCodeButton/>
        </div>
        {!lightboxFullScreen && !showFlashCode &&
            <div className="App__filmStrip">
                <FilmStripWithActions />
            </div>
        }
        <div className="App__gallery">
            <Gallery />
        </div>
    </div>



export default connect(mapStateToProps)(App);
