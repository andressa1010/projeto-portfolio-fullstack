import React, { useEffect, useState } from "react";
import api from "../Services/api";
import { Descricao, Imagem, LinkProjeto, ListaProjetos, NomeProjeto, Projeto, ProjetosContainer, Titulo } from "../Styles/styled";
import Header from "../components/header";
import Sobre from "../components/sobre";
import Tecnologias from "../components/tecnologias";
import Contato from "../components/contato";
import Projetos from "../components/projeto";

const Home = () => {
  /*const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    async function buscarProjetos() {
      const resposta = await api.get("/api/portfolio");
      setProjetos(resposta.data);
    }

    buscarProjetos();
  }, []);*/

  return (
    <>
    <Header/>
    <Sobre/>
    <Projetos/>
      
     <Tecnologias/>
     <Contato/>
     
    </>
  );
};

export default Home;
