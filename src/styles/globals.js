import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  input {
    width: 600px;
  }
  textarea {
    height: 10em;
    width: 600px;
  }
  

  .message-chars-left {
    width: 600px;
    margin: auto;
    text-align: left;
  }

  .BgAnimation__svg {
    position: relative;
    left: 50px;
  }

  .custom-button{
    background: none;
    border: 2px solid;
    font: inherit;
    line-height: 1;
    margin: 0.5em;
    padding: 1em 2em;
  }

  // .custom-button{
  //   border-image:linear-gradient(to right,#13ADC7 ,#945DD6) 1;
  //   width: 200px;
  //   font-size:2rem;
  //   border-radius:20px;

  //   &:hover {
  //     box-shadow: 3px 3px 10px rgba(80, 78, 78, 0.3);
  //     transform: scale(0.98);
  //     transition-duration: 0.1s;
  //     background:linear-gradient(90deg, #13ADC7 35%, #945DD6 100%);
  //     color:white
   
  //   }
  
  // }










 



  


  
  

`;

export default GlobalStyles;
