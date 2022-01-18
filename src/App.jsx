import styled from "styled-components";
import { css } from "styled-components";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Service from "./components/Service";

const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    position: relative;
`;

const Shape = css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
`;

const IntroShape = styled.div`
    ${Shape}
    clip-path: polygon(45% 0, 100% 0, 100% 100%, 55% 100%);
    background-color: pink;
`;

const FeatureShape = styled.div`
    ${Shape}
    clip-path: polygon(0 0, 55% 0, 35% 100%, 0 100%);
    background-color: skyblue;
`;

const ServiceShape = styled.div`
    ${Shape}
    clip-path: polygon(0 0, 35% 0, 65% 100%, 0 100%);
    background-color: #f88497;
`;

const PriceShape = styled.div`
    ${Shape}
    clip-path: polygon(65% 0, 100% 0, 100% 100%, 35% 100%);
    background-color: crimson;
`;


const App = () => {
    return (
        <>
            <Container>
                <Navbar />
                <Intro />
                <IntroShape />
            </Container>
            <Container>
                <Feature />
                <FeatureShape />
            </Container>
            <Container>
                <Service />
                <ServiceShape />
            </Container>
            <Container>
                <Price />
                <PriceShape />
            </Container>
            <Container>
                <Contact />
            </Container>
            <Container>
                <Footer />
            </Container>
        </>
    )
}

export default App;