import React from 'react'
import { Route } from 'react-router-dom'

// import Form from '../Form'
import Template from '../Template'
import Home from '../Home'
import Registration from '../Registration'

const routes = () => {
    return (
        <>
            <Route exact path='/'  component={Home} /> 
            <Route path='/templ'  component={Template} /> 
            <Route path='/multi'  component={Registration} /> 
            {/* <Route path='/'  component={} />  */}
            {/* <Route path='/'  component={} />  */}
            {/* <Route path='/'  component={} />  */}
            {/* <Route path='/'  component={} />  */}
        </>
    )
}

export default routes
