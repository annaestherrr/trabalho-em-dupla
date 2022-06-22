import React from "react";
import Header from "./components/Header";
import Main1 from "./components/Main1";
import Main2 from "./components/Main2";
import Main3 from "./components/Main3";
import Footer from "./components/Footer";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: 'Montserrat', sans-serif;
}
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main1 />
      <Main2 />
      <Main3 />
      <Footer />
    </>
  );
}
