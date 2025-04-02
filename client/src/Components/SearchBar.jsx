import { Divider, Grid, IconButton, InputBase, Paper, useTheme, useMediaQuery, Tooltip } from "@mui/material";
import React, { useState, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LinkIcon from "@mui/icons-material/Link";
import { useDispatch } from "react-redux";
import { fetchVideoData } from "../features/DataThunk";
import { keyframes } from "@mui/system";
import { styled } from "@mui/material/styles";
import { setCurrVideoLink } from "../features/DataSlice";

const SearchBar = () => {
  const [link, setLink] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const updateLink = (event) => {
    setLink(event.target.value);
  };

  const handleSearch = () => {
    if (link.trim()) {
      setIsSearching(true);
      dispatch(setCurrVideoLink(link))
      dispatch(fetchVideoData(link))
        .finally(() => {
          setIsSearching(false);
        });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  return (
    <SearchContainer>
      <SearchPaper elevation={3}>
        <LinkIconWrapper />
        <StyledInputBase
          placeholder={isMobile ? "Enter YouTube link" : "Enter YouTube video link to analyze"}
          value={link}
          onChange={updateLink}
          onKeyDown={handleKeyDown}
          inputRef={inputRef}
          onFocus={handleFocus}
          inputProps={{ 'aria-label': 'search youtube video' }}
          startAdornment={null}
          fullWidth
        />
        <StyledDivider orientation="vertical" />
        <Tooltip title="Search">
          <AnimatedIconButton 
            color="primary" 
            aria-label="search video"
            onClick={handleSearch}
            disabled={isSearching || !link.trim()}
          >
            <SearchIcon />
          </AnimatedIconButton>
        </Tooltip>
      </SearchPaper>
    </SearchContainer>
  );
};

export default SearchBar;


// Styled components
const SearchPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "90%",
  maxWidth: "450px",
  padding: "4px 8px",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  backdropFilter: "blur(5px)",
  transition: "all 0.3s ease",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  margin: "0 auto",
  animation: `${fadeIn} 0.5s ease-out`,
  
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.65)",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12)",
    transform: "translateY(-2px)",
  },
  
  "&:focus-within": {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
    transform: "translateY(-2px)",
    animation: `${pulse} 1.5s infinite`,
  },
  
  [theme.breakpoints.up("sm")]: {
    width: "70%",
    padding: "4px 12px",
  },
  
  [theme.breakpoints.up("md")]: {
    width: "50%",
  },
  
  [theme.breakpoints.up("lg")]: {
    width: "35%",
  }
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  flex: 1,
  padding: "4px 8px",
  fontSize: "14px",
  transition: "all 0.2s ease",
  
  "& input::placeholder": {
    opacity: 0.7,
    transition: "opacity 0.2s ease",
  },
  
  "&:focus-within input::placeholder": {
    opacity: 0.9,
  },
  
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
    padding: "6px 12px",
  }
}));

const AnimatedIconButton = styled(IconButton)(({ theme }) => ({
  transition: "all 0.2s ease",
  padding: "8px",
  
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    transform: "scale(1.1)",
  },
  
  "&:active": {
    transform: "scale(0.95)",
  }
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  height: 24,
  margin: theme.spacing(0.5),
}));

const LinkIconWrapper = styled(LinkIcon)(({ theme }) => ({
  marginRight: "8px",
  opacity: 0.6,
  transition: "opacity 0.2s ease",
  fontSize: "20px",
  
  ".MuiInputBase-root:focus-within &": {
    opacity: 1,
    color: theme.palette.primary.main,
  }
}));

const SearchContainer = styled(Grid)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(2, 1),
  
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(3, 2),
  }
}));


// Define animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }`;