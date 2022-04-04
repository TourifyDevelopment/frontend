import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getPropertiesByType } from "../../models/editor/TemplateTypes";

export const containerSlice = createSlice({
    name: 'container',
    type: 'container',
    initialState: [],
    reducers: {
        addContainer: (state, action) => {
            const props = getPropertiesByType(action.payload.type);
            state.push({ ...action.payload, isSelected: false, props});
        },

        removeContainer: (state, action) => {
            return state;
        },

        select: (state, action) => {
            console.log(action)
            state.forEach((e) => e.isSelected = e.id === action.payload)


        }
    }
});

export const { addContainer, removeContainer, select } = containerSlice.actions;

export const selectContainer = (state) => state.container;

export const selectSelected = (state) => {
    const selected = state.container.find((e) => e.isSelected)
    return selected;
}

export const selectContainerById = createSelector(
    [
        state => state.container,
        (state, id) => id
    ],
    (container, id) => container.find(container => container.id === id)
)


export default containerSlice.reducer;