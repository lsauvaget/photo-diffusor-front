import React, { Component } from 'react';
import './Item.css';

class Item extends Component{
    constructor(props) {
        super(props);
        this.$elem = null;
        this.translations = {
            x: 0,
            y: 0
        };
        this.prevTranslations = {
            x: 0,
            y: 0
        };
        this.mousePos = {
            x: 0,
            y: 0
        }
        this.mouseOver = false;
    }

    componentDidMount() {
        this.animation();
    }

    animation() {
        const isInBoundings = this.mousePos.x > this.$elem.offsetLeft + 10
            && this.mousePos.x < this.$elem.offsetLeft + this.$elem.offsetWidth - 10
            && this.mousePos.y > this.$elem.offsetTop + 10
            && this.mousePos.y < this.$elem.offsetTop + this.$elem.offsetHeight -10 ;
        if(isInBoundings) {
            const targetX = (this.$elem.offsetWidth/2 - (this.mousePos.x - this.$elem.offsetLeft)) * 0.1;
            const targetY = (this.$elem.offsetHeight/2 - (this.mousePos.y - this.$elem.offsetTop)) * 0.1;
            this.translations.x += (targetX - this.translations.x)*0.2;
            this.translations.y += (targetY - this.translations.y)*0.2;
            if(Math.abs(this.translations.x) < .001) this.translations.x = 0;
            if(Math.abs(this.translations.y) < .001) this.translations.y = 0;
            if(this.prevTranslations.x !== this.translations.x &&
                this.prevTranslations.y !== this.translations.y) {
                    this.$elem.children[0].style.transform = `translate(${this.translations.x}px, ${this.translations.y}px) scale(1)`;
                }
        } else {
            this.translations.x = 0;
            this.translations.y = 0;
            this.$elem.children[0].style.transform = `translate(${this.translations.x}px, ${this.translations.y}px) scale(.9)`;
        }
        requestAnimationFrame(this.animation.bind(this));
    }

    mouseMove = (e) => {
        this.mousePos.x = e.pageX;
        this.mousePos.y = e.pageY;
    }

    render() {
        const props = this.props;
        return (
            <div ref={(itemWrapper) => this.$elem = itemWrapper} onMouseMove={this.mouseMove} className="Item">
                <img onClick={props.click && props.click.bind(null, props.fullSize)} className="Item__img" src={props.thumbnail} alt=""/>
            </div>
        )
    }
}

export default Item;
