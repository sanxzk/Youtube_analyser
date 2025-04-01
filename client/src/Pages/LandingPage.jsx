import React from "react";
import { Grid, styled, Typography } from "@mui/material";
import SearchBar from "../Components/SearchBar";
import VideoDataCont from "../Components/VideoDataCont";
import { useSelector } from "react-redux";

const LandingPage = () => {

  const YoutubeData = useSelector((state)=>state.YoutubeVideoSlice.currVideo);

  return (
    <Grid sx={{ minHeight: "69vh" }}>
      <ImageGrid>
        <TypographyGrid>
          <Typography
            variant="h3"
            sx={{ color: "rgba(247, 112, 112, 0.94)", fontWeight: 600, fontSize:{sm:'3rem', md:'3rem', lg:'3rem', xs:'2.5rem'} }}
          >
            Discover your earning potential
          </Typography>
        </TypographyGrid>
        <SearchBar />
        {YoutubeData && <VideoDataCont data={YoutubeData} />}
      </ImageGrid>
    </Grid>
  );
};

export default LandingPage;

const ImageGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
}));

const TypographyGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  gap: 20,
  padding: "2rem",
  margin: "1rem 1rem 2rem 1rem",
}));
