import React from "react";
import { Box, Grid, styled, Typography, useMediaQuery, useTheme, keyframes } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import TextSmsIcon from "@mui/icons-material/Textsms";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

const VideoDataCont = ({ data }) => {
  const navigate = useNavigate();
  const currLink = useSelector((state)=> state.YoutubeVideoSlice.currVideoLink)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Container>
      <LeftBox>
        <ThumbnailWrapper onClick={()=> window.open(currLink ,"_blank", "noopener,noreferrer")}>
          <ThumbnailImage 
            src={data.details.thumbnail} 
            alt="Video thumbnail" 
          />
          <ThumbnailOverlay className="thumbnail-overlay">
            <PlayIcon>▶</PlayIcon>
          </ThumbnailOverlay>
        </ThumbnailWrapper>
        <UploadDate 
          variant="body2"
        >
          Uploaded on:{" "}
          {new Date(data.details.uploadedOn).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </UploadDate>
      </LeftBox>

      <ContentBox>
        <TitleTypo onClick={()=> window.open(currLink ,"_blank", "noopener,noreferrer")} variant="h5"  sx={{ 
          fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "24px" } 
        }}>
          {data.details.title}
        </TitleTypo>

        <StatsContainer>
          <StatItem>
            <StyledIcon>
              <RemoveRedEyeIcon sx={{ fontSize: { xs: "16px", sm: "18px", md: "24px" } }} />
            </StyledIcon>
            <Typography sx={{ fontSize: { xs: "12px", sm: "14px", md: "18px" } }}>
              {formatNumber(data.details.views)}
            </Typography>
          </StatItem>
          <StatItem>
            <StyledIcon>
              <ThumbUpAltIcon sx={{ fontSize: { xs: "16px", sm: "18px", md: "24px" } }} />
            </StyledIcon>
            <Typography sx={{ fontSize: { xs: "12px", sm: "14px", md: "18px" } }}>
              {formatNumber(data.details.likes)}
            </Typography>
          </StatItem>
          <StatItem>
            <StyledIcon>
              <TextSmsIcon sx={{ fontSize: { xs: "16px", sm: "18px", md: "24px" } }} />
            </StyledIcon>
            <Typography sx={{ fontSize: { xs: "12px", sm: "14px", md: "18px" } }}>
              {formatNumber(data.details.comments)}
            </Typography>
          </StatItem>
        </StatsContainer>

        <EarningsWrapper>
          <EarningsAmount variant="body1">
            ₹ {formatNumber(data.details.earnings)}
          </EarningsAmount>
        </EarningsWrapper>
      </ContentBox>
    </Container>
  );
};

// Helper function to format numbers (e.g., 1000 -> 1K)
const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num;
};

// Animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// Styled components with responsive design and animations
const Container = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '90%', 
  maxWidth: '100%',
  margin: '1rem auto',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '8px',
  border: '2px solid rgba(130, 130, 130, 0.93)',
  overflow: 'hidden',
  padding: '0.75rem',
  gap: '1rem',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  transition: 'all 0.3s ease',
  animation: `${fadeIn} 0.5s ease-in`,
  
  '&:hover': {
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
    borderColor: 'rgba(150, 150, 150, 1)',
  },
  
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    padding: '1rem',
    margin: '2rem auto',
    maxWidth: '95%',
  },
  
  [theme.breakpoints.up('md')]: {
    padding: '1.5rem',
    gap: '2rem',
    maxWidth: '90%',
  },
  
  [theme.breakpoints.up('lg')]: {
    maxWidth: '1200px',
    padding: '2rem',
  }
}));

const LeftBox = styled(Box)(({ theme }) => ({
  width: '100%',
  
  [theme.breakpoints.up('sm')]: {
    width: '40%',
  },
}));

const ThumbnailWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '0.6rem',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  
  '&:hover .thumbnail-overlay': {
    opacity: 1,
  },
  
  '&:hover img': {
    transform: 'scale(1.05)',
  }
}));

const ThumbnailImage = styled('img')({
  width: '100%',
  objectFit: 'cover',
  borderRadius: '0.6rem',
  aspectRatio: '16/9',
  transition: 'transform 0.3s ease',
});

const ThumbnailOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  borderRadius: '0.6rem',
}));

const PlayIcon = styled(Box)(({ theme }) => ({
  color: '#fff',
  fontSize: '2rem',
  animation: `${pulse} 2s infinite ease-in-out`,
  
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.5rem',
  },
  
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
}));

const UploadDate = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '12px',
  marginTop: '0.5rem',
  opacity: 0.8,
  transition: 'opacity 0.3s ease',
  whiteSpace: 'normal',
  wordBreak: 'break-word',
  color:'rgba(173, 173, 173, 0.93)',
  
  '&:hover': {
    opacity: 1,
  },
  
  [theme.breakpoints.up('sm')]: {
    fontSize: '14px',
    marginTop: '0.75rem',
  },
  
  [theme.breakpoints.up('md')]: {
    fontSize: '16px',
    marginTop: '1rem',
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  
  [theme.breakpoints.up('sm')]: {
    width: '60%',
  },
}));

const TitleTypo = styled(Typography)(({ theme }) => ({
  color: 'rgba(239, 239, 239, 0.95)',
  fontWeight: 700,
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  marginBottom: '0.75rem',
  transition: 'color 0.2s ease',
  cursor: 'pointer',
  wordBreak: 'break-word',
  
  '&:hover': {
    color: 'rgba(255, 255, 255, 1)',
    textDecoration: 'underline',
  },
  
  [theme.breakpoints.up('md')]: {
    marginBottom: '1rem',
  },
}));

const StatsContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: '0.5rem 0',
  color: 'rgb(155, 155, 155)',
  
  [theme.breakpoints.up('sm')]: {
    gap: '0.5rem',
    justifyContent: 'space-around',
  },
}));

const StatItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '2px',
  fontSize: '0.875rem',
  fontWeight: 600,
  padding: '0.25rem',
  borderRadius: '4px',
  transition: 'all 0.2s ease',
  
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    transform: 'translateY(-2px)',
    color: 'rgb(200, 200, 200)',
  },
  
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
    gap: '4px',
    padding: '0.4rem',
  },
  
  [theme.breakpoints.up('md')]: {
    fontSize: '1.25rem',
    gap: '6px',
    padding: '0.5rem',
  },
}));

const StyledIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.2s ease',
  
  '&:hover': {
    transform: 'scale(1.2)',
  }
}));

const EarningsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginTop: '0.75rem',
  
  [theme.breakpoints.up('md')]: {
    marginTop: '1rem',
  },
}));

const EarningsAmount = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 600,
  color: 'rgba(216, 0, 0, 0.91)',
  background: 'linear-gradient(90deg, rgba(255,255,255,0.88) 25%, rgba(255,240,240,0.88) 50%, rgba(255,255,255,0.88) 75%)',
  backgroundSize: '200% 100%',
  padding: '0.3rem 0.75rem',
  borderRadius: '2rem',
  width: '100%',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  
  '&:hover': {
    boxShadow: '0 4px 12px rgba(216, 0, 0, 0.3)',
    transform: 'scale(1.02)',
    animation: `${shimmer} 2s infinite linear`,
  },
  
  [theme.breakpoints.up('sm')]: {
    width: '80%',
    fontSize: '1.5rem',
    padding: '0.35rem 0.85rem',
  },
  
  [theme.breakpoints.up('md')]: {
    width: '60%',
    fontSize: '1.75rem',
    padding: '0.4rem 1rem',
  },
  
  [theme.breakpoints.up('lg')]: {
    width: '50%',
    fontSize: '2rem',
  },
}));

export default VideoDataCont;