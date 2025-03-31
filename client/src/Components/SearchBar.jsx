import { Divider, Grid, IconButton, InputBase, Paper } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { fetchVideoData } from "../features/DataThunk";

const SearchBar = () => {
  const[link, setLink] = useState("");
  const dispatch = useDispatch();

  const updateLink=(event)=>{
    setLink(event.target.value);
  }

  const handleSearch = ()=>{
    dispatch(fetchVideoData(link));
  }

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "35%",
        textAlign: "center",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Enter the link" value={link} onChange={updateLink}/>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
