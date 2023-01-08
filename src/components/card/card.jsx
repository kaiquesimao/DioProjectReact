import React from "react";
import { CardContainer, Content, HasInfo, ImgBackground, PostInfo, UserImg, UserInfo } from "./styles";

import { FiThumbsUp } from "react-icons/fi";

const Card = () => {
return (

    <CardContainer>
        <ImgBackground src="https://mentorama.com.br/blog/wp-content/uploads/2022/06/capa-blog-coding-iniciante.jpg"/>
        <Content>
            <UserInfo>
                <UserImg src="https://avatars.githubusercontent.com/u/66140734?v=4"/>
                <div>
                    <h4>Kaique Simão</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para o curso de ReactJS da Digital Innovation One</h4>
                <p>Projeto feito no BootCamp OrangeTech do Banco Inter... <strong>Saiba mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
        
    </CardContainer>
);
}

export default Card