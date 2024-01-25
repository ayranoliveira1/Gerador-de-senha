import { useState } from "react";
import "./App.css";

function App() {
   const [nome, setNome] = useState("");
   const [msg, setMsg] = useState("");

   const validandoForm = () => {
      if (nome === "") {
         setMsg("Preencha o campo");
         return false;
      } else {
         setMsg(gerarSenha(nome));
      }
   };

   const gerarSenha = (comprimento) => {
      let caracteres =
         "ABCDEFGHIJKLMNOPQRSTUVWXYZÇabcdefghijklmnopqrstuvwxyzç123456789!@#$%&*(){}[]/.,|;:";
      let senha = "";

      for (let i = 0; i < comprimento; i++) {
         let randomIndex = Math.floor(Math.random() * caracteres.length);
         senha += caracteres[randomIndex];
      }
      return senha;
   };

   return (
      <>
         <div className="app">
            <div className="container">
               <h1>Gerador de Senhas</h1>
               <div className="senha">
                  <label htmlFor="senha">Numero de caracteres:</label>
                  <input
                     value={nome}
                     onChange={(e) => {
                        setNome(e.target.value);
                     }}
                     type="text"
                     name="senha"
                     id="senha"
                  />
               </div>
               <div className="button">
                  <input
                     onClick={validandoForm}
                     id="button"
                     type="button"
                     value="Gerar"
                  />
               </div>

               <div className="msg">{msg}</div>
            </div>
         </div>
      </>
   );
}

export default App;
