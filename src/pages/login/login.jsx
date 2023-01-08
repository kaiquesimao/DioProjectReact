import {Button} from "../../components/button/button.jsx";
import {Header} from "../../components/header/header.jsx";
import { Input } from "../../components/input/input.jsx";
import {MdEmail, MdLock} from "react-icons/md";

import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles.js";
import { Link } from "react-router-dom";

const Login = () => {

    return (
        <>
            <Header autenticado={false}/>

        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>

            <Column>
            <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                <form>
                <Input placeholder="E-mail" leftIcon={<MdEmail />}/>
                <Input placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                <Link to="/feed">
                <Button title="Entrar" variant="secondary" type="button"/>
                </Link>
                </form>
                <Row>
                    <EsqueciText>
                        Esqueci minha senha
                    </EsqueciText>
                    <CriarText>
                        Criar Conta
                    </CriarText>
                </Row>
            </Wrapper>
            </Column>
        </Container>
        </>
    );
}

export default Login;