import styled from "styled-components"

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    margin: 1rem;
`

const Links = styled.div`
    display: flex;
    justify-content: center;
    align-items: ceter;

    p{
        margin: 1rem;
        color: #AA9CBB;
        font-weight: bold;
        cursor: pointer;

        :hover{
           color: #5e5569;
        }
    }
`

const Buttoes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    button {
        height:2rem;
        width: 4rem;
        margin: 0.5rem;
        border-radius: 1rem;
        border: none;
        background-color: #3E70F1;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        transition: 0.1s;
        :hover{
            background-color: #19316d;
        }
    }
`

export default function Cabecalho() {
    return(
        <Main>
            <h1>Foodie</h1>
            <Links>
                <p>Home</p>
                <p>Store</p>
                <p>Services</p>
                <p>Contact us</p>
                <p>SOBRE</p>
            </Links>
            <Buttoes>
                <button>Login</button>
                <button>Sign Up</button>
            </Buttoes>
        </Main>
    )
}