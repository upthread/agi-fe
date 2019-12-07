import React from 'react'
import { Route } from 'react-router-dom'

// import Form from '../Form'
import Template from '../Template'
import Home from '../Home'
import Registration from '../Registration'
import Checkout from "../Stripe/Checkout"
import Dashboard from "../Dashboard/Dashboard"

const routes = () => {
    return (
        <>
            <Route exact path='/'  component={Home} /> 
            <Route path='/templ'  component={Template} /> 
            <Route path='/multi'  component={Registration} /> 
            <Route path="/stripe" component={Checkout}/>
            <Route path="/dashboard" component={Dashboard}/>
            {/* <Route path='/'  component={} />  */}
            {/* <Route path='/'  component={} />  */}
            {/* <Route path='/'  component={} />  */}
            {/* <Route path='/'  component={} />  */}
        </>
    )
}

export default routes
