import React, { Component } from 'react';
import './gallery.css';
import Item from '../item/Item.js';
import Lightbox from '../lightbox/Lightbox.js';
import configs from '../../configs';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMedium: null
        };

    }

    componentDidMount() {
        document.addEventListener('keydown', this.keyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.keyPress);
    }

    clickOnMedium = (medium) => {
        return () => {
            this.setState({
                selectedMedium: medium
            });
        }
    }

    closeLightbox = () => {
        this.setState({
            selectedMedium: null
        });
    }

    keyPress = (evt) => {
        const selectedMedium = this.state.selectedMedium;
        const media = this.props.media;
        if(!selectedMedium || !media.length) {
            return null;
        }
        const idx = media.indexOf(selectedMedium);
        if (evt.keyCode === 37) {
            this.setState({
                selectedMedium: idx - 1 > 0 ? media[idx - 1] : media[media.length - 1]
            });
        }
        if (evt.keyCode === 39) {
            this.setState({
                selectedMedium: idx < media.length ? media[idx + 1] : media[0]
            });
        }
    }

    render() {
        const media = this.props.media;
        const selectedMedium = this.state.selectedMedium;
        const classOnItemWrapper = `Gallery__item-wrapper ${selectedMedium ? 'Gallery__item-wrapper--blurred' : ''}`
        return (
            <div onKeyDown={this.keyPress} className="Gallery">
                {selectedMedium && 
                    <Lightbox clickOnCloseButton={this.closeLightbox} fullSize={`${configs.mediaUrl}${selectedMedium.fullSize}`}/>}
                <div className={classOnItemWrapper}>
                    {media.length > 0 && media.map((medium, index) => 
                        <div onClick={this.clickOnMedium(medium)} key={index} className="Gallery__item-wrapper__item">
                            <Item thumbnail={`${configs.mediaUrl}${medium.thumbnail}`} label={medium.name}></Item>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Gallery;

