import styled from 'styled-components'

export const Body = styled.section`
    background-color: #221E1F;
    background-image: url("images/overlay.png"), url("../../images/bg.jpg");
    background-repeat: repeat, no-repeat;
    background-size: auto, cover;
    background-position: top left, center 0;
    background-attachment: fixed, fixed;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18pt;
    line-height: 1.75em;
    font-weight: 300;
    letter-spacing: 1px;
    color: #3a3939;
    text-shadow: 0 0 0.5px rgba(58, 57, 57, 0.25);
    -webkit-text-stroke: 0.25px;
`

export const Splash  = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center; 
    height: 100vh;
    
    background-color: #221E1F;
    background-image: url("aaron-huber-s95oB2n9jng-unsplash.jpg");
    background-repeat: repeat, no-repeat;
    background-size: cover;


    h1{
        text-align: center;
        font-size: 140px;
        font-family: serif;
        color: white;
        // color: #d1d1ff;
        // color: #6e7277


        text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    }

    img {
        max-width: 100%; 
    }

    button {
        align-self: center;
        max-width: 30vw;
        max-height: 10vh; 
        height: 50px;
        width: 150px;

        border-radius:15px;
        color: blue
    }

`

export const Banner = styled.section`

    display: flex;
    flex-direction: column 
    justify-content: center;
    align-content: center; 
    height: 100vh;

    background-color: #6e7277;

    h3 {
        text-align: center; 
        color: white;
        font-size: 50px; 
        font-family: serif
    }

    p {
        text-align:center; 
        color: white;
        font-size: 25px
        font-family: serif;
    }

    
    
`

export const Feature = styled.section`
    display: flex;
    flex-direction: column 
    justify-content: center;
    align-content: center; 
    height: 100vh;

    background-color: #9e554f;
`

export const Portfolio = styled.section`
    display: flex;
    flex-direction: column 
    justify-content: center;
    align-content: center; 
    height: 100vh;

    background-color: #726D69;
`

export const CTA = styled.section`
    display: flex;
    flex-direction: column 
    justify-content: center;
    align-content: center; 
    height: 100vh;

    background-color: #A87C69 ;
`
