import { createAsyncThunk } from "@reduxjs/toolkit";
import { getVideoDetailService } from "./DataService";

export const fetchVideoData = createAsyncThunk(
  "video/fetchVideoData",
  async (link, thunkAPI) => {
    try {
      const VideoData = await getVideoDetailService(link);
      if(VideoData.success === false)
      {
        throw new Error("video not found")
      }
      return VideoData;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
