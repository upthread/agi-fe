import React from 'react';
import ChildCard from "./100Children";

const ParentCard = (props)=>{
    const videos = props.videos;

    
    const Toggle = (e)=>{
        e.preventDefault();
        const hidden = document.body.querySelector(`.Hidden-${props.stepNumber}`)
        console.log(hidden)
        hidden.classList.toggle('Visible');
    }

    return(            
        <div className="Step-HR">
            <hr/>
            <div className="Step-Flex">
                    <div className="cuck">
                        <div className="Step-Ball">
                        <h5>{props.stepNumber}</h5>
                        </div>
                        <h2 id="cuckh2">{props.title}</h2>
                    </div>
                    <button type='button' onClick={(e)=>Toggle(e)}>&#43;</button>
            </div>
            <div className={` HideMe Hidden-${props.stepNumber}`}>
                {videos.map((vid, index)=>(
                    <ChildCard key={index} video ={vid}/>
                ))}
            </div>

        </div>
    );
}

export default ParentCard;