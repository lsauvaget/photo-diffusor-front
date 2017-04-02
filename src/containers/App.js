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
        welcomePopinOpen: state.welcomePopinOpen,
        showFlashCodeButton: state.showFlashCodeButton,
        showFilmStripButton: state.showFilmStripButton
    }
};

const App = ({
    dispatch, 
    selectedMedium, 
    lightboxFullScreen, 
    showFlashCode, 
    showFlashCodeButton,
    showFilmStripButton,
    welcomePopinOpen}) =>
    <div className="App">

        <WelcomePopin 
            onCloseClick={() => dispatch(closeWelcomePopin())}
            isOpen={welcomePopinOpen}
        />

        {selectedMedium && 
            <div className="App__lightbox">
                <LightboxWithActions />
            </div>}

        {showFlashCode &&
            <FlashCodeScreen/>
        }

        {showFlashCodeButton &&
            <div className="App__mobileButton">
                <FlashCodeButton/>
            </div>}

        {showFilmStripButton &&
            <div>
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
