import React from 'react';
import ChildCard from "./100Children";

const ParentCard = (props)=>{
    const videos = props.videos;

    
    const Toggle = (e)=>{
        e.preventDefault();
        const hidden = document.body.querySelector(`.Hidden-${props.stepNumber}`)
        
        hidden.classList.toggle('Visible');

        const stepCircle = document.body.querySelector(`.Step-Ball-${props.stepNumber}`);
        const title= document.body.querySelector(`.Header-${props.stepNumber}`);

        console.log(stepCircle, title)


        stepCircle.classList.toggle('Active-background');
        title.classList.toggle('Active');

    }

    return(            
        <div className="Step-HR">
            <hr/>
            <div className="Step-Flex">
                    <div className="cuck">
                        <div className={` Step-Ball Step-Ball-${props.stepNumber}`}>
                            <h5>{props.stepNumber}</h5>
                        </div>
                        <h2 className={`Header Header-${props.stepNumber}`}>{props.title}</h2>
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