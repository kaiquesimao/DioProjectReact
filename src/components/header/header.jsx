import React from "react";
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
} from "./styles.js";
import { Button } from "../button/button.jsx";
import { UserImg } from "../card/styles.js";
import { Link } from "react-router-dom";

export const Header = ({ autenticado }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src="./src/assets/img/home/logo-dio.png" alt="logo" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserImg src="https://avatars.githubusercontent.com/u/66140734?v=4" />
          ) : (
            <>
              <MenuRight><Link to="/">Home</Link></MenuRight>
              <Link to="/login"><Button title="Entrar" /></Link>
              <Link to="/login"><Button title="Cadastrar" /></Link>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};
