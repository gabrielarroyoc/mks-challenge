import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
    --background: #FFFFFF;
    --shape: #090B10;
    --primary: #0F52BA;
    --secondary: #083375;
    --border: #212b54;
    --hover: #212b54;
    --title: #2C2C2C;
    --subtitle: #2C2C2C;
    --price: #373737;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }

    strong, span {
      color: var(--title);
    }

    body {  
    font-family: "Montserrat", "sans-serif";
    font-size: 1rem;
    background-color: var(--background);
    color: var(--title);
    overflow-x: hidden;
    a {
      text-decoration: none;
      color: white;
    }
  }
  button {
    cursor: pointer;
  }
  body::-webkit-scrollbar {
    width: 5px;
  }
  body::-webkit-scrollbar-track {
    background: var(--shape);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 20px;
    border: 3px solid var(--primary);
  }
  }


`;
