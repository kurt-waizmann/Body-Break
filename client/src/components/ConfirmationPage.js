import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";



const ConfirmationPage = () => {
    const [confirmation, setConfirmation] = useState(null);

    // useEffect(() => {
    //     fetch(`/api/order/details`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setConfirmation(data.data)
    //     })
    // },[])

    return (
        <>
        <Wrapper>
            <Header />
            <InnerWrap>
                <Summary>
                    <Title>Thank your for your purchase!</Title>
                    <div>Confimation Number: "confirmation" variable goes here </div>
                </Summary>
            </InnerWrap>
        </Wrapper>
        </>
    )
}

export default ConfirmationPage;


const Wrapper = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    background-color: #1c1b1b;
    color: white;
    height: 100%;
`;

const InnerWrap = styled.div`
    height: 87%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Summary = styled.div`
    width: 50%;
    border-radius: 3%;
    background-color: #313131;
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
`
const Title = styled.div`
    font-size: 30px;
`

const Button = styled.button`
    color: #04d9ff;
    height: 40px;
    width: 150px;
    border: 1px solid;
    border-color: #04d9ff;
    background-color: black;
    border-radius: 5px;
    :before {
    pointer-events: none;
    content: "";
    position: absolute;
    background: #04d9ff;
    top: 15%;
    left: 72%;
    right: 0;
    height: 20px;
    width: 30px;
    transform: perspective(1em) rotateX(40deg) scale(0.5, 0.6);
    filter: blur(1em);
    }
    :hover {
    cursor: pointer;
    color: black;
    background-color: #04d9ff;
    transition-timing-function: ease-in-out;
    transition-duration: 400ms;
    }

`