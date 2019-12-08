import React from 'react';

const MyDeals = ()=>{
return(
    <div className="Dash-item Deals-selectors">
        <h1>My Deals</h1>
        <div className="selectors">
            <select>
                <option>Sort By Transaction</option>
            </select>
            <select>
                <option>Sort By Status</option>
            </select>
            <button type="submit">Submit</button>
        </div>
       
    </div>
);
}

export default MyDeals;