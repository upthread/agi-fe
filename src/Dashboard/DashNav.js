import React from 'react';
import {Link, Route} from "react-router-dom";
import DashBoardFrame from "./DashBoardFrame";

const DashNav = ()=>{

    
    return(
        <div>
            <div className="Bar">
                <div className="Items">
                    <p className="logo">AGI</p>
                    <Link to="#">The 100 Club</Link>
                    <Link to="#">The Plan</Link>
                    <Link to="#">Dashboard</Link>
                </div>
                <div className="Home">
                    Home
                </div>
            </div>
            <Route to="/" component={DashBoardFrame}/>
        </div>
    );
}

export default DashNav;