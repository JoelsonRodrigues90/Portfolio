import * as FaIcon from 'react-icons/fa'
import styled from 'styled-components'
export default function Links(){
    return(
       <div>
            <Menu>
                <Botoes><a href="https://github.com/JoelsonRodrigues90" target="_blank"><FaIcon.FaGithub/></a></Botoes>
                <Botoes><a target="_blank" href="http://www.linkedin.com/in/joelson-rodrigues90/"><FaIcon.FaLinkedin/></a></Botoes>
                <Botoes><a href="https://api.whatsapp.com/send?phone=5541995512253&text=Opa%2Cno%20que%20posso%20ajudar%3F" target="_blank"><FaIcon.FaWhatsapp/></a></Botoes>
            </Menu>
       </div>
    )
}
const Menu = styled.div`
    width: 100px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    svg{
        width: 40px;
        height: 40px;
        color: #fff;
    }
    @media (max-width:660px){
        margin-left: 200px;
        z-index: -1;
    }
`
const Botoes = styled.div`
    position: relative;
    width: 100px;
    height: 60px;
    margin: 30px ;
    background: #0d0d0d;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    transition: 2s ease;
    ::after,::before{
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
    ::after{
        filter: blur(15px);
    }
`