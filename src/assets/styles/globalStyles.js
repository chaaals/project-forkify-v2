import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@700&family=Roboto&display=swap');

    *,*::after,*::before{
        --primary-color: #557174;
        --secondary-color: #9DAD7F;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
