import { createSlice } from "@reduxjs/toolkit";

const initialState = "popular";

const subredditSlice = createSlice({
    name: "subreddit",
    initialState,
    reducers: {
        setSubreddit: (state, action) => action.payload,
    },
});

export const { setSubreddit } = subredditSlice.actions;
export default subredditSlice.reducer;