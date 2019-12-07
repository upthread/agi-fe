import React from 'react';
import {KPI} from "../../Data/ListData";

const DashBoardPage = ()=>{

    return(
        <div className="kpis Dash-item">
            <h1>Dashboard</h1>
            <div className="kpi-cards">
                {KPI.map((K,index)=>(
                    <div className="kpi-card">
                        <h3>{K.title}</h3>
                        <h3>{K.value}</h3>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default DashBoardPage;