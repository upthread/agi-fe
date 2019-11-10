import styled from "styled-components";

export const Body = styled.section`
  background-color: #221e1f;
  background-image: url("images/overlay.png"), url("../../images/bg.jpg");
  background-repeat: repeat, no-repeat;
  background-size: auto, cover;
  background-position: top left, center 0;
  background-attachment: fixed, fixed;
  font-family: "Source Sans Pro", sans-serif;
  // font-size: 18pt;
  // line-height: 1.75em;
  font-weight: 300;
  // letter-spacing: 1px;
  color: #3a3939;
  text-shadow: 0 0 0.5px rgba(58, 57, 57, 0.25);
  -webkit-text-stroke: 0.25px;
`;

export const Splash = styled.section`
  position: relative;
  color: #fff;
  text-shadow: 0 0 0.5px rgba(255, 255, 255, 0.25);
  text-align: center;
  margin: 0;
  cursor: default;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100vh;

  background-color: #221e1f;
  background-image: url("aaron-huber-s95oB2n9jng-unsplash.jpg");
  background-repeat: repeat, no-repeat;
  background-size: cover;

  h1 {
    text-align: center;
    font-size: 140px;
    font-family: serif;
    color: white;
    margin-top: -30px;
    margin-bottom: 30px;
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
    height: 30px;
    width: 100px;

    border-radius: 15px;
    color: blue;
  }
  p {
    border-top: solid 1px rgba(255, 255, 255, 0.5);
    color: rgba(255, 255, 255, 0.75);
    text-shadow: 0 0 0.5px rgba(255, 255, 255, 0.1875);
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing: 3px;
    padding: 0;
    margin-top: 0.35em;
    width: 400px;
    margin: 0.35em auto;

    &:before {
      content: "";
      display: block;
      width: inherit;
      border-top: solid 1px rgba(255, 255, 255, 0.5);
      margin: 4px 0 0.8em 0;
    }
    &:after {
    }
  }
  //   .line {
  //    width:100px;
  // //    max-height: 10vh;
  //     height: 100px;
  //    border-left: 1px solid red;
  //    margin-left:50%;

  // }

  .button {
    
    -webkit-appearance: none;
    position: relative;
    display: inline-block;
    border: 0;
    background: #35b88f;
    color: #fff;
    text-shadow: 0 0 0.5px rgba(255, 255, 255, 0.25);
    cursor: pointer;
    text-decoration: none;
    outline: 0;
    padding: 1em 2em 1em 2em;
    text-align: center;
    border-radius: 3em;
    font-weight: 400;
    margin-top:10px &:hover {
      background: #45c89f;
    }

    &.style2 {
      color: #3a3939;
      background: #fff;
      box-shadow: inset 0 0 0 1px #fff;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
        color: #fff !important;
        text-shadow: 0 0 0.5px rgba(255, 255, 255, 0.25) !important;
      }
    }

    &.style3 {
      background: none;
      color: #3a3939;
      box-shadow: inset 0 0 0 1px #dad9d9;

      &:hover {
        background: rgba(58, 57, 57, 0.025);
      }
    }
  }
`;

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

    
    
`;

export const Feature = styled.section`
    display: flex;
    flex-direction: column 
    justify-content: center;
    align-content: center; 
    height: 100vh;

    background-color: #726D69;
`;

export const Portfolio = styled.section`
    display: flex;
    flex-direction: column 
    justify-content: center;
    align-content: center; 

    ///Take care of this at media query either remove or set to 100vh
    height: 100%;
    background-color: #9e554f;
.card{
  width: 100%;
	overflow: hidden;
  border-radius:0px;
  margin:5px;
}
  
       .card-img-top  {
        width: 100%;
        transform: scale(1);
        transition: .3s ease-in-out;
        border-top-left-radius: 0px;
    border-top-right-radius: 0px;
      }
      .card-img-top:hover {
        transform: scale(1.3);
      }

      .card-body{
        background: #eeee
      }
      .btn{
        border-radius: 0px;
        color: #262262;
       background-color: #eeee; 
      border-color: #262262;
      }
    .btn .btn-secondary{
      color: #262262;
     
      background-color: #eeee; 
      border-color: #262262;
    }
    
   .assure{
    background-color: #eeee; 
    margin:10px auto 10px auto;
   }
.join-sec{
  background-color:#8775D1;
  color:white;
  padding: 100px 10px;
  margin: 0 auto;
  .join-btn {
    
    -webkit-appearance: none;
    position: relative;
    display: inline-block;
    border: 0;
    background: #35b88f;
    color: #fff;
    text-shadow: 0 0 0.5px rgba(255, 255, 255, 0.25);
    cursor: pointer;
    text-decoration: none;
    outline: 0;
    padding: 1em 2em 1em 2em;
    text-align: center;
    border-radius: 3em;
    font-weight: 400;
    margin-top:10px &:hover {
      background: #45c89f;
    }

    &:hover {
      background: #fff;
      color: #4cbb76;
    }
  }
}

`;

export const CTA = styled.section`
    display: flex;
    flex-direction: column 
    justify-content: center;
    align-content: center; 
    // height: 100vh;

    background-color: #A87C69 ;
    .row{
      margin:0 20px;
      color:white;
      text-decoration:none;
      h5{
        font-family: 'Literata', serif;
        letter-spacing: 5px;
      }
      p{
        font-family: 'Source Code Pro', monospace;
      }
      a{
        color:#fff
      }
    }
  
    .address{
      border-right: 1px solid white;
    }
    @media (max-width: 765px){
      .address{
        border-bottom: 1px solid white;
        border-right: 0px solid white;
        margin:5px
      }
    }
    .footer{
      margin:10px
      border-top: 1px solid white;
      p,a{
        margin:10px
        font-family: 'Comfortaa', cursive}
    }

`;
