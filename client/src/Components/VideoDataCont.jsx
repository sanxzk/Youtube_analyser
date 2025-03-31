import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import TextSmsIcon from "@mui/icons-material/Textsms";

// Define responsive layout constants to improve readability
const LAYOUT = {
  container: {
    width: "65%",
    flexDirection: { xs: "column", md: "row" },
    bgcolor: "rgba(95, 0, 0, 0.16)",
    margin: "3.5rem",
  },
  leftBox: {
    width: { xs: "100%", md: "25%" },
    bgcolor: "transparent",
    color: "rgba(130, 130, 130, 0.93)",
    padding: "1rem",
  },
  centerBox: {
    width: { xs: "100%", md: "50%" },
    bgcolor: "transparent",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  rightBox: {
    width: { xs: "100%", md: "25%" },
    bgcolor: "transparent",
    padding: "1rem",
  },
};


const VideoDataCont = ({ data }) => {
  // Use props for data or default to sample data
  // const details = videoData || {
  //   thumbnail: "https://i.ytimg.com/vi/9T-Zbxg9X_4/maxresdefault.jpg",
  //   title: "Paresh Pahuja - Dooron Dooron (Live from The Voice Notes Concert)",
  //   views: "4,949,852",
  //   likes: "81,155",
  //   comments: "1,328",
  //   uploadedOn: "2024-12-06T06:45:00Z",
  //   subscribers: "75,600",
  //   earnings: "$494,655",
  // };

  return (
    <Grid container sx={LAYOUT.container}>
      <Box sx={LAYOUT.leftBox}>
        <img
          src={data.details.thumbnail}
          alt="youtubeThumbnail"
          width="100%"
          style={{ objectFit: "cover" }}
        />
        <Typography variant="body1" sx={{ fontWeight: 700, fontSize: "13px" }}>
          Uploaded on:{" "}
          {new Date(data.details.uploadedOn).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </Typography>
      </Box>

      <Box sx={LAYOUT.centerBox}>
        <TitleTypo variant="h6">{data.details.title}</TitleTypo>

        <IconCont>
          <IconStyle>
            <RemoveRedEyeIcon />
            {data.details.views}
          </IconStyle>
          <IconStyle>
            <ThumbUpAltIcon />
            {data.details.likes}
          </IconStyle>
          <IconStyle>
            <TextSmsIcon />
            {data.details.comments}
          </IconStyle>
        </IconCont>
      </Box>

      <Box sx={LAYOUT.rightBox}>
        <EarnTypography variant="body1"> {data.details.earnings}</EarnTypography>
        
      </Box>
    </Grid>
  );
};

export default VideoDataCont;

const EarnTypography = styled(Typography)(() => ({
  fontSize: "2rem",
  fontWeight: 600,
  color: "rgba(126, 0, 0, 0.91)",
}));

const IconStyle = styled(Box)(() => ({
  display: "flex",
  fontSize: "19px",
  fontWeight: 700,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  textAlign: "center",
  gap:20
}));

const IconCont = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  textAlign: "center",
  padding: "15px",
  color: "rgb(155, 155, 155)",
}));

const TitleTypo = styled(Typography)(() => ({
  color: "rgba(255, 255, 255, 0.95)",
  fontWeight: 700,
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  display: "block",
}));
