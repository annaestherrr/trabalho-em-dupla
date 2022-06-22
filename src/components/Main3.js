import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: #dfe4de;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 7rem;

  h2 {
    font-weight: 900;
    font-size: 2rem;
  }
  h3 {
    font-size: 1.4rem;
    font-weight: 550;
    margin-top: 0.5rem;
  }
  input {
    width: 30rem;
    padding: 1.5rem;
    background-color: #eff1ee;
    border: none;
    font-size: 1rem;
    margin: 2.3rem;
  }
  button {
    border: solid black;
    width: 8rem;
    height: 2rem;
    font-size: 1rem;
    background-color: #dfe4de;
    font-weight: 900;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      cursor: pointer;
    }
  }
`;

export default function Main3() {
  return (
    <main3>
      <Section>
        <h2>SUBSCRIBE</h2>
        <h3>Sign up for newsletter</h3>
        <input placeholder="Your Email" />
        <button>SUBMIT</button>
      </Section>
    </main3>
  );
}
