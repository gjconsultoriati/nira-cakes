import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 
   body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.6;
  }
  h1, h2,h3,h4 {
    font-family: 'Quicksand', sans-serif;
  }
  span, strong, p {
    font-family: 'Montserrat', sans-serif;
  }
  
  button {
    cursor: pointer;
  }
`