import React from 'react';
import '../libs/socket.js';
import {connect} from 'react-redux';

import Gallery from './GalleryWithMedia.js';
import LightboxWithActions from './LightboxWithActions.js';
import FilmStripWithActions from './FilmStripWithActions.js';
import FlashCodeButton from './FlashCodeButton.js';
import FlashCodeScreen from './FlashCodeScreen.js';
import WelcomePopin from '../components/welcomePopin/welcomePopin.js';

import './App.css';

import {closeWelcomePopin} from '../actions';

const mapStateToProps = (state) => {
    return {
        selectedMedium: state.selectedMedium,
        lightboxFullScreen: state.lightboxFullScreen,
        showFlashCode: state.showFlashCode,
        welcomePopinOpen: state.welcomePopinOpen
    }
};

const App = ({dispatch, selectedMedium, lightboxFullScreen, showFlashCode, welcomePopinOpen}) =>
    <div className="App">
        {welcomePopinOpen &&
            <WelcomePopin onCloseClick={() => dispatch(closeWelcomePopin())}/>
        }
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
    </div>



export default connect(mapStateToProps)(App);
