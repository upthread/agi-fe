import React from 'react';

const AddDealPage = ()=>{
    return(
        <div className = "Dash-item">
            <h1>Add Deal</h1>
            <div className="Address">
                <form>

                    <section>{/* ***********here is the tope third section */}
                        <h5>Property Address</h5>
                        <label htmlFor="address"></label>
                        <input name="address" id="addressBar" type="text" placeholder="Enter Property Details Here"/>
                        <div className="Address-flex">
                            <div className="Triple-Hold">
                                <div className="Triple-Flex">
                                    <label htmlFor="Unit Number">
                                    </label>
                                    <input name="Unit Number" type="text" placeholder="Unit Number"/>
                                </div>
                            </div>
                            <div className="Triple-Hold">
                                <div className="Triple-Flex">
                                    <label htmlFor="Street Number">
                                    </label>
                                    <input name="Street Number" type="text" placeholder="Street Number"/>
                                </div>
                            </div>
                            <div className="Triple-Hold">
                                <div className="Triple-Flex">
                                    <label htmlFor="City">
                                    </label>
                                    <input name="City" type="text" placeholder="City"/>
                                </div>
                            </div>
                        </div>
                        <div className="Address-flex" >
                            <div className="Triple-Hold">
                                <div className="Triple-Flex">
                                    <label htmlFor="State"></label>
                                    <input name="State" type="text" placeholder="State"/>
                                </div>
                            </div>
                            <div className="Triple-Hold">
                                <div className="Triple-Flex">
                                <label htmlFor="Zip Code">
                                </label>
                                    <input name="Zip Code" type="text" placeholder="Zip Code"/>
                                </div>
                            </div>
                            <div className="Triple-Hold">
                                <div className="Triple-Flex">
                                <label htmlFor="Zip Code">
                                </label>
                                    <input name="Zip Code" type="text" placeholder="Zip Code"/>
                                </div>
                            </div>
                        </div>
                    </section>

        <hr/>

                    <section>{/***********Here is the second section*/}
                        <div className="Address-flex">
                            <div className="Address-radio">
                                <h5>Transaction Type:</h5>
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
                            <div className="Double-Hold">
                                <input type="text" placeholder="Buyer Name"/>
                            </div>
                            <div className="Double-Hold">
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

                    <section>{/*The third section*************** */}
                        <div className="Address-flex">
                            <div className="Triple-Hold">
                                <div className="Triple-Flex">
                                    <h5>Contract Date</h5>
                                    <input type="date"/>
                                </div>
                            </div>
                            <div className="Triple-Hold">
                                <div className="Triple-Flex">
                                    <h5>Expected Closing Date</h5>
                                    <input type="date"/>
                                </div>
                            </div>
                            <div className="Triple-Hold">
                                <div className="Triple-Flex">
                                    <h5>Sale Price or Contract Amount</h5>
                                    <input type="text" placeholder="e.g 300,000"/>
                                </div>
                            </div>
                        </div>
                    </section>

        <hr/>
                    
                    <section>{/**the Fourth section88888888888888888 */}
                        <div className="Address-flex">
                            <div className="Double-Hold">
                                <h5>Commission (%)</h5>
                                <input type='text' placeholder="Commission (%)"/>
                            </div>
                            <div className="Double-Hold">
                                <h5>Commission($)</h5>
                                <input type= "text" placeholder="Commission ($)"/>
                            </div>
                        </div>
                        <div className="Address-flex">
                            <div className="Triple-Hold">
                                <div className="Triple-Flex">
                                    <h5>Transaction Fee(%)</h5>
                                    <input type="text" placeholder="eg. 80"/>
                                </div>
                            </div>
                            <div className="Triple-Hold">
                                <div className="Triple-Flex">
                                    <h5>AGI Transaction Fee($)</h5>
                                    <input type="text" placeholder="eg. 80"/>
                                </div>
                            </div>
                            <div className="Triple-Hold">
                                <div className="Triple-Flex">
                                    <h5>Net To Agent($)</h5>
                                    <input type="text" placeholder="eg. 80"/>
                                </div>
                            </div>
                        </div>
                    </section>

        <hr/>
                    <div className="Button-Flex">
                        <button type="submit"><b>Submit</b></button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddDealPage;