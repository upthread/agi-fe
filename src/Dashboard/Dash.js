import React from "react"
import {list, KPI} from "../Data/ListData";
import {Route, Switch, Link} from 'react-router-dom';
import DashBoardPage from './Pages/DashBoardPage';
import MyDeals from "./Pages/MyDeals";

const Dash = (props)=>{

    return(
        <div className="Dash">
            <div className="list Dash-item">
                {list.map((item,index)=>(
                    <div key={item.index} className="listItem">
                        <h3><Link to={"/agent/" +item.title.replace(/\s/g, '')}>{item.title}</Link></h3>
                    </div>
                ))}
            </div>
            <Switch>
                <Route path="/agent/mydeals" component={MyDeals}/>
                <Route path="/" component={DashBoardPage}/>
            </Switch>
        </div>
    );
}

export default Dash;