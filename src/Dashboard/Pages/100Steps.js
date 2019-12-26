import React from 'react';
import ParentCard from "../Cards/100Parent";
const STS = (props)=>{
    const lessons = props.lessons;
    return(
        <div className = "Dash-item">
            <h1>100 Steps to Success</h1>
            {lessons.map((les,index)=>(
                <ParentCard key={index} stepNumber={les.stepNumber} title={les.title} videos={les.videos}/>
            ))}

        </div>
    );
}
export default STS;