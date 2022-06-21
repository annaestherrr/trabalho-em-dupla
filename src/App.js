import React from "react";
import Header from "./components/Header"
import Main1 from "./components/Main1"

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
`;

export default function App(){
  return(
    <>
    <Header />
    <Main1 />
    <GlobalStyle />
    </>
  )
}