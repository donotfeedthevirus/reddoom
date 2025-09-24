# reddoom
A Codecademy practice project for experimenting with **external APIs, React, and Redux Toolkit** by building a lightweight Reddit client UI.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [State & Data Flow](#state--data-flow)
- [External API](#external-api)
- [Styling](#styling)
- [Future Work](#future-work)
- [Acknowledgements](#acknowledgements)

## Overview
The app renders:
- A header with a **global search bar**  
- A **horizontally scrolling list of curated subreddits**  
- A **post feed sourced from Reddit’s public JSON API**  

> Global state is managed with **Redux Toolkit** to coordinate the selected subreddit, user’s search query, and fetched post metadata.

## Features
- **Global search state** – captures and stores the user’s query in Redux.  
- **Curated subreddit picker** – scrollable button list of popular communities with active styling.  
- **Reddit post fetching** – async thunk that loads posts, normalizes fields (title, preview image, stats, permalink), and tracks request status for UI feedback.  

## Tech Stack
- **React 18** – UI rendering  
- **Redux Toolkit & React Redux** – state management  
- **Axios** – HTTP requests to Reddit API  
- **Vite** – development tooling & bundling  
- **ESLint** – linting with React-focused rules  

## Getting Started

### Prerequisites
- Node.js 18+  
- npm  

### Installation
```bash
# Clone and install dependencies
git clone https://github.com/donotfeedthevirus/reddoom.git
cd reddoom
npm install

# Start dev server
npm run dev
```

> This launches **Vite** with hot module replacement.

## Project Structure
```
src/
 ├─ App.jsx     # Layout: search bar, subreddit list, feed container
 ├─ features/
 │   ├─ searchBar/     # Search input + slice for global state
 │   ├─ subredit/     # Curated subreddit metadata + selector
 │   ├─ posts/     # Async thunk + reducer for Reddit posts
 │   └─ store.js     # Central Redux store
 ├─ main.jsx     # React entry point + Redux provider
 └─ index.css     # Global styles, fonts, responsive layout
```

## State & Data Flow
- **Subreddit picker** → dispatches `setSubreddit`, updating active community in Redux
- **Search bar** → dispatches `setSearchTerm` or `clearSearchTerm`
- **fetchPostsThunk** → retrieves posts for the selected subreddit and stores normalized records + status flags

> Redux store aggregates all slices so components can access subreddit selection, search term, and post data via selectors.

##  External API

Posts are fetched from Reddit’s public JSON endpoints:
```
https://www.reddit.com/r/{subreddit}.json
```

> Extracted fields: title, preview image, votes, comment totals, permalink, and author.

## 🎨 Styling
- Global CSS with **Funnel Display** typeface
- Header & search bar styling
- Horizontally scrolling subreddit picker
- Responsive tweaks for smaller screens

## Future Work
- [ ] Implement **PostList** component to render fetched posts with metadata & links
- [ ] Display **loading & error states** in the UI
- [ ] Add **post filtering** via global searchTerm
