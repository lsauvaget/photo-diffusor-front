import React from 'react';
import './Item.css';

const Item = (props) => 
    <div className="Item">
        <img onClick={props.click && props.click.bind(null, props.fullSize)} className="Item__img" src={props.thumbnail} alt=""/>
    </div>

export default Item;
