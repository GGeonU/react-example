import React from 'react';

const Info = (props) => {
    const {title, author} = props;

    return(
        <div>
            <h3>{title}</h3>
            <p>{author}</p>
        </div>
    )
};

export default Info;