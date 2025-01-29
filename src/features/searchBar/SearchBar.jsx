import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm, clearSearchTerm } from "./searchTermSlice";

export default function SearchBar() {
    const searchTerm = useSelector(state => state.searchTerm);
    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        dispatch(setSearchTerm(target.value));
    };
    const handleClear = () => {
        dispatch(clearSearchTerm());
    };

    return (
        <div className="searchBar">
            <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} />
            {searchTerm && <button onClick={handleClear}>x</button>}            
        </div>
    );
}