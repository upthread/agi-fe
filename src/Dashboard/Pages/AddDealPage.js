import React from 'react';

const AddDealPage = ()=>{
    return(
        <div className = "Dash-item">
            <h1>Add Deal</h1>
            <div className="Address">
                <h5>Property Address</h5>
                <form>

                    <section>{/* ***********here is the tope third section */}
                        <label htmlFor="address"></label>
                        <input name="address" id="addressBar" type="text" placeholder="Enter Property Details Here"/>
                        <div className="Address-flex" >
                            <div>
                                <label htmlFor="Unit Number">
                                <input name="Unit Number" type="text" placeholder="Unit Number"/>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="Street Number">
                                <input name="Street Number" type="text" placeholder="Street Number"/>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="City">
                                <input name="City" type="text" placeholder="City"/>
                                </label>
                            </div>
                        </div>
                        <div className="Address-flex" >
                            <div>
                                <label htmlFor="State">
                                <input name="State" type="text" placeholder="State"/>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="Zip Code">
                                <input name="Zip Code" type="text" placeholder="Zip Code"/>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="Country">
                                <input name="Country" type="text" placeholder="Country"/>
                                </label>
                            </div>
                        </div>
                    </section>

        <hr/>

                    <section>{/***********Here is the second section*/}
                        <div className="Address-flex">
                            <div className="Address-radio">
                                <h5>Trasaction Type:</h5>
                                <input type="radio"  name="radio"/>
                                <label class="container">Rental</label>
                                <input type="radio"  name="radio"/>
                                <label class="container">Sale</label>
                            </div>
                            <div className="Address-radio">
                                <h5>Sides(s):</h5>
                                <input type="radio"  name="radio"/>
                                <label class="container">Sell</label>
                                <input type="radio"  name="radio"/>
                                <label class="container">Buy</label>
                                <input type="radio"  name="radio"/>
                                <label class="container">Both</label>
                            </div>
                        </div>
                        <div className="Address-flex">
                            <div className="Buyer-Seller">
                                <input type="text" placeholder="Buyer Name"/>
                            </div>
                            <div className="Buyer-Seller">
                                <input type="text" placeholder="Seller Name"/>
                            </div>
                        </div>
                        <div className="Address-radio">
                            <h5>Property Status:</h5>
                            <input type="radio"  name="radio"/>
                            <label class="container">Pending</label>
                            <input type="radio"  name="radio"/>
                            <label class="container">Closed</label>
                        </div>
                    </section>

        <hr/>

                </form>
            </div>
        </div>
    );
}

export default AddDealPage;