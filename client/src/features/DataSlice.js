import { createSlice } from "@reduxjs/toolkit";
import { fetchVideoData } from "./DataThunk";

const initialState = {
    isLoading:false,
    error:null,
    currVideo:null,
    history:[],
    saved:[],
    comparison:[],
};

const DataSlice = createSlice({
    name:'YoutubeData',
    initialState,
    reducers:{},

    extraReducers:(builder)=>{
        builder
        .addCase(fetchVideoData.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.error=null;
            state.currVideo=action.payload;
        })

        .addCase(fetchVideoData.pending,(state,action)=>{
            state.isLoading=true;
            state.error=null;
            state.currVideo=null;
        })

        .addCase(fetchVideoData.rejected,(state,error)=>{
            state.isLoading=false;
            state.error=null;
            state.currVideo=null;
        });
    },
});

export default DataSlice.reducer;