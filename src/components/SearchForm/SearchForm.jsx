import {ImSearch} from 'react-icons/im';
import { useState } from "react";
import css from './searchForm.module.css';

//===========================================================================================
const SearchForm = ({ onSubmit }) => {

    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!query.trim()) return alert('The query is empty! Please, point what do you want to find!');
      onSubmit(query);
      setQuery("");
    };

    const handleChangeQuery = (e) => {
      setQuery(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
          <button type="submit"><span><ImSearch className={css.icon}/></span></button>
          <input
              type="text"
              placeholder="Search movie"
              id="input"
              value={query}
              onChange={handleChangeQuery} 
          />
        </form>
    );
};

export default SearchForm;
//===========================================================================================
