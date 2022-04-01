import { configureStore } from '@reduxjs/toolkit';
import containerReducer from './slices/containerSlice';

export default configureStore({
    reducer: {
        container: containerReducer
    }
})