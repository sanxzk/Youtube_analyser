import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Grid, styled } from "@mui/material";

const SocialLinks = () => {
  return (
    <SocialLinksCont>
      <a
        href="https://www.facebook.com/profile.php?id=100061879961906"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon
          sx={{ fontSize: 20, color: "white", cursor: "pointer" }}
        />
      </a>
      <a
        href="https://www.instagram.com/sanjana.sharma_1411/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon
          sx={{ fontSize: 20, color: "white", cursor: "pointer" }}
        />
      </a>
      <a
        href="https://x.com/Sanjana0614"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon sx={{ fontSize: 20, color: "white", cursor: "pointer" }} />
      </a>
      <a
        href="https://wa.me/7439881275"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon
          sx={{ fontSize: 20, color: "white", cursor: "pointer" }}
        />
      </a>
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GoogleIcon sx={{ fontSize: 20, color: "white", cursor: "pointer" }} />
      </a>
      <a
        href="https://github.com/sanxzk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon sx={{ fontSize: 20, color: "white", cursor: "pointer" }} />
      </a>
      <a
        href="https://www.linkedin.com/in/sanjanasharma14/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon
          sx={{ fontSize: 20, color: "white", cursor: "pointer" }}
        />
      </a>
    </SocialLinksCont>
  );
};

export default SocialLinks;

const SocialLinksCont = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  padding: "5px",
}));
