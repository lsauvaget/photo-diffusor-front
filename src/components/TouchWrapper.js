import React, { Component } from 'react';

class TouchWrapper extends Component {
    touchLeave = (touchStartPoint, touchLeavePoint) => {
        let delta = touchStartPoint - touchLeavePoint;
        if(Math.abs(delta) < 100) {
            return null;
        }
        if(delta < 0) {
            return this.props.moveLeft();
        }
        return this.props.moveRight();
    }

    render() {
        let touchStart = null;
        return (
                <div 
                    onClick={this.props.click}
                    onTouchStart={e => touchStart = e.changedTouches[0].clientX}
                    onTouchEnd={e => this.touchLeave(touchStart, e.changedTouches[0].clientX)} >
                    {this.props.children}
                </div>
            )
    }
}

export default TouchWrapper;
