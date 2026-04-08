import React from "react";
import styled from "styled-components";
import Button from "./button";
import TextInput from "./TextInput";
import { AutoAwesome, CreateRounded } from "@mui/icons-material";
const Form = styled.div`
    flex: 1;
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    gap: 9%;
    justify-content: center;
`;
const Top= styled.div`
    display: flex;
    flex-direction: column;
    gap:6px;
`;
const Title= styled.div`
    font-size: 28px;
    font-weight: 500;
    color: ${({ theme}) => theme.text_primary};
`;
const Desc = styled.div`
    font-size: 17px;
    font-weight: 400;
    color: ${({ theme}) => theme.text_secondary};
`;
const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme}) => theme.text_secondary};

`;
const Action = styled.div`
    flex: 1;
    display: flex;
    gap: 8px;

`;

const GenerateImageForm = () => {
    return (
        <Form>
            <Top>
                <Title>Generate Image with prompt</Title>
                <Desc>
                    write your prompt according to the image you want to generate
                 </Desc>
            </Top>
            <Body>
                <TextInput label="Author" placeholder="Enter your name.." name="name" />
                <TextInput label="Image Prompt" placeholder="Write the detail Prompt abput the image . . ."
                name="name"
                rows="8"
                textArea
                />
            </Body>
            <Action>
                <Button text="Generate Imaage" flex leftIcon={<AutoAwesome />}/>
                <Button text="Post Image" flex type="secondary" leftIcon={<CreateRounded />}/>

            </Action>
        </Form>
    )
}

export default GenerateImageForm;     