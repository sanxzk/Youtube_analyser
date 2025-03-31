import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks />
      <TextContainer>
        <Typography
          sx={{ color: "rgba(230, 230, 230, 0.81)", fontWeight: 600 }}
        >
          Save your precious time by using this website just to show everything
          collectively. @Sanjana Sharma &#x2764;
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
