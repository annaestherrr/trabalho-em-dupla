import React from "react";
import styled from "styled-components";

const Section = styled.section`
  color: #373737;
  font-size: 3rem;
  background-color: #f2f4f1;
  padding-bottom: 7rem;
`;

const ContainerH2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 10rem;

  h2 {
    font-size: 2rem;
  }
`;

const Borda = styled.div`
  width: 3rem;
  border-bottom: #373737 solid;
  margin-top: 0.8rem;
`;

const ContainerFood = styled.ul`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 22rem;
    height: 15rem;
  }
`;

const ContainerText = styled.div`
  width: 22rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5rem;
`;

const ItemFood = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TitleImage = styled.h3`
  width: 18rem;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  padding-top: 1rem;
`;

export default function Main() {
  return (
    <main1>
      <Section>
        <ContainerH2>
          <h2>LATEST RECIPES</h2>
          <Borda></Borda>
        </ContainerH2>
        <ContainerFood>
          <ItemFood>
            <img
              src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=3f630898-5430-4084-a530-83df642c4b76&api_key=CometServer1&access_token=1655802322_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_002815fc6cc23418ab69f4ba32f51b1059f48863"
              alt=""
            />
            <ContainerText>
              <Borda></Borda>
              <TitleImage>Red Velvet Cake</TitleImage>
            </ContainerText>
          </ItemFood>
          <ItemFood>
            <img
              src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=6940ecee-9497-47c7-bc32-30dc58ecb408&api_key=CometServer1&access_token=1655802322_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_002815fc6cc23418ab69f4ba32f51b1059f48863"
              alt=""
            />
            <ContainerText>
              <Borda></Borda>
              <TitleImage>Margherita Pizza</TitleImage>
            </ContainerText>
          </ItemFood>
          <ItemFood>
            <img
              src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=bf663e2d-434a-4d4d-8185-a9a0e5dce49d&api_key=CometServer1&access_token=1655802322_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_002815fc6cc23418ab69f4ba32f51b1059f48863"
              alt=""
            />
            <ContainerText>
              <Borda></Borda>
              <TitleImage>Peanut Smoothie</TitleImage>
            </ContainerText>
          </ItemFood>
        </ContainerFood>
      </Section>
    </main1>
  );
}
