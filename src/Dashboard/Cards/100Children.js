import React from 'react';

const ChildCard = (props)=>{
    const vid = props.video;
    return(
        <div>
            <h3>{vid.description}</h3>
            <h3>{vid.title}</h3>
        </div>
    );
}

export default ChildCard;