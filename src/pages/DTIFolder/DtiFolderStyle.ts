import styled from "styled-components"

export const DTIFolder = styled.div`

        border: 2px solid purple;
        
        border-radius: 0.4rem 0.4rem 0.4rem 0.4rem;   
        margin: 2px;     
        display: flex;
        flex-direction: column;
        place-content: center;
        border-radius: 10px;
        max-width: 400px;
        background-image: url("https://www.dtidigital.com.br/wp-content/uploads/2018/01/bloggif_5a5f5ebe6d4ed.jpeg");
        background-repeat: no-repeat; 
        background-size: contain;
        
        
        header{
          border-radius: 0.4rem 0.4rem 0.4rem 0.4rem;  
        weight: 10px;
        height: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-image: url("https://www.dtidigital.com.br/wp-content/uploads/2018/03/dti-fb.png");
        background-repeat: no-repeat; 
        background-size: cover; 
                          
                          p{
                            border-radius: 0.4rem 0.4rem 0.4rem 0.4rem; 
                            width:50%;
                            padding:2px;
                            font-weight: 20;
                            font-size: 6px;
                            display: flex;
                            align-items: center;
                            color: #FFF             
                                           
                            }
                            img {    
                              border-radius: 0.1rem 0.1rem 0.1rem 0.1rem;
                              width: 5%;
                              display: flex;                              
                              margin: 1px;
                              padding:1px;
                            }
                          
        }
        footer{
          border-radius: 0.4rem 0.4rem 0.4rem 0.4rem;  
        height: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        background-image: url("https://www.dtidigital.com.br/wp-content/uploads/2018/03/dti-fb.png");
        background-repeat: no-repeat; 
        background-size: cover;                   
        
                            img {    
                              border-radius: 0.4rem 0.4rem 0.4rem 0.4rem;   
                              width: 12%;
                              display: flex;
                              margin: 5PX;
                              padding:4px;
                              background: #FFFFFF;
                              color: #000 
                              
                            }
                            p{
                              margin: 1px;
                              font-weight: 40;
                              font-size: 6px;
                              color: #FFF
                              
                              }
        }
        
        h1, h2, h3, h4, h5, h6, strong{
                display: flex;
                justify-content: center;
                margin: 2px;
                font-weight: 200;
                color: #BBB
                }

        p{
                        margin: 2px;
                        font-weight: 100;
                        font-size: 12px;
                        color: #FFF
                        
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
                        height: 30px;
                        width: 90px;
                        display: flex;
                        justify-content: center;
                        margin: 10px;
                        padding: 10PX;
                          box-sizing: border-box;
                         font-family: "comic sans", Roboto;
                         cursor: pointer;
                         background: gray;
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

                  form{
                    padding: 1px;
                    margin: 1px;
                    display: flex;
                    justify-content: column;
                    
                                img {    
                                                border-radius: 0.2rem 0.2rem 0.2rem 0.2rem;
                                                width: 40%;
                                                display: flex;
                                                justify-content: center;
                                                margin: 0;
                                                padding:0;
                                        }
                                aside {
                                              border-radius: 0.4rem 0.rem 0.4rem 0.4rem;
                                              width:55%;
                                              margin: 1px;
                                              
                                                          div{  
                                                            border-radius: 0.4rem 0.rem 0.4rem 0.4rem;
                                                            background-color: purple;                                                          
                                                          display: flex;
                                                          margin:1px;
                                                          pading: 1px;
                                                          justify-content: space-between;
                                                          align-items: center;

                                                                    input, button{
                                                                      border: none;
                                                                      height: 20px;
                                                                      display: flex;
                                                                      justify-content: center;
                                                                      margin: 1px;
                                                                      padding: 0;
                                                                      box-sizing: border-box;
                                                                      font-family: "comic sans", Roboto;
                                                                      cursor: pointer;
                                                                      background: lightblue;
                                                                      color: purple;
                                                                                        
                                                                    }
                                                                    img {    
                                                                      border-radius: 0.1rem 0.1rem 0.1rem 0.1rem;
                                                                      height: 20px;
                                                                      width: 20px;                  
                                                                      margin: 0;
                                                                      padding:1px;
                                                                    }
                                                                  }
                                                                  }
                                        
                                                                    
                  }
                  section{                    
                    padding: 0px;
                    border-radius: 0.2rem 0.2rem 0.2rem 0.2rem;
                    margin: 1PX;
                                      img {    
                                        border-radius: 0.2rem 0.2rem 0.2rem 0.2rem;
                                        width: 100%;
                                        display: flex;      
                                        margin: 0;
                                        padding:0;
                                      }
                                      p{
                                        margin: 2px;
                                        font-weight: 50;
                                        font-size: 8px;
                                        color: purple;  
                                                      a{                    
                                                        margin: 1px;
                                                        justify-content:space-between;
                                                        color: purple;  
                                                      }                                      
                                        }
                                        

                  }

                
  `
  export const DTIheader = styled.div`
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

  header{
    border: 2px solid blue;
  border-radius: 0.4rem 0.4rem 0.4rem 0.4rem; 
  }

  `
  export const DTIfooter= styled.div`
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

  footer{
    border: 2px solid blue;
  border-radius: 0.4rem 0.4rem 0.4rem 0.4rem; 
  }
  `
  