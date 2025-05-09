import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
background: -webkit-linear-gradient(90deg, #8ed5e6,#f499be,#b3e2ff);
background: linear-gradient(90deg, #8ed5e6,#f499be,#b3e2ff);
}

`;
