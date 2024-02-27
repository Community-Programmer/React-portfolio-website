import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API_BASE_URL from "../config/config";

const authSlice = createSlice({
    name:'authData',
    initialState:{
        admin: '',
        authorized: false,
    },
    extraReducers: builder =>{
        builder
        .addCase(authAdmin.fulfilled, (state, action)=>{
            state.authorized = true;
            state.admin = action.payload.admin;
        })
        .addCase(authorization.fulfilled, (state,action)=>{
            state.authorized = true;
            state.admin = action.payload.data.admin;
        })
        .addCase(logoutAdmin.fulfilled, (state,action)=>{
            state.authorized = false;
            state.admin = '';
        })
        
    }

})

export default authSlice.reducer;

export const authAdmin = createAsyncThunk('auth/login', async (loginData)=>{

    const response = await axios.post(`${API_BASE_URL}/admin/login`, loginData, {
        withCredentials: true
    });
    return response.data;

})

export const logoutAdmin = createAsyncThunk('auth/logout', async ()=>{

    const response = await axios.get(`${API_BASE_URL}/admin/logout`,{
        withCredentials: true
    });

    return response.data;

})


export const authorization = createAsyncThunk('auth/verify', async ()=>{

    const response = await axios.get(`${API_BASE_URL}/admin/verify`,{
        withCredentials: true
      });
    return response.data;

})
