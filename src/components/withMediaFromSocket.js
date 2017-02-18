import React, { Component } from 'react';
import configs from '../configs';
import io from 'socket.io-client';
const socket = io(configs.socketUrl);

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || 
         WrappedComponent.name || 'Component';
}

export default function withMediaFromSocket(WrappedComponent) {
    return class extends Component {

        static displayName = `withMediaFromSocket(${getDisplayName(WrappedComponent)})`

        constructor(props) {
            super(props);
            this.state = {
                media: []
            };
            socket.on('init', (imgs) => {
                this.setState({
                    media: [...this.state.media, ...imgs]
                });
            });
        }

        render() {
            return (
                <WrappedComponent {...this.props} media={this.state.media}/>
            );
        }
    }
}
