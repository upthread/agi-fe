import React from "react"
import {list, KPI} from "../Data/ListData";

const Dash = ()=>{
    return(
        <div className="Dash">
            <div className="list Dash-item">
                {list.map((item,index)=>(
                    <div key={item.index} className="listItem">
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
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
        </div>
    );
}

export default Dash;