import { Button, Grid, styled, Typography } from "@mui/material";
import React from "react";
import logoImg from "../assets/YTLOGO.png";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoNameWrap>
        <img src={logoImg} alt="logo" height={65} width={65} />
        <Typography sx={{ color: "red", fontWeight: 600 }}>
          YoutubeAnalyser
        </Typography>
      </LogoNameWrap>

      <IconWrap>
        <LightModeIcon sx={{ color: "grey", height: 25, width: 25 }} />
        <MenuIcon sx={{ color: "red", height: 25, width: 25 }} />
      </IconWrap>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: "black",
  height: "5rem",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  textAlign: "center",
  padding: "0.75rem",
  justifyContent: "space-between",
}));

const LogoNameWrap = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
}));

const IconWrap = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: 8,
}));
