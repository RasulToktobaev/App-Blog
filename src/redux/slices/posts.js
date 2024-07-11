import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios"

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const { data } = await axios.get('/posts')
    return data;
});

const initialState = {
    posts: {
        items: [],
        status: 'loading',
    },
    tags: {
        items: [],
        status: 'loading',
    },
};

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.pending] : (state) => {
            state.posts.status = 'loading';
        }
    }
});


export const postReducer = postSlice.reducer;