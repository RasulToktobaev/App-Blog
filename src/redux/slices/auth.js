import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk('auth/fetchUserData', async () => {
    const { data } = await axios.post('/auth/login')
    return data;
});



const initialState = {
    data: null,
    status: 'loading',
};

const authSlice = createSlice({

})