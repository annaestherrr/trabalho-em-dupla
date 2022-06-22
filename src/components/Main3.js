import React from "react";
import styled from "styled-components";

const Section = styled.section`
background-color:#DFE4DE;
display:flex;
align-items:center;
flex-direction:column;
padding:15rem;

h2{
    font-weight:900;
    font-size:3.5rem;
    margin:1.7rem;
}
h3{
    font-size:3rem;
    font-weight:550;
   
}
input{
    width:45vw;
    padding:2.5rem;
    background-color:#EFF1EE;
    border:none;
    font-size:2rem;
    margin:2.3rem;
}
button{
    border:solid black;
    width:10vw;
    height:5vh;
    font-size:1.5rem;
    background-color:#DFE4DE;
    font-weight:900;
    padding:2rem;
    display:flex;
    justify-content:center;
    align-items:center;
}
` 

export default function Main3(){
    return(
    <main3>
        <Section>
            <h2>SUBSCRIBE</h2>
            <h3>Sign up for newsletter</h3>
            <input placeholder="Your Email"/>
            <button>SUBMIT</button>
        </Section>
    </main3>
    )
}

