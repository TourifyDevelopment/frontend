import { configureStore } from '@reduxjs/toolkit';
import propertiesReducer from './slices/propertySlice';

export default configureStore({
    reducer: {
        properties: propertiesReducer
    }
})