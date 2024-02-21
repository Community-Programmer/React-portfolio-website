import { configureStore } from "@reduxjs/toolkit";

import DataReducer from '../Store/DataSlice'


const store = configureStore({
    reducer: {
        projectData: DataReducer

    }
})


export default store;