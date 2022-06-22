import React from "react";
import styled from "styled-components";

const ContainerMain2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  img {
    width: 50%;
    height: 80vh;
  }
`;
const TextMain = styled.div`
  height: 80vh;
  width: 50%;
  display: flex;
  align-items: center;
  text-align: start;
  flex-direction: column;
  padding: 7rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  div {
    width: 3rem;
    border-bottom: #373737 solid;
    margin-bottom: 2.2rem;
  }
  p {
    font-size: 1rem;
  }
`;

export default function Main2() {
  return (
    <main2>
      <ContainerMain2>
        <img
          src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=f27a09e5-c3d7-4466-924a-c97490798175&api_key=CometServer1&access_token=1655977122_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_975135388a100a85322514d4d50269953e0bb621"
          alt="Foto de colher"
        />
        <TextMain>
          <h2>ABOUT</h2>
          <div></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu
            tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis
            dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem,
            quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis
            sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris.
            Pellentesque mattis hendrerit semper. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Ut
            vestibulum nisl ante, et ultricies sapien facilisis aliquam.
          </p>
        </TextMain>
      </ContainerMain2>
    </main2>
  );
}
