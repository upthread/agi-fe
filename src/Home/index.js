import React from 'react'
import {
    Body,
    Splash,
    Banner,
    Feature,
    Portfolio,
    CTA,
    // SplashImg
} from './styles'

 // need a fixed sidebar so contact

const Home = () => {
    return (
        <Body>
            <Splash>
                <h1 id='Name'>AGI</h1>
                <p></p>
                <button>Start</button>
            </Splash>
            <Banner>
                <h3>AG international</h3>
                <p>Web Enabled Real Estate Brokerage</p>
            </Banner>
            <Feature>
                <h3>Feature</h3>
            </Feature>
            <Portfolio>
                <h3>Portfolio</h3>
            </Portfolio>
            <CTA>
                <h3>CTA</h3>
            </CTA>
        </Body>
        
    )
}

export default Home
