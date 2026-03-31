import React from "react";
import styled from "styled-components"
import { LazyLoadImage } from "react-lazy-load-image-component"; 

const Card = styled.div`
    position: relative;
    display: flex;
    border-radius: 20px;
    box shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 60};
    cursor: pointer;
    transition: all 0.3 ease;
    &hover {
        box shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 80};
        scale: 1.05
    }
    &:nth-child(7n + 1) {
    grid-column: auto/span 2;
    grid-row: auto/span 2;
    }
`;


const HoverOverlay = styled.div`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-item: start;
    gap: 2px;
    backdrop-filter: blur(2px);
    background: rgba(0, 0, 0,0.5);
    color: ${({ theme }) => theme.white};
    transition: opacity 0.3s ease;

    ${Card}:hover & {
    opacity: 1;
    }
`;
const Prompt = styled.div``;
const Author = styled.div``;


const ImageCard = () => {
    return (
        <Card>
            <LazyLoadImage 
                width="100%"
                src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Dogs_love.jpg" />
            <HoverOverlay>
                <Prompt>Prompt</Prompt>
                <Author>Aziz</Author>
            </HoverOverlay>
        </Card>
    )
}

export default ImageCard;