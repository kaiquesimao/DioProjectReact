import Card from "../../components/card/card.jsx";
import { Header } from "../../components/header/header.jsx";
import UserInfo from "../../components/userInfo/userInfo.jsx";

import { Container, TextContent, Title, TitleHighlight } from "./styles.js";

const Feed = () => {
  return (
    <>
      <Header />
      <Container>
        <Card />
        <UserInfo percentual={50} nome="Kaique Simão" image="https://avatars.githubusercontent.com/u/66140734?v=4" />
      </Container>
    </>
  );
};

export default Feed;
