import Header from "../../components/Header";

import { HomeContent, MiddleContent, FooterContent } from "./styles";

function Home() {
  return (
    <HomeContent>
      <Header />
      <MiddleContent>
        <h3>Olá! Eu sou</h3>
        <h1>Bruno Passos</h1>
        <p>{`> Front-end Developer`}</p>
      </MiddleContent>
      <FooterContent>
        <h3>//veja meu perfil no GitHub:</h3>
        <p><span>const </span><span>gitHubLink</span> = <span>"https://github.com/brunopassos"</span></p>
      </FooterContent>
    </HomeContent>
  );
}

export default Home;
