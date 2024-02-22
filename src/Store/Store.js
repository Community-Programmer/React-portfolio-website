import { configureStore } from "@reduxjs/toolkit";

import DataReducer from '../Store/DataSlice'
import AuthReducer from '../Store/authSlice'


const store = configureStore({
    reducer: {
        portfolioData: DataReducer,
        auth: AuthReducer

    }
})


export default store;