import React, {Component} from 'react';
import './home.css';
import throttle from 'lodash.throttle';

class Home extends Component {
    componentDidMount() {
        const offsetHeight = this.$elm.offsetHeight;
        let lastBottom = null;
        document.onscroll = throttle(() => {
            const bottom = this.$elm.getBoundingClientRect().bottom;
            const opacity = 1 - bottom / offsetHeight;
            if (lastBottom !== bottom) {
                lastBottom = bottom;
                requestAnimationFrame(() => {
                    this.$child.style.opacity = opacity;
                    if(bottom === 0) {
                        this.$child.style.overflow = 'auto';
                    } else {
                        this.$child.style.overflow = 'hidden';
                    }
                });

            }
        }, 100)
    }

    render() {
        const {children} = this.props;
        return (
            <div className="Home">
                <div className="Home__gallery">
                    <div ref={$child => this.$child = $child} 
                        className="Home__gallery__wrapper">{children}</div>
                </div>
                <div ref={elm => this.$elm = elm} className="Home__landscape">
                    <div  className="Home__landscape__content">
                        <div className="Home__landscape__content__title">
                            Gallery
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
