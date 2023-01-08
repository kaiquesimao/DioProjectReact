import Card from "../../components/card/card.jsx";
import { Header } from "../../components/header/header.jsx";

import { Container, TextContent, Title, TitleHighlight } from "./styles.js";

const Feed = () => {
  return (
    <>
      <Header />
      <Container>
        <Card />
      </Container>
    </>
  );
};

export default Feed;
