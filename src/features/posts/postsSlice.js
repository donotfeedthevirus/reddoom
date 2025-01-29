import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPostsThunk = createAsyncThunk(
  "posts/fetchPosts",
  async (subreddit) => {
    const response = await axios.get(
      `https://www.reddit.com/r/${subreddit}.json`
    );
    console.log("test");

    return response.data.data.children.map((post) => ({
      id: post.data.id,
      title: post.data.title,
      img: post.data.preview
        ? post.data.preview.images[0].source.url.replace("&amp;", "&")
        : null,
      text: post.data.selftext || null,
      votes: post.data.ups,
      numComments: post.data.num_comments,
      link: `https://www.reddit.com${post.data.permalink}`,
      author: post.data.author,
    }));
  }
);

const initialState = {
  postList: [],
  status: "idle",
  error: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsThunk.fulfilled, (state, action) => {
        state.postList = action.payload;
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(fetchPostsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchPostsThunk.pending, (state) => {
        state.status = "loading";
        state.error = null;
      });
  },
});

export default postsSlice.reducer;