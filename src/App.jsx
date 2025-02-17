import logo from "./assets/logo.png";
import "./App.css";
import { IconSocial } from "./components/IconSocial";
import { useState, useEffect } from "react";

function App() {
  const [acessos, setAcessos] = useState(0);
  const [getAcesso,setGetAcesso] = useState()

  const url =  "https://back-link.onrender.com"
  function postContadorAcessos() {
      fetch(url + "/acessos", { method: "POST" })
        .then((res) => res.json())
        .then((data) => setAcessos(data.totalAcessos));
    return acessos
  }
function getAcessos(){
  fetch(url + "/acesso", { method: "GET" })
  .then((res) => res.json())
  .then((data) => setGetAcesso(data.totalAcessos));
return getAcesso
}


  useEffect(()=> {
    postContadorAcessos();
    getAcessos()
  },[])

  return (
    <>
    <p>Acesso: {getAcesso} </p>
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
