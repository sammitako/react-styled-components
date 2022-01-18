import { React, useState } from 'react'
import styled from 'styled-components'
import How from '../img/how.png'
import MiniCard from './MiniCard';
import Play from '../img/play.png';

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    width: 50%;
    position: relative;
`;

const Image = styled.img`
    display: ${(props) => props.open && "none"};
    height: 100%;
    margin-left: 100px;  
`;

const Video = styled.video`
    display: ${(props) => !props.open && "none"};
    height: 300px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 100px;
    margin: auto;
`

const Right = styled.div`
    width: 50%;
    margin-right: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    paadding: 50px;
`;

const Title = styled.h1`

`;

const Description = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color: #555;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;

const Button = styled.button`
    width: 180px;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    padding: 15px;
    margin-top: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

const Icon = styled.img`
    width: 20px;
    margin-right: 10px;
`

const Service = () => {
    const [open, setOpen] = useState(false);
    return (
        <Container>
            <Left>
                <Image open={open} src={How}></Image>
                <Video 
                    open={open} 
                    autoplay 
                    loop
                    controls
                    src='https://www.youtube.com/watch?v=g7c0W-8rNmw'
                />
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple process to start</Title>
                    <Description>
                        We provide digital experience services to startups and small business
                        to looking for a partner of their digital media, design &
                        development, lead generation and communications requirements. We work with you,
                        not for you. Although we have a great resources.
                    </Description>
                    <CardContainer>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </CardContainer>
                    <Button onClick={() => setOpen(true)}>
                        <Icon src={Play} />
                        How it works
                    </Button>
                </Wrapper>
            </Right>
        </Container>
    )
}

export default Service
