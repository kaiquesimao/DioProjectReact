import React from "react";
import { CardContainer, Content, HasInfo, ImgBackground, PostInfo, UserImg, UserInfo } from "./styles";

import { FiThumbsUp } from "react-icons/fi";

const Card = () => {
return (

    <CardContainer>
        <ImgBackground />
        <Content>
            <UserInfo>
                <UserImg />
                <div>
                    <h4>Kaique Simão</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para o curso de ReactJS da Digital Innovation One</h4>
                <p>Projeto feito no BootCamp OrangeTech do Banco Inter...<strong>Saiba mais</strong></p>
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