import styled from "styled-components"

export const Container = styled.div`
        border: 2px solid red;
        border-radius: 0.4rem 0.4rem 0.4rem 0.4rem;   
        margin: 5px;          
        display: flex;
        flex-direction: column;
        place-content: center;
        width: 100%;
        max-width: 350px;
        border-radius: 10px;
        background: #412E22;
        
        h1, h2, h3, h4, h5, h6, strong{
                margin: 2px;
                font-weight: 200;
                color: #BBB
                }

        p{
                        margin: 2px;
                        font-weight: 100;
                        color: #AAA
                        
                        }
                                
        body{
                        border: 2px solid green;
                        border-radius: 0.4rem 0.rem 0.4rem 0.4rem;
                        width: 60%;
                        display: flex;
                        margin: 10PX;
                        padding:20PX;
                          box-sizing: border-box;
                         font-family: "arial", Roboto;
                         background: #999E12;
                         color: #FFF
                    
                      }                
                
        input, button{
                
                        border-radius: 0.4rem 0.rem 0.4rem 0.4rem;
                        width: 60%;
                        display: flex;
                        margin: 10PX;
                        padding:20PX;
                          box-sizing: border-box;
                         font-family: "arial", Roboto;
                         cursor: pointer;
                         background: #823E12;
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
  `