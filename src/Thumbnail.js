import React from 'react';
import './Thumbnail.css'

const Thumbnail = (props) => {
    const {thumbnail} = props;
    return (
        <img src={thumbnail} alt="Not Image"/>
    )
};

export default Thumbnail;