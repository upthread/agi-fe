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
import { Container, Row, Col } from 'reactstrap';

 // need a fixed sidebar so contact

const Home = () => {
    return (
        <Body>
            <Splash>
                
                <h1 id='Name'>AGI</h1>
                <p>A broker You can Trust</p>
                <footer>
					<a href="#banner" class="button style2 scrolly-middle">Get Started</a>
                    </footer>
                    <div className="line"></div>
            </Splash>
            <Banner>
                <h3>AG international</h3>
                <p>Web Enabled Real Estate Brokerage</p>
            </Banner>
            <Feature>

            </Feature>
            <Portfolio>

            </Portfolio>
            <CTA>

            </CTA>
        </Body>
        
    )
}

export default Home
