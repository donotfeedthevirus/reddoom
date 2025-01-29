import { useSelector, useDispatch } from "react-redux";
import { setSubreddit } from "./subredditSlice";
import { subreddits } from "./subRedditList";

export default function Subreddit() {
    const selectedSubreddit = useSelector(state => state.subreddit);
    const dispatch = useDispatch();

    return (
        <div className="subredditList">
            {subreddits.map((subreddit, index) => (
                <button 
                    key={index} 
                    className={selectedSubreddit === subreddit.name? 'selected' : ''}
                    onClick={() => dispatch(setSubreddit(subreddit.name))}
                    >
                        <img src={subreddit.img} alt={subreddit.name} />
                        <h2>{subreddit.name}</h2>
                </button>
            ))}
        </div>
    );
}