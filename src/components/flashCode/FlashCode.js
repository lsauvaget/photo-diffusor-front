import React, {Component, PropTypes} from 'react';
import './FlashCode.css';
import ScrollLock from 'react-scrolllock';
import QRCode from 'davidshimjs-qrcodejs';

class FlashCode extends Component {
    static propTypes = {
        link: PropTypes.string.isRequired,
        closeFlashCode: PropTypes.func.isRequired,
        shortLink: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.$elem = null;
        this.qrcode = null;
    }

    componentWillReceiveProps({link}) {
        if(link !== this.props.link && this.qrcode) {
            this.qrcode.makeCode(link);
        }
    }

    componentDidMount() {
        const {link} = this.props;
        console.log(link)
        this.qrcode = new QRCode(this.$elem, {
            text: link,
            width: 256,
            height: 256,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        }); 
    }

    componentWillUnmount() {
        this.qrcode.clear();
    }

    render() {
        const {closeFlashCode, shortLink} = this.props;
        return (
            <div className="FlashCode">
                <div className="FlashCode__wrapper">
                    <div className="FlashCode__wrapper__item" ref={$elem => this.$elem = $elem}></div>
                    <div className="FlashCode__wrapper__shortLink">
                        {shortLink}
                    </div>
                </div>
                <div onClick={closeFlashCode} className="FlashCode__overlay"></div>
                <ScrollLock/>
            </div>
        )
    }

}

export default FlashCode;
