import React from "react";
import styled from "styled-components";

const ContainerMain2 = styled.div`
display:flex;
align-items:center;
jusntify-content:center;
wight:100%;
heigth:100%;
margin-top:10rem;

img{
    width:50%;
    height:80vh;
}

` 
const TextMain = styled.div`
    height:80vh;
    width:50%;
    display:flex;
    align-items:center;
    text-align:start;
    flex-direction:column;
    padding: 5rem 10rem;
   

    h2{
        margin-top:2rem;
        font-size:2rem;
    }
    div{
        width: 3rem;
        border-bottom: #373737 solid;
        margin-top: 0.8rem;
    }

    p{
        font-size:1.9rem;
        margin:4rem;
    }
`

export default function Main2(){
    return(
        <main2>
        <ContainerMain2>
            <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=f27a09e5-c3d7-4466-924a-c97490798175&api_key=CometServer1&access_token=1655895903_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_929747e5227c05f97f68ab808e3d1dc943fb9fa9" alt="Foto de colher"/>
            <TextMain>
                <h2>ABOUT</h2>
                <div></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</p>
            </TextMain>
        </ContainerMain2>
        </main2>
    )
}