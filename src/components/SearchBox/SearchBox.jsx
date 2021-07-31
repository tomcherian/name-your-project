import React from 'react';
import './SearchBox.css';

const SearchBox = ({onInputChange}) => {
    return (
        <div className="search-container">
            <input onChange= {(event) => {onInputChange(event.target.value)}} type="text" className="search-input" placeholder="Type Keywords" />
        </div>
    )
};

export default SearchBox