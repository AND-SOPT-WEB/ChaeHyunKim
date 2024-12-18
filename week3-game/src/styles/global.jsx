import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const global = createGlobalStyle`

    ${reset}
    
    * {
    box-sizing: border-box;
    }

    html {
    font-size: 62.5%;

    background-color: ${({ theme }) => theme.colors.bgInlineCode};

    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color:rgb(0 0 0 / 0%);
    scroll-behavior: smooth; 
    }


    ul, li {
    padding-left: 0;

    list-style: none;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    input, button {
    background-color: transparent;
    outline: none;
    border: none;
    }

    button {
    padding: 0;

    cursor: pointer;
    }

    input {
    appearance: none;

    &:focus {
        outline: none;
    }
    }

    
`;

export default global;
