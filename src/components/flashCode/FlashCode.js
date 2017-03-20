import React from 'react';
import './FlashCode.css';
import Loader from '../loader/Loader.js';
import ScrollLock from 'react-scrolllock';
import flashCodefrom from './flashCode.png';

const FlashCode = ({closeFlashCode, flashCodeLoaded}) => 
        <div className="FlashCode">
                <div className="FlashCode__wrapper">
                    {!flashCodeLoaded && <Loader/>}
                    <img className="FlashCode__wrapper" src={flashCodefrom} alt=""/>
                </div>
            <div onClick={closeFlashCode} className="FlashCode__overlay"></div>
            <ScrollLock/>
        </div>


export default FlashCode;
