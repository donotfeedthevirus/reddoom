import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts/postsSlice";
import searchTermReducer from "./searchBar/searchTermSlice";
import subredditReducer from "./subredit/subredditSlice";

export const store = configureStore({
    reducer: {
        subreddit: subredditReducer,
        posts: postsReducer,
        searchTerm: searchTermReducer,
    },
});

export default store;