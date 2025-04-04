import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

import image2 from "../../assets/img/image2.png";
import logoGit from "../../assets/img/logogit.png";
import camadaUm from "../../assets/img/camada1.png";

import {
  Container,
  DivInput,
  DivRadialDois,
  DivRadialUm,
  DivElemento,
} from "../../styles/GlobalStyles";
import { Title } from "./styled";

export default function GetApiGit() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); // Estado para a mensagem de erro

  async function handleClick(e) {
    e.preventDefault();

    if (!username | (username === "")) {
      alert("Por favor, insira um nome de usuário");
      return;
    }

    setErrorMessage("");

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUserData(response.data);
      console.log("Nome:", response.data.name);
      console.log("Bio:", response.data.bio);
    } catch (error) {
      console.error("Erro ao buscar os dados do GitHub:", error);
      setUserData(null);
      if (error.response && error.response.status === 404) {
        setErrorMessage(
          "Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente."
        );
      } else {
        setErrorMessage(
          "Ocorreu um erro ao buscar os dados. Tente novamente mais tarde."
        );
      }
    }
  }

  return (
    <>
      <DivElemento>
        <img src={camadaUm} alt="Imagem Elemnto" />
      </DivElemento>
      <Container>
        <DivInput>
          <Title>
            <img src={logoGit} className="git-logo" alt="Imagem GitHub" />
            Perfil
            <img src={image2} className="git-texto" alt="Imagem GitHub" />
          </Title>
        </DivInput>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Digite um usuário do Github"
        />

        <button type="button" onClick={handleClick}>
          <FaSearch size={25} />
        </button>

        {userData && (
          <div className="div-resposta">
            <div className="resposta">
              <div className="image">
                {userData.avatar_url && (
                  <img src={userData.avatar_url} alt="Foto do perfil" />
                )}
              </div>
              <div className="div-texto">
                <h2>{userData.name}</h2>
                <p>{userData.bio}</p>
              </div>
            </div>
          </div>
        )}

        {errorMessage && (
          <div className="error-busca">
            <p>{errorMessage}</p>
          </div>
        )}
      </Container>
      <DivRadialUm />
      <DivRadialDois />
    </>
  );
}
