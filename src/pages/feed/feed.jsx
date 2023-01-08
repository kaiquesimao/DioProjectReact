import Card from "../../components/card/card.jsx";
import { Header } from "../../components/header/header.jsx";
import UserInfo from "../../components/userInfo/userInfo.jsx";

import { Column, Container, Title, TitleHighlight } from "./styles.js";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># Top 5 DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={90}
            nome="Kaique Simão"
            image="https://avatars.githubusercontent.com/u/66140734?v=4"
          />
          <UserInfo
            percentual={70}
            nome="Thiago José"
            image="https://avatars.githubusercontent.com/u/12818093?v=4"
          />
          <UserInfo
            percentual={50}
            nome="Francismar"
            image="https://avatars.githubusercontent.com/u/79348772?v=4"
          />
          <UserInfo
            percentual={30}
            nome="Wellington Garcia"
            image="https://avatars.githubusercontent.com/u/42919942?v=4"
          />
          <UserInfo
            percentual={15}
            nome="Lucas Duarte"
            image="https://avatars.githubusercontent.com/u/80356531?v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export default Feed;
