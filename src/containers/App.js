import React from 'react';
import '../libs/socket.js';
import {connect} from 'react-redux';

import Gallery from './GalleryWithMedia.js';
import LightboxWithActions from './LightboxWithActions.js';
import FilmStripWithActions from './FilmStripWithActions.js';
import FlashCodeButton from './FlashCodeButton.js';
import FlashCodeScreen from './FlashCodeScreen.js';

import Home from '../components/home/home.js';

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
        <Home>
            {selectedMedium && 
                <div className="App__lightbox">
                    <LightboxWithActions />
                </div>}
            {showFlashCode &&
                <FlashCodeScreen/>
            }
            {!lightboxFullScreen && !showFlashCode &&
                <div>
                    <div className="App__mobileButton">
                        <FlashCodeButton/>
                    </div>
                    <div className="App__filmStrip">
                        <FilmStripWithActions />
                    </div>
                </div>
            }
            <div className="App__gallery">
                <Gallery />
            </div>
        </Home>
    </div>



export default connect(mapStateToProps)(App);
