import logo from "./assets/logo.png";
import "./App.css";
import { IconSocial } from "./components/IconSocial";
import { useState, useEffect } from "react";

function App() {
  function ContadorAcessos() {
    const [acessos, setAcessos] = useState(() => {
      // Obtém o valor do localStorage ao carregar a página
      return parseInt(localStorage.getItem("contador_acessos")) || 0;
    });

    useEffect(() => {
      // Incrementa o contador quando o componente monta
      const novoValor = acessos + 1;
      setAcessos(novoValor);
      localStorage.setItem("contador_acessos", novoValor);
    }, []); // Executa apenas na montagem do componente

    return <p>Quantidade de acessos: {acessos}</p>;
  }

  return (
    <>
      {ContadorAcessos()}
      <div>
        <a href="https://www.youtube.com/@henryDrum" target="_blank">
          <img src={logo} className="logo" alt="Vite logo" />
        </a>
      </div>

      <div className="container-bubble">
        <div className="bubble">
          <IconSocial
            href={"https://www.instagram.com/nikolas.pguedes/"}
            src="https://img.icons8.com/?size=100&id=oUsYJj5SHs1L&format=png&color=000000"
          />
        </div>
        <div className="bubble">
          <IconSocial
            href={"https://www.facebook.com/nikolas.prudente.9"}
            src="https://img.icons8.com/?size=100&id=2KWNkhfNwXPH&format=png&color=000000"
          />
        </div>
        <div className="bubble">
          <IconSocial
            href={
              "https://www.linkedin.com/in/nikolas-prudente-guedes-97b14612b/"
            }
            src="https://img.icons8.com/?size=100&id=CWnQDCef7qg0&format=png&color=000000"
          />
        </div>
        <div className="bubble">
          <IconSocial
            href={"https://github.com/nikhenry2212"}
            src="https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000"
          />
        </div>
        <div className="bubble">
          <IconSocial
            href={"https://www.youtube.com/@henryDrum"}
            src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000"
          />
        </div>
      </div>
      <h2>Assiste meu Príncipe 🥁</h2>
      <div>
        <iframe
          width="360"
          height="215"
          src="https://www.youtube.com/embed/3jMva_qJpBI?si=FiwA91wa4L0kdL8q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}

export default App;
