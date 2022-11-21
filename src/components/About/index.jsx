import styled from "styled-components"
export default function About(){
    return(
        <div>
             <Sobre>
                <h2>Seja Bem Vindo</h2>
                <p>Me chamo Joelson, curso segundo ano de Análise e desenvolvimento de sistemas com foco
                em Front-End. <br/>Principais linguagens: React,React-Native,além claro do nosso querido<br/>Html/Css/JS.<br/>
                Dúvidas ou sugestões meus links para contato ao Lado.</p>
            </Sobre>
        </div>
    )
}
const Sobre = styled.div`
    width: 800px;
    height: 500px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    font-size: 25px;
    background: #0d0d0d;
    transition: 2s ease;
    h2{
        font-size: 65px;
        font-weight: bold;
        color: #FFF;

    }
    p{
        color: #FFF;
        margin-top: 50px;
        font-size: 25px;
        font-weight: bold;
    }

    ::after, ::before{
        content: '';
        position: absolute;
        z-index: -1;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        background: linear-gradient(45deg, #FFFF00, #00FF00, #0099FF,#001aff,
            #a200ff, #FF0055, #FF0000 ,#FFFF00, #00FF00, #0099FF);
        background-size: 300%;
        border-radius: 8px;
        animation: animaBorda 8s linear infinite;
    }

    @keyframes animaBorda{
        0%{
            background-position: 0%;
        }
        100%{
            background-position: 300%;
        }
    }

    ::after{
        filter: blur(5px);
    }

    @media (max-width:1200px){
        width: 400px;
    }
    @media (max-width:660px) {
        width: 0;
        background: transparent;
        ::after,::before{
            background: transparent;
        }
        h2{
            font-size: 0;
            
        }
        p{
            font-size: 0;
        }
    }
    
`
const Teste = styled.div`
    background-color: red;
    width: 400px;
    height: 400px;
`