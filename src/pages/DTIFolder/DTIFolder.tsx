import React from "react";
 import { DTIFolder }from "../DTIFolder/DtiFolderStyle"; 
import { Container } from "../TestePage2/StyleTestePage2";
/* import { DTIHeader }from "../DTIFolder/DtiFolderStyle"; 
import { DTIfooter }from "../DTIFolder/DtiFolderStyle";  */


function Folder(){
  return (
            <>         
            <DTIFolder> 
            <header>  
                <img src="https://www.dtidigital.com.br/wp-content/uploads/2019/12/logo-dti-preta.png" alt="Teste Imagem Page2"/>
                <p>Vitor Moreira | Folder DTI Desenvolve ©</p>
                
                         
                </header>
                <section>
            
                <img src="https://media-exp3.licdn.com/dms/image/C4E16AQF-bei1CGHZqw/profile-displaybackgroundimage-shrink_350_1400/0/1567723450681?e=1629331200&v=beta&t=LvJ7pIeYL-m7cCTImYSouhk-2PpDLBihjTreIG8iJMw" alt=""/>
              
              </section>                               
      
              <form action ="">    
                                
                <img src="https://www.dtidigital.com.br/wp-content/uploads/2021/03/incrivel-rede.svg" alt="Teste Imagem Page2"/>
                          <aside>

                            <div>
                            <a href="https://www.linkedin.com/company/dtidigital/?originalSubdomain=br" target="_blank"><input type="button" value="LinkedIn!"></input></a>           
                            <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="Teste Imagem Page2"/>
                            </div>             
                             <div>
                             <a href="https://www.instagram.com/dtidigital/?hl=pt-br" target="_blank"><input type="button" value="Instagram!"></input></a>           
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Teste Imagem Page2"/>
                            </div>              <div>
                            <a href="https://open.spotify.com/show/2HyjQl5KLIAIPYR8qP5IXr" target="_blank"><input type="button" value="Podcast!"></input></a>           
                            <img src="https://i.scdn.co/image/0de56bfd913792fc377cee9b66e38eb65e457dc0" alt="Teste Imagem Page2"/>
                            </div>
                            </aside>
                </form>  
                <section>
                  <p>Desenvolvido para aprendizado HTML, Botões redirecionam para respectivas páginas da empresa DTI. </p>
                  </section>
                  <section>
                               <p>                <a href="https://www.instagram.com/dtidigital/?hl=pt-br" target="_blank">Visit Instagram!</a>
                                                     <a href="https://www.linkedin.com/company/dtidigital/?originalSubdomain=br"target="_blank">Visit Linkedin!</a>
                                                     <a href="https://open.spotify.com/show/2HyjQl5KLIAIPYR8qP5IXr"target="_blank">Visit Os Agilistas!</a>
                                </p>
                </section>
                <footer>
                  <p> ©Leaning React HTML Vitor DTI Desenvolve </p>
                  <p> ©2021 </p>    
                  
                </footer>
            </ DTIFolder> 
          
          </>
                
  )
}

export default Folder;