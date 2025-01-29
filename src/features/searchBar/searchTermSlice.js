import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const searchTermSlice = createSlice({
    name: "searchTerm",
    initialState,
    reducers: {
        setSearchTerm: (state, action) => action.payload,
        clearSearchTerm: () => initialState
    },
});

export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;