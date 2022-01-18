import React from 'react'
import styled from 'styled-components'
import Woman from '../img/woman.png'
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px;
`;

const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    font-size: 60px;
    width: 60%;
`;

const Description = styled.p`
    width: 60%;
    font-size: 20px;
    margin-top: 20px;
`;

const Information = styled.div`
    margin-top: 50px;
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button`
    padding: 15px;
    background-color: darkblue;
    color: white;
    border-radius: 10px;
    font-weight: 700;
    border: none;
    letter-spacing: 1.5px;
    cursor: pointer;
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;

const Phone = styled.span`
    color: #f0667d;
    font-weight: 700;
`;

const ContactText = styled.span`
    color: gray;
    margin-top: 5px;
`;

const Right = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-item: center;
`;

const Image = styled.img`
    width: 100%;

`;

const Intro = () => {
    return (
        <Container>
            <Left>
                <Title>Adventures in creative age</Title>
                <Description>
                    We believe that designing products and services in close partnership
                    with our clients is the only way to have a real impact on their business.
                </Description>
                <Information>
                    <Button>Start A PROJECT</Button>
                    <Contact>
                        <Phone>Call Us (45) 50 27 38 16</Phone>
                        <ContactText>For any question or concern</ContactText>
                    </Contact>
                </Information>
            </Left>
            <Right><Image src={Woman}/></Right>
            <AnimatedShapes />
        </Container>
    )
}

export default Intro
