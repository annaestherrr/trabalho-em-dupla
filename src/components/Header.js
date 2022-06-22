import React from "react";
import styled from "styled-components";

const Cabeçario = styled.div`
  background-image: url("https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=8444393a-5d93-4997-8ad0-0d450a8011e0&api_key=CometServer1&access_token=1655802322_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_002815fc6cc23418ab69f4ba32f51b1059f48863");
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  height: 100vh;
  margin: 1rem;
`;

const T2Header = styled.h2`
  color: #373737;
  font-size: 3rem;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

const ItemsHeader = styled.ul`
  width: 30vw;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  color: #373737;
  font-size: 1rem;
`;

const Title = styled.h1`
  height: 85%;
  font-weight:900;
  color: #373737;
  font-size: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Header() {
  return (
    <>
      <Cabeçario>
        <Menu>
          <T2Header>RC</T2Header>
          <ItemsHeader>
            <li>ABOUT</li>
            <li>RECIPES</li>
            <li>SUBSCRIBE</li>
          </ItemsHeader>
        </Menu>
        <Title>RECIPES</Title>
      </Cabeçario>
    </>
  );
}
