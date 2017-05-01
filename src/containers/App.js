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

import {closeWelcomePopin} from '../modules/welcomePopin.js';

import {
    getLightboxUi, 
    getFlashCodeUi, 
    getWelcomePopinUi, 
    getFilmStripUi,
    getFlashCodeButtonUi,
    getData
} from '../modules';

const mapStateToProps = (state) => {
    return {
        lightboxUi: getLightboxUi(state),
        flashCodeUi: getFlashCodeUi(state),
        welcomePopinUi: getWelcomePopinUi(state),
        filmStripUi: getFilmStripUi(state),
        flashCodeButtonUi: getFlashCodeButtonUi(state),
        data: getData(state)
    }
};

const App = ({
    dispatch, 
    lightboxUi, 
    flashCodeUi, 
    welcomePopinUi,
    flashCodeButtonUi,
    data,
    filmStripUi}) =>
    <div className="App">

        <WelcomePopin 
            onCloseClick={() => dispatch(closeWelcomePopin())}
            isOpen={welcomePopinUi.open}
        />

        <div className="App__lightbox">
            {lightboxUi.open &&
                <LightboxWithActions />
            }
        </div>

        {flashCodeUi.show &&
            <FlashCodeScreen/>
        }

        {flashCodeButtonUi.show &&
            <div className="App__mobileButton">
                <FlashCodeButton/>
            </div>
        }

        {filmStripUi.showButton &&
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
