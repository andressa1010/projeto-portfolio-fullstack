import styled from "styled-components";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Container = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
`;

const Titulo = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const Botao = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #222;
  color: #fff;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;

  svg {
    font-size: 1.4rem;
  }

  &:hover {
    background-color: #444;
  }
`;

export default function Contato() {
  return (
    <Container>
      <Titulo>Entre em Contato</Titulo>
      <Links>
        <Botao
         href="https://wa.me/5511986414262" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp /> WhatsApp
        </Botao>
        <Botao href="https://www.linkedin.com/in/andressa-nunes-silva/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </Botao>
      </Links>
    </Container>
  );
}
