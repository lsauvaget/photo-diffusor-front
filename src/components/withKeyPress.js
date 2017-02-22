import React, { Component } from 'react';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || 
         WrappedComponent.name || 'Component';
}

export default function withKeyPress(WrappedComponent) {
    return class extends Component {
        static displayName = `withKeyPress(${getDisplayName(WrappedComponent)})`
        constructor() {
            super();
            this.state = {
                keyPress: null
            };
        }

        keyPress(evt) {
            this.setState({
                keyPress: evt.keyCode
            });
        }
        componentDidMount() {
            document.addEventListener('keydown', this.keyPress.bind(this));
        }

        componentWillUnmount() {
            document.removeEventListener('keydown', this.keyPress);
        }
        render() {
            return <WrappedComponent {...this.props} keypress={this.state.keyPress}/>
        }
    }
}
