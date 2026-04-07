import React from "react";
import styled from "styled-components";

const Form = styled.div``;
const Top= styled.div``;
const Title= styled.div``;
const Desc = styled.div``;
const Body = styled.div``;
const Action = styled.div``;

const GenerateImageForm = () => {
    return (
        <Form>
            <Top>
                <Title>Generate Image with prompt</Title>
                <Desc>
                    write your prompt according to the image you want to generate
                 </Desc>
            </Top>
            <Body>Body</Body>
            <Action>Action</Action>
        </Form>
    )
}

export default GenerateImageForm;     