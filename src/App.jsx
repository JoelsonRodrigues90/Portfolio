import About from "./components/About";
import Links from "./components/Links"
import Mural from "./components/Mural"
import styled from "styled-components";
export default function App(){
    return(
        <Tela>
            <Links/>
            <Right>
                <Mural/>
                <About/>
            </Right>

        </Tela>
    );
}
const Tela = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;

`

const Right = styled.div`
    width: 80%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`