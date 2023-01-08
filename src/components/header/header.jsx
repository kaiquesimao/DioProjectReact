import React from "react";
import {BuscarInputContainer, Container, Input, Menu, MenuRight, Row, Wrapper} from "./styles.js";
import {Button} from "../button/button.jsx";

export const Header = () => {
    return(
        <Wrapper>
            <Container>
                <Row>
                    <img src="./src/assets/img/home/logo-dio.png" alt="logo"/>
                    <BuscarInputContainer>
                        <Input placeholder="Buscar..."/>
                    </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href="#">
                        Home
                    </MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                </Row>
            </Container>
        </Wrapper>
    )
}