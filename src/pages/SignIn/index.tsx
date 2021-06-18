import React from "react";
import { Content } from "./Style";
/* import { Background } from "./Style"; */
function SignIn(){
  return (
        <>
{/*         //Porque aqui tive que chamar abrindo e fechando o <content> e no 
        //APP tsx eu podia fazer somente com <GlobalStyle /> ? */}
            <Content>
        <h1>Teste Page SignIn  H1</h1>
        <p>Digite um texto na caixa abaixo e pressione o botão</p>
        <textarea name="" id="PerguntaFormulario" placeholder="Teste área de texto Page SignIn1"></textarea>
        <input type="button" value="Teste de botão Page SignIn!"></input>
        <img src="https://www.dtidigital.com.br/wp-content/uploads/2018/01/bloggif_5a5f5ebe6d4ed.jpeg" alt="Teste ImagemSignIN"/>
            </Content>
        </>
  )
}
export default SignIn;
