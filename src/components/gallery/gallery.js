import React from 'react';
import './gallery.css';
import Item from '../item/Item.js';
import configs from '../../configs';

const Gallery = ({media, onMediumClick, selectedMedium}) => 
    <div className="Gallery">
        <div className={`Gallery__item-wrapper ${selectedMedium ?  'Gallery__item-wrapper--blurred' : ''}`}>
            {media.length > 0 && media.map((medium, index) => 
            <div onClick={() => onMediumClick(medium)} key={index} className="Gallery__item-wrapper__item">
                <Item thumbnail={`${configs.mediaUrl}${medium.thumbnail}`} label={medium.name}></Item>
            </div>
            )}
        </div>
    </div>
export default Gallery;

