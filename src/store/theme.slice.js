import {createSlice} from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState: {
        darkMode: false
    },
    reducers: {
        switchTheme: (state, action) => {
            if (!state.darkMode) {
                state.darkMode = true;
            } else {
                state.darkMode = false;
            }
            // console.log(state.darkMode);
            return state;
        }
    
    }
});

const themeReducer = themeSlice.reducer;

export const {switchTheme} = themeSlice.actions;

export default themeReducer;