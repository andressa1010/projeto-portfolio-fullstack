// src/components/Header.jsx
import styled from 'styled-components';
import imgAndressa from "../assets/foto-andressa.jpg"

const HeaderContainer = styled.header`
  text-align: center;
  padding: 40px 20px;
  
`;

const FotoPerfil = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Titulo = styled.h1`
  font-size: 2.2rem;
  color: #222;
`;

const Subtitulo = styled.h2`
  font-size: 1.2rem;
  color: #777;
  margin-top: 8px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <FotoPerfil src={imgAndressa} alt="Foto de perfil" />
      <Titulo>Desenvolvedora Full Stack</Titulo>
      <Subtitulo>Transformando ideias em soluções digitais</Subtitulo>
    </HeaderContainer>
  );
}
