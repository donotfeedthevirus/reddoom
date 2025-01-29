import SearchBar from './features/searchBar/SearchBar';
import Subreddit from './features/subredit/Subreddit';
import PostList from './features/posts/PostList';

function App() {
  return (
    <>
      <header>
        <div className='upper'>
          <h1>red<span>doom</span></h1>
          <SearchBar className/>
        </div>
        <Subreddit/>
      </header>
      <main>
        <PostList/>
      </main>
    </>
  )
};

export default App
