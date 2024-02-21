import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API_BASE_URL from "../config/config";


const status = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
});

const dataSlice = createSlice({
    name:'portfolioData',
    initialState:{
        data: [],
        status: '',
    },
    extraReducers: builder =>{
        builder
        .addCase(fetchPortfolioData.pending, (state, action)=>{
            state.status = status.LOADING;
        })
        .addCase(fetchPortfolioData.fulfilled, (state, action)=>{
            state.data = action.payload;
            state.status = status.IDLE;
        })
        .addCase(fetchPortfolioData.rejected,(state, action)=>{
            state.status = status.ERROR;
        })
    }

})

export default dataSlice.reducer;

//Thunks for getting all api data

export const fetchPortfolioData = createAsyncThunk('data/fetch', async()=>{
        
        const [technologiesResponse, projectResponse, skillResponse, timelineResponse] = await Promise.all([
            axios.get(`${API_BASE_URL}/data/gettechnologies`),
            axios.get(`${API_BASE_URL}/data/getproject`),
            axios.get(`${API_BASE_URL}/data/getskill`),
            axios.get(`${API_BASE_URL}/data/gettimeline`)
        ]);
        
        const technologiesData = technologiesResponse.data;
        const projectData = projectResponse.data;
        const skillData = skillResponse.data;
        const timelineData = timelineResponse.data;
        return {
         technologiesData,
         projectData,
         skillData,
         timelineData
        };
        
    
})




