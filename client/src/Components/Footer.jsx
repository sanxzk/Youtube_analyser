import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks />
      <TextContainer>
        <Typography sx={{ color: "white", fontWeight: 600 }}>
          Made With Passion &#128293; 
          by <a
            href="https://www.linkedin.com/in/sanjanasharma14/"
            style={{ color: "white" }}
          >
            SANJANA SHARMA
          </a> Copyright © YouTube Analyser 2025
        </Typography>
      </TextContainer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled(Grid)(({ theme }) => ({
  height: "20vh",
  backgroundColor: "rgb(19, 3, 3)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  textAlign: "center",
}));

const TextContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: "rgb(147, 0, 0)",
  width: "100%",
  padding: "0.5rem",
}));
