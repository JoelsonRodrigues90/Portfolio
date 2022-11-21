import styled from "styled-components"
export default function Mural(){
    return(
        <div>
             <Quadro>
                <h2>Developing the Future</h2>
            </Quadro>
        </div>
    )
}
const Quadro = styled.div`
    position: relative;
    width: 700px;
    height: 120px;
    color: #FFF;  
    top: -30px;
    font-size: 20px;
    font-weight: 100px;
    background: #0d0d0d;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    transition:  2s;

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

    @media (max-width: 1200px) {
        width: 450px;
    }
    @media  (max-width: 660px){
        left: -240px;
    }
`
