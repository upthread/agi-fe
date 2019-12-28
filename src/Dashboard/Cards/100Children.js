import React from 'react';
import {Progress} from 'reactstrap';
const ChildCard = (props)=>{
    const vid = props.video;
    return(
        <div className="Child-Flex">
            <div className="Child-Hold">
                <h3>Step {vid.step}</h3>
                <h3>{vid.title}</h3>
                <p>{vid.description}</p>
                <input type="checkbox" value="done"/> Checked
            </div>
            <div className="Child-Hold">
                <div className = "Child-Video">
                    <iframe src="https://www.youtube.com/embed/Q5ekFMGoVZQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>99 steps to go</p>
                    <Progress color="success" value = '2'/>
                </div>
            </div>
        </div>
    );
}

export default ChildCard;