import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 100%;
    }

    &:root {
        // ================ Primary ================

        --Lime-Green: hsl(163, 72%, 41%);
        --Bright-Red: hsl(356, 69%, 56%);
        --Facebook: hsl(208, 92%, 53%);
        --Twitter: hsl(203, 89%, 53%);
        --Instagram: linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%);
        --YouTube: hsl(348, 97%, 39%);

        // ================ Dark Theme ================

        --Toggle-dark: linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%);

        // ================ Light Theme ================

        --Toggle-light: hsl(230, 22%, 74%);

        // ================ Dark Theme Neutral ================

        --Bg-Body: #1E212A;
        --Very-Dark-Blue: hsl(230, 17%, 14%); //BG - Text
        --Very-Dark-Blue-Top: hsl(232, 19%, 15%); //BG
        --Dark-Desaturated-Blue: hsl(228, 28%, 20%); //Card BG
        --Dark-Desaturated-Blue-hover: #343B57; //Card BG - hover
        --Desaturated-Blue: hsl(228, 34%, 66%); //Text
        --White: hsl(0, 0%, 100%); //Text

        // ================ Light Theme Neutral ================

        --Very-Pale-Blue-Top: hsl(225, 100%, 98%); //BG
        --Light-Grayish-Blue: hsl(227, 47%, 96%); //Card BG
        --Light-Grayish-Blue-hover: #E1E3F0; //Card BG - hover
        --Dark-Grayish-Blue: hsl(228, 12%, 44%); //Text
        
        //- White (BG): hsl(0, 0%, 100%)
        //Very Dark Blue (Text): hsl(230, 17%, 14%)

    }

   body {
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    background-color: var(--Bg-Body);
   }

   button {
    cursor: pointer;
   }

   img {
    display: block;
   }

`;
