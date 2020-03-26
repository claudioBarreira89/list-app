import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,700i');

    body, html {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        line-height: 1.5;
        color: ${colors.black};
        text-align: left;
        background-color: ${colors.gray};
    }

    * {
        margin: 0;
        padding: 0;
    }

    ul {
        list-style-type: none;
    }
      
    p {
        color: ${colors.grayDark};
    }


    h1 {
        color: ${colors.teal};
        font-weight: 400;
    }
  
    h2 {
        font-size: 2.125rem;
        padding: 0 1rem;
    }
  
    h3 {
        font-size: 1.5rem;
        padding: 0 .5rem;
        font-weight: 300;
    }
`;

export { default as colors } from "./colors";
export default GlobalStyles;
