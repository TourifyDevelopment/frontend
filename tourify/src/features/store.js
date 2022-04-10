import { configureStore } from '@reduxjs/toolkit';
import containerReducer from './slices/containerSlice';

//The redux store for this application
export default configureStore({
    reducer: {
        container: containerReducer
    }
})