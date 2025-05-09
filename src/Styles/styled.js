import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .projeto{
        margin: 10px;
        padding: 10px;
        width: 400px;
        text-align: center;
    }

    img{
        max-width: 100%;
        height: auto;
        border-radius: 40px;
    }

`

export const ProjetosContainer = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 20px;
`;

export  const Titulo = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

export const ListaProjetos = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;

export  const Projeto = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  width: 400px;
`;

export  const Imagem = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

 export const NomeProjeto = styled.h3`
  margin-top: 15px;
  font-size: 1.4rem;
`;

export  const Descricao = styled.p`
  margin: 10px 0;
`;

  export const LinkProjeto = styled.a`
  display: inline-block;
  text-decoration: none;
  margin-top: 10px;
  background-color:#e4e4e4;
  padding: 10px;
  color: #007bff;
  font-weight: bold;
  border-radius: 20px


`;