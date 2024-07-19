import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./slices/posts";


const store = configureStore({
    reducer: {
        posts: 
    }
});

export default store;