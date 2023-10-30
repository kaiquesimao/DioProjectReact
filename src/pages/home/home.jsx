import { Link } from "react-router-dom";
import { Button } from "../../components/button/button.jsx";
import { Header } from "../../components/header/header.jsx";

import { Container, TextContent, Title, TitleHighlight } from "./styles.js";

const Home = () => {
  return (
    <>
      <Header autenticado={false} />

      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente
              <br />
            </TitleHighlight>
            O seu futuro global agora!
          </Title>

          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo na
            comunidade com os melhores experts.
          </TextContent>

          <Link to="/login">
            <Button
              title="Começar agora"
              variant="secondary"
              type="button"
            ></Button>
          </Link>
        </div>

        <div>
          <img
            src="../../assets/img/home/banner-dio.png"
            alt="Imagem principal"
          />
        </div>
      </Container>
    </>
  );
};

export default Home;
