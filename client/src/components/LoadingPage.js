import styled, {keyframes} from "styled-components";
import { FiLoader } from "react-icons/fi";

const LoadingPage = () => {
    return(
        <Wrapper>
            <StyledFiLoader/>    
        </Wrapper>
    )
}

export default LoadingPage;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1c1b1b;
    margin: 0px;
`

const wheelSpin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(180deg);
    }
`

const StyledFiLoader = styled(FiLoader)`
    font-size: 70px;
    color: #02a4d3;
    animation: ${wheelSpin} 800ms linear infinite;
`