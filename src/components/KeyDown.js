import { Component } from 'react';

class KeyDown extends Component {

    keyDown = (evt) => {
        const keyCode = evt.keyCode;
        const selectedsKeyCode = [].concat(this.props.keyCode);
        if(~selectedsKeyCode.indexOf(''+keyCode)) {
            this.props.toTrigger();
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.keyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.keyDown);
    }
    render() {
        return null;
    }
}

export default KeyDown;
