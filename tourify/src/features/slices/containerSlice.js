import { createSelector, createSlice } from "@reduxjs/toolkit";
import { createNewContainer, createNewResource } from "../../auth";
import { getPropertiesByType } from "../../models/editor/templateTypes";

/**
 * The slice for all reducers and actions of the editor and the container.
 */
export const containerSlice = createSlice({
    name: 'container',
    type: 'container',
    initialState: [],
    reducers: {
        /**
         * Adds a container with an id, type, props,... 
         */
        addContainer: (state, action) => {
            const props = getPropertiesByType(action.payload.type);
            state.push({...action.payload, isSelected: false, props});
        },

        /**
         * Removes a container from the store
         * NOT IMPLEMENTED YET         
         */
        removeContainer: (state, action) => {
            return state;
        },

        /**
         * "Selects" a container. Container gets highlighted and props-sidebar of the editor get visible 
         */
        select: (state, action) => {
            state.forEach((e) => e.isSelected = e.id === action.payload)
        },

        /**
         * Moves a Container up or down.
         */
        moveContainer: (state, action) => {
            const currentPosition = action.payload.currentPosition;
            const newPosition = action.payload.newPosition;

            if (newPosition >= state.length) {
                var k = newPosition - state.length + 1;
                while (k--) {
                    state.push(undefined);
                }
            }
            state.splice(newPosition, 0, state.splice(currentPosition, 1)[0]);
            return state;
        },

        /**
         * Edits the props of the container with the id.
         */
        editProps: (state, action) => {
            const id = action.payload.id;
            const props = action.payload.props;

        }
    }
});

//Exports all the actions of this slice
export const { addContainer, removeContainer, moveContainer, select, editProps } = containerSlice.actions;

//Selector: return all containers
export const selectContainer = (state) => state.container;

//Selector: return the selected container
export const selectSelected = (state) => {
    console.log('selected')
    const selected = state.container.find((e) => e.isSelected)
    return selected;
}

//Selector: return the container with the given id
export const selectContainerById = createSelector(
    [
        state => state.container,
        (state, id) => id
    ],
    (container, id) => container.find(container => container.id === id)
)

//exports the reducer
export default containerSlice.reducer;