import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getPropertiesByType } from "../../models/editor/templateTypes";

export const containerSlice = createSlice({
    name: 'container',
    type: 'container',
    initialState: [],
    reducers: {
        addContainer: (state, action) => {

            const props = getPropertiesByType(action.payload.type);
            state.push({...action.payload, isSelected: false, props});
        },

        removeContainer: (state, action) => {
            return state;
        },

        select: (state, action) => {
            state.forEach((e) => e.isSelected = e.id === action.payload)
        },

        moveContainer: (state, action) => {
            const currentPosition = action.payload.currenPosition;
            const newPosition = action.payload.newPosition;
            if (currentPosition < newPosition) {
                newPosition--;
            }
            const e = state[currentPosition];
            state.splice(currentPosition, 1);
            state.splice(newPosition, 0, e);
        },

        editProps: (state, action) => {
            const id = action.payload.id;
            const props = action.payload.props;

        }
    }
});

export const { addContainer, removeContainer, select, editProps } = containerSlice.actions;

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