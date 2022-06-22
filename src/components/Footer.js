import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  background-color: #f2f4f1;
  display: flex;
  padding: 5rem;
`;

const ImgFooter = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 2.5rem;
    margin-left: 1rem;

    :hover {
      cursor: pointer;
    }
  }
`;

const ListFooter = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  li {
    margin-right: 2rem;

    :hover {
      cursor: pointer;
    }
  }
`;

const P = styled.p`
  background-color: #446061;
  font-size: 0.8rem;
  color: white;
  padding: 1.5rem;
  text-align: center;
`;

export default function Header() {
  return (
    <>
      <Footer>
        <ImgFooter>
          <img
            src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=be118639-10a8-4930-a611-631b7ea07a0e&api_key=CometServer1&access_token=1655977122_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_975135388a100a85322514d4d50269953e0bb621"
            alt="Redes Sociais"
          />
          <img
            src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=a2797177-e28c-4b17-8141-8689e233524e&api_key=CometServer1&access_token=1655977122_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_975135388a100a85322514d4d50269953e0bb621"
            alt="Redes Sociais"
          />
          <img
            src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=f3e5e452-9a6f-47dd-8e06-22152aa125ef&api_key=CometServer1&access_token=1655977122_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_975135388a100a85322514d4d50269953e0bb621"
            alt="Redes Sociais"
          />
          <img
            src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=d5ec94b2-d459-45cb-85d1-6df6740d6b87&api_key=CometServer1&access_token=1655977122_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_975135388a100a85322514d4d50269953e0bb621"
            alt="Redes Sociais"
          />
        </ImgFooter>
        <ListFooter>
          <li>ABOUT</li>
          <li>RECIPES</li>
          <p>SUBSCRIBE</p>
        </ListFooter>
      </Footer>
      <P>
        Layout produzido por Vai na Web para fins exclusivamente educacionais.
        Referência:
        https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/
      </P>
    </>
  );
}
