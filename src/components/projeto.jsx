import React from "react";
import {
  Descricao,
  Imagem,
  LinkProjeto,
  ListaProjetos,
  NomeProjeto,
  Projeto,
  ProjetosContainer,
  Titulo,
} from "../Styles/styled";

const meusProjetos = [
  {
    id: 1,
    nome: "Loja Bolos e doces",
    imagem: "/projeto-bolos-doces.jpg",
    descricao:
      "Aplicação full stack desenvolvida por mim do zero, com foco na experiência de compra de doces artesanais. Criei toda a API com Node.js, Express, Prisma ORM e MongoDB, e integrei com um front-end em React JS utilizando React Router DOM, Axios e styled-components. A loja possui catálogo de produtos, carrinho de compras, gerenciamento de pedidos e layout responsivo.",
    link: "https://projeto-bolos-doces.vercel.app/",
  },
  {
    id: 2,
    nome: "Agendamentos de Salão de Beleza",
    imagem: "/projeto-bella.jpg",
    descricao:
      "Sistema completo de agendamento online criado por mim, onde implementei tanto o front-end quanto o back-end. A API foi desenvolvida com Node.js, Express e MongoDB usando Prisma ORM. No front, utilizei React JS com React Router DOM, Axios e styled-components. O sistema permite agendar horários, visualizar serviços, cadastrar clientes e tudo com uma interface moderna, responsiva e amigável.",
    link: "https://agendamentossalao.netlify.app/",
  },
  {
    id: 3,
    nome: "Encomendas de Páscoa",
    imagem: "/projeto-pascoa.jpg",
    descricao:
      "Projeto criado por mim para facilitar a gestão de encomendas de ovos de páscoa. Desenvolvi uma API com Node.js, Express, Prisma ORM e MongoDB, e construí o front-end com React JS, React Router DOM e styled-components. O sistema permite visualizar ovos de páscoa, realizar pedidos em uma interface intuitiva, pensada para usuários finais",
    link: "https://encomendaspascoa.netlify.app/",
  },
  {
    id: 4,
    nome: "Agendamnetos Borcelle",
    imagem: "/projeto-borcelle.jpg",
    descricao:
      "Sistema de agendamentos criado para o salão de beleza Borcelle. Fui responsável por toda a estrutura da aplicação, desde o back-end até o front-end. A API foi desenvolvida com Node.js, Express, Prisma ORM e banco de dados MongoDB. No front-end, utilizei React JS, React Router DOM, Axios e styled-components. O sistema permite agendamentos com data e hora, cadastro de clientes e serviços, tudo com uma interface responsiva e moderna, voltada para facilitar o dia a dia do salão.",
    link: "https://agendamentosandressa.netlify.app/",
  },
  {
    id: 5,
    nome: "Studio de Unhas",
    imagem: "/projeto-unhas.jpg",
    descricao:
      "Projeto desenvolvido especialmente para um studio de unhas, com foco em apresentar os serviços e facilitar o contato com os clientes. Utilizei React JS, React Router DOM e styled-components para criar um layout moderno e responsivo. Integrei localização via Google Maps e botão direto para atendimento via WhatsApp, tornando o agendamento prático e acessível. Projeto 100% desenvolvido por mim com foco em experiência do usuário e conversão.",
    link: "https://andressaunhasgel.netlify.app/",
  },
  {
    id: 6,
    nome: "Studio Grace Benini",
    imagem: "/projeto-grace.jpg",
    descricao:
      "Site institucional desenvolvido para minha cabeleireira, com design leve, elegante e funcional. Utilizei React JS com React Router DOM e styled-components para garantir uma experiência fluida e responsiva. O projeto conta com integração ao WhatsApp para agendamentos, mapa de localização e apresentação dos serviços. Ideal para negócios locais que buscam presença digital.",
    link: "https://studiograce.netlify.app/",
  },
];

const Projetos = () => {
  return (
    <>
      <ProjetosContainer>
        <Titulo>Meus Projetos</Titulo>
        <ListaProjetos>
        {meusProjetos.map((projeto) => (
          <Projeto key={projeto.id}>
            <NomeProjeto> {projeto.nome} </NomeProjeto>
            <Imagem src={projeto.imagem} alt={projeto.nome}></Imagem>
            <Descricao> {projeto.descricao} </Descricao>
            <LinkProjeto
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Projeto
            </LinkProjeto>
          </Projeto>
        ))}
        </ListaProjetos>
      </ProjetosContainer>
    </>
  );
};

export default Projetos;
