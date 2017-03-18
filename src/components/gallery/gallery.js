import React from 'react';
import './gallery.css';
import Item from '../item/Item.js';
import configs from '../../configs';

const Gallery = (props) => 
    <div className="Gallery">
        <div className={`Gallery__item-wrapper ${props.selectedMedium ?  'Gallery__item-wrapper--blurred' : ''}`}>
            {props.media.length > 0 && props.media.map((medium, index) => 
            <div onClick={() => props.onMediumClick(medium)} key={index} className="Gallery__item-wrapper__item">
                <Item thumbnail={`${configs.mediaUrl}${medium.thumbnail}`} label={medium.name}></Item>
            </div>
            )}
        </div>
    </div>
export default Gallery;

