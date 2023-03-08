import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: #0F0F10;        
        font-family: 'Aboreto', cursive;
        font-family: 'Raleway', sans-serif;

        ul, li, a{
            list-style: none;
            text-decoration: none;
        }
    }
    
    .container{
        width: 100%;
        max-width: 1040px;
        height: 100%;
        margin: 0 auto; 
        background-color: rgba(0,0,0,.9);
    }
`
