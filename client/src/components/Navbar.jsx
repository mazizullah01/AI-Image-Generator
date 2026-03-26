import React from "react";
import styled from "styled-components";
import Button from "./button"
import {AddRounded, ExploreRounded } from "@mui/icons-material"
import { useNavigate, useLocation } from "react-router-dom";


const Container = styled.div`
    height: 60px;
    background: ${({theme})=> theme.navbar};
    color: ${({theme})=> theme.text_primary};
    font-weight: bold;
    font-size: 22px;
    padding: 0px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);

    @media only screen and (max-width: 600px) {
        padding: 0px 16px;
    }
`;

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname.split("/");
    return (
        <Container>
            GenAI
            {path[1] === "post" ? (
            <Button
            onClick={() => navigate("/")}
            text = "Explore posts" 
            leftIcon={
              <ExploreRounded 
                style={{
                fontSize: "18px",
              }}
            />
          }
          type="secondary"
        />
      ) : (
            <Button
            onClick={() => navigate("/post")}
            text = "Create new post" 
            leftIcon={
              <AddRounded 
                style={{
                    fontSize: "18px",
              }}
            />
          } 
        />
        )}
        </Container>
    );
};

export default Navbar;