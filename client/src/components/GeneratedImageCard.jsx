import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
    padding: 16px;
    border: 2px dashed ${({ theme }) => theme.yellow};
    color: ${({ theme }) => theme.text};
    border-radius: 20px;
`;

const Image = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 24px;
    background: ${({ src, theme }) =>
        src ? `url(${src})` : theme.black};
    background-size: cover;
    background-position: center;
`;

const GeneratedImageCard = ({ src, loading }) => {
    return (
        <Container>
            {loading ? (
                <>
                    <CircularProgress
                        style={{ color: "inherit", width: "24px", height: "24px" }}
                    />
                    Generating Your Image...
                </>
            ) : src ? (
                <Image src={src} />
            ) : (
                <>Write a prompt to generate image</>
            )}
        </Container>
    );
};

export default GeneratedImageCard;