import React from"react";
import GlobalStyle from "./Styles/global"
import index from "./pages/SignIn/index" 

import { Content } from "../src/pages/SignIn/Style"
import SignIn from "./pages/SignIn/index";
import TestePage2 from "./pages/TestePage2/indexTestePage2";


function App(){
  return (
            <>            
              <GlobalStyle />  
                </>
                
  )
}

/* function App(){
  var  Menu = 1;

  switch(Menu){
  case 1    {
                    return ({SignIn()})
                  }
  case 2      {
                    return ({TestePage2()})
                  }
  default 

} */
export default App;


