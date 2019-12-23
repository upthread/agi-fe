import React from 'react';

const MyDeals = ()=>{

    
    const createOptions =(targer,num)=>{
        let i = 0;
        for(i = 0; i <= num; i++){
                let ele = document.createElement('option')
                let text = document.createTextNode(`Option Number-${i}`)
                ele.appendChild(text);
                targer.appendChild(ele)
            }
        }
        
    const Deals = 0;
        
    React.useEffect(()=>{

    const TransactionsNumber = 5;
    const StatusNumber = 3;
    const trans =  document.body.querySelector('#Transaction');
    const status = document.body.querySelector('#Status');

        createOptions(trans,TransactionsNumber)
        createOptions(status, StatusNumber);
        
    }, [])

return(
    <div className="Dash-item">
        <div className="Deals-selectors">
            <h1>My Deals</h1>
            <div className="selectors">
                <select id="Transaction">
                    <option>Sort By Transaction</option>
                </select>
                <select id ="Status">
                    <option>Sort By Status</option>
                </select>
                <button type="submit">Submit</button>
            </div>
        </div>
        <div className="Deals">
            {Deals > 0 ?
                <h3>Listing the deals</h3>
                :
                <h3>No deals found</h3>
            }
        </div>
    </div>
);
}

export default MyDeals;