import { createGlobalStyle } from "styled-components"


export default createGlobalStyle`
*{
margin: 0;
padding:10px;
box-sizing: border-box;
border-radius: 0.4rem 0.rem 0.4rem 0.4rem;
outline: 0;
color: #FFF;
-webkit-font-smoothing: antialiased;
max-width: 400px;

            
}

body{
    margin: 1PX;
    padding:1PX;
    width:100%;
    box-sizing: border-box;
    
    }

 input, button{
    margin: 10PX;
    padding:20PX;
    box-sizing: border-box;
    font-family: "sans serif", Roboto;
    cursor: pointer;
    background: #478E12;
    color: #FFF
  
  }    

    img {    
        width: 90%;
        display: flex;
        margin: 10PX;
        padding:5px;
        background: #FFFFFF;
        color: #000     
        
  }
  
  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 100;
    color: #AAA
  
  }

  textarea{
    margin: 10px;
    padding: 10px;
    display: flex;
    border-radius: 0.8rem 0.8rem 0.8rem 0.8rem ;
  }

  label{
    margin: 10;
    padding:10px;
    box-sizing: border-box;
    border-radius: 0.9rem 0.9rem 0.9rem 0.9rem;  
    display: flex;
    width: 100%;
    background: #FFFFFF;
    color: #AAA
    
    
  }



  `