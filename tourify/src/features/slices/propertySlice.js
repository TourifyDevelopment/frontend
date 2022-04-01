import { createSlice } from "@reduxjs/toolkit";
import { getTextProperties } from '../../models/editor/textProperties';

export const propertySlice = createSlice({
    name: 'text-property',
    type: 'text-property',
    initialState: getTextProperties(),
    reducers: {
        
    }
})


export default propertySlice.reducer;