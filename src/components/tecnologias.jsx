import styled from "styled-components";
import { FaReact, FaNodeJs, FaDatabase, FaGithub } from "react-icons/fa";
import { SiStyledcomponents, SiMongodb, SiPostgresql, SiJavascript, SiTypescript } from "react-icons/si";

const Container = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 20px;

  @media (max-width: 432px){
      max-width: 600px;
      margin: 20px;
  }

  @media (max-width: 394px){
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 10px;
  }
 
`;

const Titulo = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

const Lista = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Item = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  width: 140px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);

  svg {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: #4e4e4e;
  }

  p {
    font-weight: 600;
    font-size: 1rem;
  }

`;

export default function Tecnologias() {
  const tecnologias = [
    { nome: "React JS", icone: <FaReact /> },
    { nome: "Node.js", icone: <FaNodeJs /> },
    { nome: "Styled Components", icone: <SiStyledcomponents /> },
    { nome: "JavaScript", icone: <SiJavascript /> },
    {nome:"TypeScript", icone: <SiTypescript/>},
    { nome: "MongoDB", icone: <SiMongodb /> },
    { nome: "PostgreSQL", icone: <SiPostgresql /> },
    { nome: "Prisma ORM", icone: <FaDatabase /> },
    { nome: "GitHub", icone: <FaGithub /> }

  ];

  return (
    <Container>
      <Titulo>Tecnologias que Utilizo</Titulo>
      <Lista>
        {tecnologias.map((tec, index) => (
          <Item key={index}>
            {tec.icone}
            <p>{tec.nome}</p>
          </Item>
        ))}
      </Lista>
    </Container>
  );
}
