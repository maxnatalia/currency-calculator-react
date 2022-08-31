import { createGlobalStyle } from "styled-components";
import background from "./background.png";


export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    body {
    margin: 0 auto;
    max-width: 1000px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    background-image: url("${background}");
    resize: both;
    overflow: auto;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    }
`;