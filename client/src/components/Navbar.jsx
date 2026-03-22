import React from "react";
import styled from "styled-components";
import Button from "./button"

const Container = styled.div``;

const Navbar = () => {
    return (
        <Container>GenAI
            <Button text = "Create new post" />
        </Container>
    )
}

export default Navbar;