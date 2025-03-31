import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from './DataSlice'

const store  = configureStore({
    reducer:{
        YoutubeVideoSlice :sliceReducer
    },
})

export default store;