import { createSlice , createAsyncThunk } from "@reduxjs/toolkit"; 
import axios from "../../axios"

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {

});

    const initialState = {
        posts:{
            items:[],
            status: 'loading',
        },
        tags:{
            items:[],
            status: 'loading',
        },
    };

    const postSlice = createSlice({
        name:'posts',
        initialState,
        reducers:{},
    });


    export const postReducer = postSlice.reducer;