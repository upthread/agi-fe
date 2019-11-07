import styled from "styled-components";
export const Body = styled.section`
  background-color: #221e1f;
  background-image: url("images/overlay.png"), url("../../images/bg.jpg");
  background-repeat: repeat, no-repeat;
  background-size: auto, cover;
  background-position: top left, center 0;
  background-attachment: fixed, fixed;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 18pt;
  line-height: 1.75em;
  font-weight: 300;
  letter-spacing: 1px;
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
    margin-top:-30px;
    margin-bottom:30px;
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
    width:400px;
    margin:0.35em auto;


    &:before {
      content: "";
      display: block;
      width:inherit;
      border-top: solid 1px rgba(255, 255, 255, 0.5);
      margin: 4px 0 0.8em 0;
    }
    &:after{
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
		@include vendor('transition', ('background-color 0.35s ease-in-out', 'color 0.35s ease-in-out'));
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
        margin-top:10px
		&:hover {
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

    background-color: #9e554f;
`;

export const Portfolio = styled.section`
    display: flex;
    flex-direction: column 
    justify-content: center;
    align-content: center; 
    height: 100vh;

    background-color: #726D69;
`;

export const CTA = styled.section`
    display: flex;
    flex-direction: column 
    justify-content: center;
    align-content: center; 
    height: 100vh;

    background-color: #A87C69 ;
`;
