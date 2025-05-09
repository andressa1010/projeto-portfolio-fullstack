// src/components/Sobre.jsx
import styled from "styled-components";

const SobreContainer = styled.section`
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
`;

const Titulo = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

const Texto = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

export default function Sobre() {
  return (
    <SobreContainer>
      <Titulo>Sobre Mim</Titulo>
      <Texto>
        Sou desenvolvedora Full Stack, formada pela Dev Quest e atualmente
        finalizando meu segundo curso na área pelo Dev Club, sempre em busca de
        aprimorar minhas habilidades e acompanhar as evoluções do mercado de
        tecnologia. Tenho experiência com JavaScript e TypeScript, desenvolvendo
        aplicações robustas e modernas com React.js, utilizando bibliotecas como
        Axios para consumo de APIs e Styled Components para estilização com foco
        em performance e escalabilidade. No Back-End, trabalho com Node.js,
        explorando frameworks como Express e Fastify, e aplicando boas práticas
        com o Prisma ORM. Também possuo domínio em bancos de dados relacionais e
        não relacionais, como PostgreSQL e MongoDB, garantindo uma estrutura de
        dados eficiente e segura para os projetos. Sou apaixonada por
        tecnologia, comprometida com a qualidade do código e com a entrega de
        soluções que realmente fazem a diferença. Estou pronta para contribuir
        em equipes que valorizem inovação, aprendizado contínuo e
        desenvolvimento ágil.
      </Texto>
    </SobreContainer>
  );
}
